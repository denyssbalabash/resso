import { useCallback, useEffect, useState } from "react";
import type { TaskId } from "./resso-data";

// Єдина точка доступу до стану. Зараз — локальне сховище браузера,
// пізніше замінюється на Lovable Cloud без змін в UI.

const KEY = "resso.state.v1";

export type WonPrize = {
  prizeId: string;
  label: string;
  code: string;
  wonAt: string;
};

export type RessoState = {
  onboarded: boolean;
  locationId: string | null;
  tasks: TaskId[];
  spinsUsed: number;
  prizes: WonPrize[];
};

const EMPTY: RessoState = {
  onboarded: false,
  locationId: null,
  tasks: [],
  spinsUsed: 0,
  prizes: [],
};

function read(): RessoState {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? { ...EMPTY, ...(JSON.parse(raw) as RessoState) } : EMPTY;
  } catch {
    return EMPTY;
  }
}

const listeners = new Set<() => void>();

function write(next: RessoState) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  }
  listeners.forEach((l) => l());
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
  const [state, setState] = useState<RessoState>(EMPTY);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const sync = () => setState(read());
    sync();
    setReady(true);
    listeners.add(sync);
    return () => {
      listeners.delete(sync);
    };
  }, []);

  const update = useCallback((patch: Partial<RessoState>) => {
    write({ ...read(), ...patch });
  }, []);

  const completeTask = useCallback((id: TaskId) => {
    const current = read();
    if (current.tasks.includes(id)) return;
    write({ ...current, tasks: [...current.tasks, id] });
  }, []);

  const addPrize = useCallback((prize: WonPrize) => {
    const current = read();
    write({
      ...current,
      spinsUsed: current.spinsUsed + 1,
      prizes: [prize, ...current.prizes],
    });
  }, []);

  const spinsLeft = Math.max(0, state.tasks.length - state.spinsUsed);

  return { state, ready, spinsLeft, update, completeTask, addPrize };
}
