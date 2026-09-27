import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import {
  BookOpenCheck,
  Boxes,
  ClipboardList,
  LayoutDashboard,
  LogOut,
  Menu,
  MonitorSmartphone,
  Settings,
  ShieldCheck,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { Logo, Mark } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DEFAULT_PIN } from "@/lib/ops-seed";
import { useOps } from "@/lib/ops";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/admin", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/admin/bookings", label: "Bookings", icon: ClipboardList },
  { to: "/admin/catalog", label: "Catalogue", icon: Boxes },
  { to: "/admin/used", label: "Used & reports", icon: ShieldCheck },
  { to: "/admin/prebuilts", label: "Prebuilts", icon: MonitorSmartphone },
  { to: "/admin/services", label: "Services", icon: Wrench },
  { to: "/admin/settings", label: "Settings", icon: Settings },
] as const;

export function AdminShell() {
  const hydrate = useOps((s) => s.hydrate);
  const hydrated = useOps((s) => s.hydrated);
  const unlocked = useOps((s) => s.unlocked);
  useEffect(() => {
    hydrate();
  }, [hydrate]);
  if (!hydrated) {
    return (
      <div className="grid min-h-svh place-items-center bg-navy text-on-navy">
        <p className="text-sm text-on-navy-muted">Loading console…</p>
      </div>
    );
  }
  if (!unlocked) return <AdminLogin />;
  return <AdminFrame />;
}

function AdminLogin() {
  const unlock = useOps((s) => s.unlock);
  const pin = useOps((s) => s.settings.pin);
  const [value, setValue] = useState("");
  const [err, setErr] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const ok = unlock(value);
    setErr(!ok);
  }

  return (
    <div className="relative min-h-svh overflow-hidden bg-navy text-on-navy">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--primary)_22%,transparent),transparent_58%)]" />
      <div className="relative mx-auto flex min-h-svh max-w-md flex-col justify-center px-4 py-12">
        <div className="mb-8 flex items-center gap-3">
          <Mark className="size-10 text-primary" />
          <div>
            <p className="font-display text-lg font-semibold tracking-tight">CHECKMYPC</p>
            <p className="text-xs text-on-navy-muted">Operations console</p>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="rounded-2xl bg-surface p-6 text-fg shadow-[var(--shadow-border)]"
        >
          <h1 className="font-display text-2xl font-semibold">Full access</h1>
          <p className="mt-1 text-sm text-muted">
            Manage bookings, prices, listings, reports and technicians from one desk.
          </p>
          <div className="mt-5">
            <Label htmlFor="pin">Admin PIN</Label>
            <Input
              id="pin"
              name="pin"
              type="password"
              inputMode="numeric"
              autoComplete="current-password"
              value={value}
              className="bg-bg"
              onChange={(e) => {
                setValue(e.target.value);
                setErr(false);
              }}
              aria-invalid={err}
            />
            {err && <p className="mt-2 text-xs text-danger">Wrong PIN.</p>}
          </div>
          <Button type="submit" className="mt-5 w-full">
            Unlock dashboard
          </Button>
          {pin === DEFAULT_PIN && (
            <>
              <Button
                type="button"
                variant="secondary"
                className="mt-2 w-full"
                onClick={() => unlock(DEFAULT_PIN)}
              >
                Use demo PIN {DEFAULT_PIN}
              </Button>
              <p className="mt-3 text-center text-xs text-muted">Change the PIN in Settings after login</p>
            </>
          )}
        </form>
        <Link to="/" className="mt-6 text-center text-sm text-on-navy-muted hover:text-on-navy">
          Back to CHECKMYPC.MA
        </Link>
      </div>
    </div>
  );
}

function AdminFrame() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lock = useOps((s) => s.lock);
  const openCount = useOps(
    (s) => s.bookings.filter((b) => b.status !== "done" && b.status !== "cancelled").length,
  );
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  const nav = (
    <nav className="flex flex-col gap-1 p-3">
      {NAV.map((item) => {
        const Icon = item.icon;
        const active = "exact" in item && item.exact ? pathname === item.to : pathname.startsWith(item.to);
        return (
          <Link
            key={item.to}
            to={item.to}
            className={cn(
              "flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium text-on-navy-muted hover:bg-white/5 hover:text-on-navy",
              active && "bg-white/10 text-on-navy",
            )}
          >
            <Icon className="size-4 shrink-0" />
            <span className="flex-1">{item.label}</span>
            {item.to === "/admin/bookings" && openCount > 0 && (
              <span className="grid min-w-5 place-items-center rounded-full bg-primary px-1.5 text-[10px] font-semibold text-primary-fg">
                {openCount}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-svh bg-bg text-fg lg:grid lg:grid-cols-[240px_1fr]">
      <aside className="hidden flex-col bg-navy text-on-navy lg:flex">
        <div className="flex h-16 items-center gap-2 border-b border-white/10 px-4">
          <Logo compact />
          <span className="font-display text-sm font-semibold tracking-tight">
            CHECK<span className="text-primary">MY</span>PC
          </span>
        </div>
        <p className="px-5 pt-4 text-[10px] font-semibold tracking-[0.16em] text-on-navy-muted uppercase">
          Ops desk
        </p>
        <div className="flex-1">{nav}</div>
        <div className="border-t border-white/10 p-3">
          <Link to="/" className="flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm text-on-navy-muted hover:bg-white/5 hover:text-on-navy">
            <BookOpenCheck className="size-4" />
            View site
          </Link>
          <button
            type="button"
            onClick={lock}
            className="flex min-h-11 w-full items-center gap-3 rounded-lg px-3 text-sm text-on-navy-muted hover:bg-white/5 hover:text-on-navy"
          >
            <LogOut className="size-4" />
            Lock
          </button>
        </div>
      </aside>
      <div className="flex min-w-0 flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-bg/90 px-4 backdrop-blur-md lg:px-6">
          <button
            type="button"
            className="grid size-11 place-items-center rounded-md hover:bg-surface-2 lg:hidden"
            onClick={() => setMenu((v) => !v)}
            aria-label="Open menu"
          >
            {menu ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-sm font-semibold">Operations</p>
            <p className="truncate text-xs text-muted">CHECK → COMPARE → BUILD → CLEAN → INSPECT → BUY</p>
          </div>
          <Button asChild variant="secondary" size="sm" className="hidden sm:inline-flex">
            <Link to="/">Open site</Link>
          </Button>
        </header>
        {menu && (
          <div className="border-b border-border bg-navy text-on-navy lg:hidden">{nav}</div>
        )}
        <div className="min-w-0 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
