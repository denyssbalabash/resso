import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ExternalLink, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { AppShell } from "@/components/resso/AppShell";
import { Chip, Eyebrow } from "@/components/resso/ui";
import { TASKS } from "@/lib/resso-data";
import { useResso } from "@/lib/resso-store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/tasks")({
  head: () => ({
    meta: [
      { title: "Завдання за спіни — Resso Coffee" },
      {
        name: "description",
        content:
          "Підпишись в Instagram або залиш відгук на Google Maps і отримай спін колеса Resso.",
      },
      { property: "og:title", content: "Завдання за спіни — Resso Coffee" },
      {
        property: "og:description",
        content: "Два простих завдання — два спіни колеса фортуни.",
      },
    ],
  }),
  component: Tasks,
});

function Tasks() {
  const { state, spinsLeft, completeTask } = useResso();
  const progress = (state.tasks.length / TASKS.length) * 100;

  return (
    <AppShell title="завдання">
      <Eyebrow>+1 спін за дію</Eyebrow>
      <h1 className="mt-2 text-[1.75rem] leading-tight font-semibold">
        Завдання
        <br />
        <span className="text-primary">за спіни</span>
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        За перше — печиво з передбаченням, за два — брендований шопер.
      </p>

      <div className="panel hairline mt-5 p-4">
        <div className="flex items-center justify-between">
          <Eyebrow>прогрес</Eyebrow>
          <span className="font-display text-xs text-primary">
            {state.tasks.length}/{TASKS.length}
          </span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-background/60">
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {TASKS.map((task, index) => {
          const done = state.tasks.includes(task.id);
          return (
            <div
              key={task.id}
              className={cn(
                "hairline p-4",
                done ? "panel-amber" : "panel",
              )}
            >
              <div className="flex items-start gap-3">
                <span
                  className={cn(
                    "font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold",
                    done
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-background/50",
                  )}
                >
                  {done ? (
                    <Check className="h-4 w-4" strokeWidth={2.6} />
                  ) : (
                    index + 1
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-display text-base font-semibold">
                      {task.title}
                    </p>
                    {done && <Chip tone="amber">done</Chip>}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {task.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <a
                  href={task.url}
                  target="_blank"
                  rel="noreferrer"
                  className="press flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-border bg-background/50 text-sm font-medium"
                >
                  {task.cta} <ExternalLink className="h-4 w-4" />
                </a>
                <button
                  disabled={done}
                  onClick={() => {
                    completeTask(task.id);
                    toast.success("Завдання зараховано", {
                      description: "+1 спін колеса фортуни.",
                    });
                  }}
                  className="press font-display flex h-11 flex-1 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground disabled:bg-surface-strong disabled:text-muted-foreground"
                >
                  {done ? "Виконано" : "Я виконав"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <Link
        to="/wheel"
        className="press font-display mt-5 flex h-14 items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary-soft text-sm font-semibold text-primary"
      >
        <Sparkles className="h-5 w-5" /> До колеса ({spinsLeft})
      </Link>
    </AppShell>
  );
}
