import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Copy, Sparkles } from "lucide-react";
import { AppShell } from "@/components/resso/AppShell";
import { PRIZES } from "@/lib/resso-data";
import { generateCode, useResso, type WonPrize } from "@/lib/resso-store";

export const Route = createFileRoute("/wheel")({
  head: () => ({
    meta: [
      { title: "Колесо фортуни — Resso Coffee" },
      {
        name: "description",
        content:
          "Крути колесо фортуни Resso та отримай печиво з передбаченням або брендований шопер.",
      },
      { property: "og:title", content: "Колесо фортуни — Resso Coffee" },
      {
        property: "og:description",
        content: "Спін за підписку та відгук — приз з унікальним кодом.",
      },
    ],
  }),
  component: Wheel,
});

const SEGMENT = 360 / PRIZES.length;

function Wheel() {
  const { state, ready, spinsLeft, addPrize } = useResso();
  const [angle, setAngle] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<WonPrize | null>(null);
  const [copied, setCopied] = useState(false);

  const spin = () => {
    if (spinning || spinsLeft <= 0) return;
    // 1 виконане завдання -> печиво, 2 виконані -> шопер
    const targetId = state.tasks.length >= 2 && state.spinsUsed >= 1 ? "tote" : "cookie";
    const index = Math.max(0, PRIZES.findIndex((p) => p.id === targetId));
    const prize = PRIZES[index]!;

    setResult(null);
    setCopied(false);
    setSpinning(true);
    const target =
      angle + 360 * 5 + (360 - (index * SEGMENT + SEGMENT / 2) - (angle % 360));
    setAngle(target);

    window.setTimeout(() => {
      const won: WonPrize = {
        prizeId: prize.id,
        label: prize.label,
        code: generateCode(),
        wonAt: new Date().toISOString(),
      };
      addPrize(won);
      setResult(won);
      setSpinning(false);
    }, 4200);
  };

  if (!ready) return <AppShell title="Колесо"><div /></AppShell>;

  return (
    <AppShell title="Колесо">
      <h1 className="text-2xl font-semibold">Колесо фортуни</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Доступних спінів: <span className="text-primary">{spinsLeft}</span>
      </p>

      <div className="relative mx-auto mt-8 aspect-square w-full max-w-[19rem]">
        <span className="absolute inset-0 rounded-full bg-primary/15 blur-3xl" />
        <div
          className="relative h-full w-full rounded-full border-[6px] border-border/80 shadow-2xl"
          style={{
            transform: `rotate(${angle}deg)`,
            transition: spinning
              ? "transform 4.2s cubic-bezier(0.16, 1, 0.3, 1)"
              : undefined,
            background: `conic-gradient(${PRIZES.map((p, i) => {
              const from = i * SEGMENT;
              const to = (i + 1) * SEGMENT;
              const color =
                i % 2 === 0 ? "var(--primary)" : "var(--secondary)";
              return `${color} ${from}deg ${to}deg`;
            }).join(", ")})`,
          }}
        >
          {PRIZES.map((p, i) => {
            const deg = i * SEGMENT + SEGMENT / 2 - 90;
            const rad = (deg * Math.PI) / 180;
            return (
              <span
                key={p.id}
                className="absolute text-[11px] font-semibold tracking-wide"
                style={{
                  left: `${50 + 33 * Math.cos(rad)}%`,
                  top: `${50 + 33 * Math.sin(rad)}%`,
                  transform: "translate(-50%, -50%)",
                  color: i % 2 === 0 ? "#0f0f0f" : "#ffffff",
                }}
              >
                {p.short}
              </span>
            );
          })}

        </div>
        <span className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border/70 bg-background">
          <Sparkles className="h-6 w-6 text-primary" strokeWidth={1.75} />
        </span>
        <span className="absolute -top-1 left-1/2 h-5 w-3 -translate-x-1/2 rounded-b-full bg-primary" />
      </div>

      {spinsLeft > 0 ? (
        <button
          onClick={spin}
          disabled={spinning}
          className="mt-8 flex h-14 w-full items-center justify-center rounded-2xl bg-primary text-base font-semibold text-primary-foreground disabled:opacity-60 active:scale-[0.99]"
        >
          {spinning ? "Крутимо…" : "Крутити"}
        </button>
      ) : (
        <Link
          to="/tasks"
          className="mt-8 flex h-14 w-full items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 text-base font-semibold text-primary active:scale-[0.99]"
        >
          Отримати спін
        </Link>
      )}

      {result && (
        <div className="mt-6 rounded-3xl border border-primary/50 bg-primary/10 p-5 text-center">
          <p className="text-xs tracking-[0.28em] text-primary/80 uppercase">
            ваш приз
          </p>
          <p className="mt-2 text-xl font-semibold">{result.label}</p>
          <p className="mt-4 text-xs text-muted-foreground">
            Покажіть код баристі
          </p>
          <button
            onClick={() => {
              navigator.clipboard?.writeText(result.code);
              setCopied(true);
            }}
            className="mt-2 inline-flex items-center gap-2 rounded-2xl border border-border/70 bg-background px-4 py-3 font-mono text-lg tracking-[0.2em]"
          >
            {result.code} <Copy className="h-4 w-4 text-muted-foreground" />
          </button>
          {copied && (
            <p className="mt-2 text-xs text-primary">Код скопійовано</p>
          )}
        </div>
      )}
    </AppShell>
  );
}
