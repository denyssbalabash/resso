import { useEffect, useState } from "react";

export type TgUser = {
  id: number;
  firstName: string;
  lastName: string;
  photoUrl?: string | undefined;
};

// Тестовий користувач для перегляду поза Telegram
const DEMO: TgUser = {
  id: 100200300,
  firstName: "Олег",
  lastName: "Ковальчук",
};

type TelegramWebApp = {
  ready: () => void;
  expand: () => void;
  initDataUnsafe?: {
    user?: {
      id: number;
      first_name?: string;
      last_name?: string;
      photo_url?: string;
    };
  };
};

export function useTelegramUser() {
  const [user, setUser] = useState<TgUser>(DEMO);
  const [isTelegram, setIsTelegram] = useState(false);

  useEffect(() => {
    const tg = (window as unknown as { Telegram?: { WebApp?: TelegramWebApp } })
      .Telegram?.WebApp;
    if (!tg) return;
    tg.ready();
    tg.expand();
    setIsTelegram(true);
    const u = tg.initDataUnsafe?.user;
    if (u) {
      setUser({
        id: u.id,
        firstName: u.first_name ?? "Гість",
        lastName: u.last_name ?? "",
        photoUrl: u.photo_url,
      });
    }
  }, []);

  return { user, isTelegram };
}

export function initials(user: TgUser) {
  return `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase();
}
