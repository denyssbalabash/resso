import { createServerFn } from "@tanstack/react-start";
import crypto from "crypto";
import { adminDb } from "./firebaseAdmin";

export type TelegramUser = {
  id: number;
  first_name: string;
  username?: string;
  photo_url?: string;
};

export type UserProfile = {
  telegramId: number;
  firstName: string;
  username: string | null;
  photoUrl: string | null;
  spinsLeft: number;
  hasSpunWheel: boolean;
  isIgSubscribed: boolean;
  isMapsReviewed: boolean;
  hasOnboarded?: boolean;
  createdAt: string;
  lastActiveAt: string;
};

// Validates the initData string from Telegram
function validateInitData(initData: string, botToken: string): TelegramUser | null {
  try {
    const urlParams = new URLSearchParams(initData);
    const hash = urlParams.get("hash");
    
    if (!hash) return null;
    
    urlParams.delete("hash");
    
    const dataCheckString = Array.from(urlParams.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, value]) => `${key}=${value}`)
      .join("\n");
      
    const secretKey = crypto.createHmac("sha256", "WebAppData").update(botToken).digest();
    const calculatedHash = crypto.createHmac("sha256", secretKey).update(dataCheckString).digest("hex");
    
    if (calculatedHash === hash) {
      const userString = urlParams.get("user");
      if (userString) {
        return JSON.parse(userString) as TelegramUser;
      }
    }
  } catch (error) {
    console.error("Error validating initData:", error);
  }
  return null;
}

export const authenticateTelegramUser = createServerFn({ method: "POST" })
  .validator((data: { initData: string }) => data)
  .handler(async ({ data }) => {
    const botToken = process.env.BOT_TOKEN;
    if (!botToken) {
      throw new Error("BOT_TOKEN is not configured on the server");
    }

    const telegramUser = validateInitData(data.initData, botToken);
    
    if (!telegramUser) {
      throw new Error("Unauthorized: Invalid Telegram initData signature");
    }

    const userIdStr = telegramUser.id.toString();
    const userRef = adminDb.collection("users").doc(userIdStr);
    const userSnap = await userRef.get();

    const now = new Date().toISOString();

    if (!userSnap.exists) {
      // Create new user profile
      const newProfile: UserProfile = {
        telegramId: telegramUser.id,
        firstName: telegramUser.first_name,
        username: telegramUser.username || null,
        photoUrl: telegramUser.photo_url || null,
        spinsLeft: 1, // Welcome free spin
        hasSpunWheel: false,
        isIgSubscribed: false,
        isMapsReviewed: false,
        hasOnboarded: false,
        createdAt: now,
        lastActiveAt: now,
      };
      
      await userRef.set(newProfile);
      return newProfile;
    } else {
      // Update existing user profile
      const existingData = userSnap.data() as Partial<UserProfile>;
      const hasOnboarded = existingData.hasOnboarded ?? true; // legacy users are considered onboarded
      await userRef.update({
        lastActiveAt: now,
        firstName: telegramUser.first_name,
        username: telegramUser.username || null,
        photoUrl: telegramUser.photo_url || null,
      });
      
      return {
        ...existingData,
        hasOnboarded,
        lastActiveAt: now,
        firstName: telegramUser.first_name,
        username: telegramUser.username || null,
        photoUrl: telegramUser.photo_url || null,
      } as UserProfile;
    }
  });

export const completeOnboardingOnServer = createServerFn({ method: "POST" })
  .validator((data: { telegramId: number }) => data)
  .handler(async ({ data }) => {
    const userIdStr = data.telegramId.toString();
    const userRef = adminDb.collection("users").doc(userIdStr);
    
    await userRef.update({
      hasOnboarded: true,
    });
    
    return true;
  });

export const spinWheelOnServer = createServerFn({ method: "POST" })
  .validator((data: { telegramId: number }) => data)
  .handler(async ({ data }) => {
    const userIdStr = data.telegramId.toString();
    const userRef = adminDb.collection("users").doc(userIdStr);
    
    // Use a transaction to safely decrement spinsLeft
    const prize = await adminDb.runTransaction(async (transaction) => {
      const userSnap = await transaction.get(userRef);
      if (!userSnap.exists) {
        throw new Error("User not found");
      }
      
      const userData = userSnap.data() as UserProfile;
      
      if (userData.spinsLeft <= 0) {
        throw new Error("No spins left");
      }
      
      // Calculate prize on the server
      const isShopper = userData.isIgSubscribed && userData.isMapsReviewed && userData.spinsLeft === 1;
      const targetId = isShopper ? "tote" : "cookie";
      const targetLabel = isShopper ? "Шопер Resso" : "Печиво з передбаченням";
      
      // Generate code
      const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
      const pick = (n: number) => Array.from({ length: n }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join("");
      const code = `RS-${pick(4)}-${pick(2)}`;
      
      transaction.update(userRef, {
        spinsLeft: userData.spinsLeft - 1,
        hasSpunWheel: true,
      });
      
      return { prizeId: targetId, label: targetLabel, code, wonAt: new Date().toISOString() };
    });
    
    return { success: true, prize };
  });

export const completeTaskOnServer = createServerFn({ method: "POST" })
  .validator((data: { telegramId: number; taskType: "instagram" | "maps" }) => data)
  .handler(async ({ data }) => {
    const userIdStr = data.telegramId.toString();
    const userRef = adminDb.collection("users").doc(userIdStr);
    
    await adminDb.runTransaction(async (transaction) => {
      const userSnap = await transaction.get(userRef);
      if (!userSnap.exists) {
        throw new Error("User not found");
      }
      
      const userData = userSnap.data() as UserProfile;
      
      if (data.taskType === "instagram" && !userData.isIgSubscribed) {
        transaction.update(userRef, {
          isIgSubscribed: true,
          spinsLeft: userData.spinsLeft + 1,
        });
      } else if (data.taskType === "maps" && !userData.isMapsReviewed) {
        transaction.update(userRef, {
          isMapsReviewed: true,
          spinsLeft: userData.spinsLeft + 1,
        });
      }
    });
    
    // Fetch updated user to return fresh state
    const updatedUserSnap = await userRef.get();
    return updatedUserSnap.data() as UserProfile;
  });
