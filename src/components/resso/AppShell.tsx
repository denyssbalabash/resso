import { Link } from "@tanstack/react-router";
import { Home, MapPin, Gift, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import logo from "@/assets/resso-logo.png.asset.json";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Головна", icon: Home },
  { to: "/locations", label: "Заклади", icon: MapPin },
  { to: "/wheel", label: "Колесо", icon: Sparkles },
  { to: "/prizes", label: "Призи", icon: Gift },
] as const;

export function AppShell({
  children,
  title,
  action,
}: {
  children: ReactNode;
  title?: string;
  action?: ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <div className="loft-grain pointer-events-none fixed inset-0 z-0" />

      <header className="sticky top-0 z-20 bg-gradient-to-b from-background via-background/90 to-transparent">
        <div className="mx-auto flex h-16 w-full max-w-md items-center gap-3 px-5">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo.url} alt="Resso Coffee" className="h-9 w-9" />
            <span className="font-display text-[13px] font-medium tracking-[0.3em] uppercase">
              {title ?? "resso"}
            </span>
          </Link>
          <div className="ml-auto">{action}</div>
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-md flex-1 px-5 pt-1 pb-32">
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-20 px-5 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <div className="mx-auto flex w-full max-w-md items-center gap-1 rounded-full border border-border bg-popover/80 p-1.5 backdrop-blur-2xl">
          {NAV.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              activeOptions={{ exact: to === "/" }}
              className={cn(
                "press flex flex-1 flex-col items-center gap-1 rounded-full py-2.5 text-[10px] font-medium tracking-wide text-muted-foreground",
              )}
              activeProps={{
                className:
                  "bg-primary text-primary-foreground shadow-[0_10px_24px_-14px_var(--primary)]",
              }}
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.9} />
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
