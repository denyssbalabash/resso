import { createFileRoute, Link } from "@tanstack/react-router";
import { Copy, Gift } from "lucide-react";
import { toast } from "sonner";
import { AppShell } from "@/components/resso/AppShell";
import { Chip, Eyebrow } from "@/components/resso/ui";
import { useResso } from "@/lib/resso-store";

export const Route = createFileRoute("/prizes")({
  head: () => ({
    meta: [
      { title: "Мої призи — Resso Coffee" },
      {
        name: "description",
        content:
          "Список виграних призів Resso з унікальними кодами для баристи.",
      },
      { property: "og:title", content: "Мої призи — Resso Coffee" },
      {
        property: "og:description",
        content: "Коди призів, які барист перевіряє на касі.",
      },
    ],
  }),
  component: Prizes,
});

function Prizes() {
  const { state, ready } = useResso();

  return (
    <AppShell title="призи">
      <Eyebrow>{state.prizes.length} виграшів</Eyebrow>
      <h1 className="mt-2 text-[1.75rem] leading-tight font-semibold">
        Мої <span className="text-primary">призи</span>
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Код діє один раз — барист валідує його на касі.
      </p>

      {ready && state.prizes.length === 0 && (
        <div className="panel hairline mt-6 border-dashed p-8 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/50">
            <Gift className="h-5 w-5 text-primary" strokeWidth={1.9} />
          </span>
          <p className="mt-4 text-sm text-muted-foreground">Призів ще немає</p>
          <Link
            to="/tasks"
            className="press font-display mt-5 inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
          >
            Отримати спін
          </Link>
        </div>
      )}

      <div className="mt-5 space-y-3">
        {state.prizes.map((prize) => (
          <button
            key={prize.code}
            onClick={() => {
              navigator.clipboard?.writeText(prize.code);
              toast.success("Код скопійовано", { description: prize.label });
            }}
            className="panel hairline press flex w-full items-center gap-3.5 p-4 text-left"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary-soft text-primary">
              <Gift className="h-5 w-5" strokeWidth={1.9} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-display text-sm font-semibold">
                {prize.label}
              </p>
              <p className="text-xs text-muted-foreground">
                {new Date(prize.wonAt).toLocaleDateString("uk-UA")}
              </p>
            </div>
            <span className="flex flex-col items-end gap-1">
              <Chip tone="amber">{prize.code}</Chip>
              <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <Copy className="h-3 w-3" /> копіювати
              </span>
            </span>
          </button>
        ))}
      </div>
    </AppShell>
  );
}
