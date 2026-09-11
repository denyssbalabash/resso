// Заглушки даних. Пізніше замінюються на дані з Lovable Cloud.

export const INSTAGRAM_URL = "https://www.instagram.com/resso.coffee/";

export type Location = {
  id: string;
  name: string;
  address: string;
  hours: string;
  mapUrl: string;
};

export const LOCATIONS: Location[] = [
  {
    id: "central",
    name: "Resso Центр",
    address: "вул. Прикладна, 12",
    hours: "08:00 — 21:00",
    mapUrl: "https://maps.google.com/?q=Resso+Coffee",
  },
  {
    id: "park",
    name: "Resso Парк",
    address: "просп. Прикладний, 48",
    hours: "09:00 — 20:00",
    mapUrl: "https://maps.google.com/?q=Resso+Coffee",
  },
];

export type Prize = {
  id: string;
  label: string;
  short: string;
};

export const PRIZES: Prize[] = [
  { id: "cookie", label: "Печиво з передбаченням", short: "Печиво" },
  { id: "discount", label: "Знижка −50 ₴", short: "−50 ₴" },
  { id: "tote", label: "Брендований шопер", short: "Шопер" },
  { id: "drink", label: "Безкоштовний напій", short: "Напій" },
  { id: "none", label: "Наступного разу", short: "Мимо" },
];

export const TASKS = [
  {
    id: "instagram" as const,
    title: "Підписатися в Instagram",
    description: "Один акаунт на всі заклади Resso",
    url: INSTAGRAM_URL,
    cta: "Відкрити Instagram",
  },
  {
    id: "review" as const,
    title: "Залишити відгук на Google Maps",
    description: "Кілька слів про вашу каву",
    url: "https://maps.google.com/?q=Resso+Coffee",
    cta: "Відкрити карту",
  },
];

export type TaskId = (typeof TASKS)[number]["id"];
