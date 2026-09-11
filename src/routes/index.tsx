import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Coffee,
  Instagram,
  Lock,
  MapPin,
  Newspaper,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/resso-logo.png.asset.json";
import { AppShell } from "@/components/resso/AppShell";
import { Chip, Counter, Eyebrow } from "@/components/resso/ui";
import { INSTAGRAM_URL, LOCATIONS } from "@/lib/resso-data";
import { useResso } from "@/lib/resso-store";
import { initials, useTelegramUser } from "@/lib/telegram";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Resso Coffee — кабінет гостя" },
      {
        name: "description",
        content:
          "Кабінет гостя кавʼярні Resso: заклади, Instagram та колесо фортуни з призами.",
      },
      { property: "og:title", content: "Resso Coffee — кабінет гостя" },
      {
        property: "og:description",
        content: "Заклади, Instagram та колесо фортуни кавʼярні Resso.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { user } = useTelegramUser();
  const { state, ready, spinsLeft, update } = useResso();

  if (!ready) return <div className="min-h-screen bg-background" />;

  if (!state.onboarded) {
    return (
      <div className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-background px-6 pt-16 pb-[calc(1.5rem+env(safe-area-inset-bottom))] text-foreground">
        <div className="loft-grain pointer-events-none absolute inset-0" />
        <span className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-[90px]" />

        <div className="relative flex flex-1 flex-col items-center justify-center text-center">
          <img
            src="/Vector.png"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/resso-logo.png";
            }}
            alt="Resso Coffee"
            className="animate-float h-24 w-24 rounded-full object-contain drop-shadow-md"
          />
          <Eyebrow className="mt-10">вітаємо в resso</Eyebrow>
          <h1 className="animate-rise mt-3 text-[2rem] leading-[1.1] font-semibold">
            {user.firstName}
            <br />
            <span className="text-primary">{user.lastName}</span>
          </h1>

          <div className="panel hairline animate-rise mt-9 flex w-full items-center gap-3 p-3.5">
            <Avatar photoUrl={user.photoUrl} label={initials(user)} />
            <div className="min-w-0 flex-1 text-left">
              <p className="text-sm font-medium">Кабінет створено</p>
              <p className="truncate text-xs text-muted-foreground">
                ID гостя · {user.id}
              </p>
            </div>
            <Chip tone="amber">new</Chip>
          </div>
        </div>

        <button
          onClick={() => {
            update({ onboarded: true });
            toast.success("Кабінет активовано", {
              description: "Виконай завдання і крути колесо фортуни.",
            });
          }}
          className="press amber-glow relative mt-10 flex h-14 w-full items-center justify-center gap-2 rounded-full bg-primary font-display text-base font-semibold text-primary-foreground"
        >
          Продовжити <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    );
  }

  const location = LOCATIONS.find((l) => l.id === state.locationId);

  return (
    <AppShell
      action={
        <Chip tone={spinsLeft > 0 ? "amber" : "muted"}>
          <Sparkles className="h-3 w-3" /> {spinsLeft} спін
        </Chip>
      }
    >
      {/* profile */}
      <section className="panel hairline flex items-center gap-3.5 p-3.5">
        <Avatar photoUrl={user.photoUrl} label={initials(user)} />
        <div className="min-w-0 flex-1">
          <Eyebrow>гість resso</Eyebrow>
          <p className="mt-1 truncate font-display text-lg leading-tight font-semibold">
            {user.firstName} {user.lastName}
          </p>
          <p className="truncate text-xs text-muted-foreground">
            {location ? location.name : "Заклад не обрано"}
          </p>
        </div>
        <Counter value={spinsLeft} label="спіни" />
      </section>

      {/* hero: wheel */}
      <Link
        to="/wheel"
        className="panel-amber hairline press group relative mt-3 block overflow-hidden p-5"
      >
        <span className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-primary/30 blur-[70px]" />
        <div className="relative flex items-start justify-between gap-3">
          <div>
            <Eyebrow className="text-primary-foreground/70">акція</Eyebrow>
            <h2 className="mt-2 text-2xl leading-tight font-semibold">
              Колесо
              <br />
              фортуни
            </h2>
            <p className="mt-2 max-w-[13rem] text-xs text-foreground/70">
              {spinsLeft > 0
                ? `${spinsLeft} спін готовий до обертання`
                : "Виконай завдання, щоб отримати спін"}
            </p>
          </div>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Sparkles className="h-5 w-5" strokeWidth={2} />
          </span>
        </div>

        <div className="relative mt-5 flex items-center gap-2">
          <span className="font-display inline-flex h-10 items-center gap-2 rounded-full bg-background/60 px-4 text-xs font-medium tracking-wide">
            Крутити <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
          </span>
          <span className="text-[11px] text-foreground/50">
            печиво · шопер · −50 ₴
          </span>
        </div>
      </Link>

      {/* bento */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        <Link
          to="/tasks"
          className="panel hairline press col-span-2 flex items-center gap-3.5 p-4"
        >
          <Tile>
            <Sparkles className="h-5 w-5" strokeWidth={1.9} />
          </Tile>
          <div className="min-w-0 flex-1">
            <p className="font-display text-sm font-semibold">Завдання</p>
            <p className="truncate text-xs text-muted-foreground">
              Підписка та відгук — по одному спіну
            </p>
          </div>
          <Chip>{state.tasks.length}/2</Chip>
        </Link>

        <Link
          to="/locations"
          className="panel hairline press flex min-h-[9.5rem] flex-col justify-between p-4"
        >
          <Tile>
            <MapPin className="h-5 w-5" strokeWidth={1.9} />
          </Tile>
          <div>
            <p className="font-display text-sm font-semibold">Наш заклад</p>
            <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
              {location ? location.address : "Обрати свою кавʼярню"}
            </p>
          </div>
        </Link>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="panel hairline press flex min-h-[9.5rem] flex-col justify-between p-4"
        >
          <Tile>
            <Instagram className="h-5 w-5" strokeWidth={1.9} />
          </Tile>
          <div>
            <p className="font-display text-sm font-semibold">Instagram</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              @resso.coffee
            </p>
          </div>
        </a>
      </div>

      {/* marquee */}
      <div className="panel hairline mt-3 overflow-hidden py-3">
        <div className="animate-marquee flex w-max gap-6 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <span
              key={i}
              className="font-display flex gap-6 text-[11px] tracking-[0.28em] text-muted-foreground uppercase"
            >
              <span>speciality coffee</span>
              <span className="text-primary">·</span>
              <span>resso since 2021</span>
              <span className="text-primary">·</span>
              <span>обсмажка щотижня</span>
              <span className="text-primary">·</span>
            </span>
          ))}
        </div>
      </div>

      <Eyebrow className="mt-7">скоро</Eyebrow>
      <div className="mt-3 grid grid-cols-3 gap-2.5">
        {[
          { label: "Меню", icon: Coffee },
          { label: "Новини", icon: Newspaper },
          { label: "Бонуси", icon: Lock },
        ].map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() =>
              toast(`${label} — скоро`, {
                description: "Розділ у розробці. Ми повідомимо про запуск.",
              })
            }
            className="press flex flex-col items-center gap-2 rounded-2xl border border-dashed border-border bg-surface/40 px-2 py-4 text-center"
          >
            <Icon
              className="h-4 w-4 text-muted-foreground"
              strokeWidth={1.9}
            />
            <span className="text-[11px] text-muted-foreground">{label}</span>
          </button>
        ))}
      </div>
    </AppShell>
  );
}

function Tile({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border bg-background/50 text-primary">
      {children}
    </span>
  );
}

function Avatar({
  photoUrl,
  label,
}: {
  photoUrl?: string | undefined;
  label: string;
}) {
  return (
    <span className="relative shrink-0">
      {photoUrl ? (
        <img
          src={photoUrl}
          alt=""
          className="h-14 w-14 rounded-2xl border border-border object-cover"
        />
      ) : (
        <span className="font-display flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface-strong text-lg font-semibold">
          {label}
        </span>
      )}
      <span className="absolute -right-1 -bottom-1 h-3.5 w-3.5 rounded-full border-2 border-background bg-primary" />
    </span>
  );
}
