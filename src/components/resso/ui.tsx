import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={cn("text-eyebrow", className)}>{children}</p>;
}

export function Panel({
  children,
  className,
  accent,
}: {
  children: ReactNode;
  className?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        accent ? "panel-amber" : "panel",
        "hairline p-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Chip({
  children,
  tone = "muted",
  className,
}: {
  children: ReactNode;
  tone?: "muted" | "amber";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-display inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium tracking-[0.14em] uppercase",
        tone === "amber"
          ? "bg-primary text-primary-foreground"
          : "bg-surface-strong text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Big display number used for spins / counters */
export function Counter({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-background/50 px-3 py-2">
      <span className="font-display text-2xl leading-none font-semibold text-primary">
        {value}
      </span>
      <span className="mt-1 text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
        {label}
      </span>
    </div>
  );
}
