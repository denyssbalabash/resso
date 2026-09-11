import { createFileRoute } from "@tanstack/react-router";
import { Check, Clock, ExternalLink, MapPin } from "lucide-react";
import { toast } from "sonner";
import { AppShell } from "@/components/resso/AppShell";
import { Chip, Eyebrow } from "@/components/resso/ui";
import { LOCATIONS } from "@/lib/resso-data";
import { useResso } from "@/lib/resso-store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Заклади Resso Coffee" },
      {
        name: "description",
        content: "Обери свою кавʼярню Resso та відкрий її на Google Maps.",
      },
      { property: "og:title", content: "Заклади Resso Coffee" },
      {
        property: "og:description",
        content: "Дві кавʼярні Resso на карті — обери свою.",
      },
    ],
  }),
  component: Locations,
});

function Locations() {
  const { state, update } = useResso();

  return (
    <AppShell title="заклади">
      <Eyebrow>2 локації</Eyebrow>
      <h1 className="mt-2 text-[1.75rem] leading-tight font-semibold">
        Обери свій
        <br />
        <span className="text-primary">заклад</span>
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Ми запамʼятаємо вибір для новин і меню.
      </p>

      <div className="mt-5 space-y-3">
        {LOCATIONS.map((loc) => {
          const active = state.locationId === loc.id;
          return (
            <div
              key={loc.id}
              className={cn("hairline p-4", active ? "panel-amber" : "panel")}
            >
              <button
                onClick={() => {
                  update({ locationId: loc.id });
                  toast.success(`${loc.name} — ваш заклад`, {
                    description: loc.address,
                  });
                }}
                className="flex w-full items-start gap-3 text-left"
              >
                <span
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                    active
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-background/50 text-primary",
                  )}
                >
                  {active ? (
                    <Check className="h-5 w-5" strokeWidth={2.5} />
                  ) : (
                    <MapPin className="h-5 w-5" strokeWidth={1.9} />
                  )}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2">
                    <span className="font-display text-base font-semibold">
                      {loc.name}
                    </span>
                    {active && <Chip tone="amber">мій</Chip>}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">
                    {loc.address}
                  </span>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-[11px] tracking-widest text-muted-foreground uppercase">
                    <Clock className="h-3 w-3" /> {loc.hours}
                  </span>
                </span>
              </button>

              <a
                href={loc.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="press mt-4 flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-background/50 text-sm font-medium"
              >
                Відкрити на карті <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          );
        })}
      </div>
    </AppShell>
  );
}
