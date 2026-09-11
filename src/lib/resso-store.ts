import { useCallback, useEffect, useState } from "react";
import type { TaskId } from "./resso-data";
import { authenticateTelegramUser, completeTaskOnServer, spinWheelOnServer, type UserProfile } from "./server-functions";

// Global state holding the remote user profile
const listeners = new Set<() => void>();
let globalProfile: UserProfile | null = null;
let globalLoading = true;
let globalError: string | null = null;

function notify() {
  listeners.forEach((l) => l());
}

export type WonPrize = {
  prizeId: string;
  label: string;
  code: string;
  wonAt: string;
};

// Map remote profile back to local RessoState format for UI compatibility
export type RessoState = {
  onboarded: boolean;
  locationId: string | null;
  tasks: TaskId[];
  spinsUsed: number;
  prizes: WonPrize[]; // For now, we will simulate prizes locally or fetch from server later
};

const EMPTY: RessoState = {
  onboarded: false,
  locationId: null,
  tasks: [],
  spinsUsed: 0,
  prizes: [],
};

// Derived state
function deriveRessoState(profile: UserProfile | null): RessoState {
  if (!profile) return EMPTY;
  
  const tasks: TaskId[] = [];
  if (profile.isIgSubscribed) tasks.push("instagram");
  if (profile.isMapsReviewed) tasks.push("maps");
  
  // Calculate how many spins used. Initial free spin = 1.
  // total spins = 1 (free) + tasks.length
  // spinsUsed = total spins - spinsLeft
  const totalSpinsAvailable = 1 + tasks.length;
  const spinsUsed = Math.max(0, totalSpinsAvailable - profile.spinsLeft);
  
  return {
    onboarded: true,
    locationId: null,
    tasks,
    spinsUsed,
    prizes: [], // Can be populated from Firestore if needed
  };
}

export function generateCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const pick = (n: number) =>
    Array.from(
      { length: n },
      () => alphabet[Math.floor(Math.random() * alphabet.length)],
    ).join("");
  return `RS-${pick(4)}-${pick(2)}`;
}

export function useResso() {
  const [profile, setProfile] = useState<UserProfile | null>(globalProfile);
  const [isLoading, setIsLoading] = useState(globalLoading);
  const [error, setError] = useState(globalError);
  const [localOverrides, setLocalOverrides] = useState<Partial<RessoState>>({});

  useEffect(() => {
    const sync = () => {
      setProfile(globalProfile);
      setIsLoading(globalLoading);
      setError(globalError);
    };
    listeners.add(sync);
    return () => {
      listeners.delete(sync);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && globalLoading && !globalProfile && !globalError) {
      const tg = (window as any).Telegram?.WebApp;
      if (tg?.initData) {
        authenticateTelegramUser({ data: { initData: tg.initData } })
          .then((p) => {
            globalProfile = p;
            globalLoading = false;
            notify();
          })
          .catch((err) => {
            console.error("Auth error:", err);
            globalError = err.message;
            globalLoading = false;
            notify();
          });
      } else {
        // Not in Telegram or no initData available
        globalLoading = false;
        notify();
      }
    }
  }, []);

  const state = { ...deriveRessoState(profile), ...localOverrides };
  const spinsLeft = (profile?.spinsLeft ?? 0) + (localOverrides.tasks?.length ?? 0) - (localOverrides.spinsUsed ?? 0);

  const update = useCallback((patch: Partial<RessoState>) => {
    setLocalOverrides((prev) => ({ ...prev, ...patch }));
  }, []);

  const completeTask = useCallback(async (id: TaskId) => {
    if (!profile) {
      // Local mock for non-Telegram environments
      setLocalOverrides((prev) => {
        const currentTasks = prev.tasks || state.tasks;
        if (!currentTasks.includes(id)) {
          return { ...prev, tasks: [...currentTasks, id] };
        }
        return prev;
      });
      return;
    }
    try {
      const updatedProfile = await completeTaskOnServer({
        data: {
          telegramId: profile.telegramId,
          taskType: id as "instagram" | "maps",
        }
      });
      globalProfile = updatedProfile;
      notify();
    } catch (err) {
      console.error("Failed to complete task:", err);
    }
  }, [profile, state.tasks]);

  const addPrize = useCallback(async (prize: WonPrize) => {
    if (!profile) {
      setLocalOverrides((prev) => ({
        ...prev,
        prizes: [prize, ...(prev.prizes || state.prizes)],
        spinsUsed: (prev.spinsUsed || state.spinsUsed) + 1,
      }));
      return;
    }
    // Remote handling is done by spinWheelOnServer mostly, but we can do local overrides if needed
  }, [profile, state]);

  return { state, ready: !isLoading, spinsLeft, update, completeTask, addPrize, profile };
}
