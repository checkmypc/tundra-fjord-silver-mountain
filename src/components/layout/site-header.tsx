import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Moon, Search, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { LANGS, useI18n } from "@/lib/i18n";
import { partCount, useBuild } from "@/lib/store";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/products", key: "nav.components" },
  { to: "/compare", key: "nav.compare" },
  { to: "/builder", key: "nav.builder" },
  { to: "/prebuilts", key: "nav.prebuilts" },
  { to: "/used", key: "nav.used" },
  { to: "/inspection", key: "nav.inspection" },
  { to: "/guides", key: "nav.guides" },
] as const;

export function SiteHeader() {
  const { t, lang, setLang, theme, setTheme } = useI18n();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const slots = useBuild((s) => s.slots);
  const n = partCount(slots);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
        <Link to="/" className="shrink-0" aria-label="CHECKMYPC home">
          <Logo />
        </Link>
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "rounded-md px-2.5 py-2 text-[13px] font-medium text-muted hover:bg-surface-2 hover:text-fg",
                pathname === l.to && "bg-surface-2 text-primary",
              )}
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>
        <div className="ms-auto flex items-center gap-1.5">
          <Link
            to="/search"
            className="grid size-11 place-items-center rounded-md text-muted hover:bg-surface-2 hover:text-fg"
            aria-label={t("nav.search")}
          >
            <Search className="size-4" />
          </Link>
          <Link
            to="/builder"
            className="relative hidden size-11 place-items-center rounded-md text-muted hover:bg-surface-2 hover:text-fg sm:grid"
            aria-label={t("nav.mybuild")}
          >
            <span className="font-display text-xs font-semibold">PC</span>
            {n > 0 && (
              <span className="absolute top-1.5 end-1.5 grid size-4 place-items-center rounded-full bg-primary text-[10px] text-primary-fg">
                {n}
              </span>
            )}
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-md text-muted hover:bg-surface-2 hover:text-fg"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={theme === "dark" ? t("theme.light") : t("theme.dark")}
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <select
            className="hidden h-11 rounded-md bg-surface px-2 text-xs font-medium text-fg shadow-[var(--shadow-border)] sm:block"
            value={lang}
            onChange={(e) => setLang(e.target.value as typeof lang)}
            aria-label="Language"
          >
            {LANGS.map((l) => (
              <option key={l.id} value={l.id}>
                {l.label}
              </option>
            ))}
          </select>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link to="/inspection">{t("nav.book")}</Link>
          </Button>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-md text-fg hover:bg-surface-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={t("nav.menu")}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-surface px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "rounded-md px-3 py-3 text-sm font-medium text-fg hover:bg-surface-2",
                  pathname === l.to && "bg-surface-2 text-primary",
                )}
              >
                {t(l.key)}
              </Link>
            ))}
            <Link to="/assembly" className="rounded-md px-3 py-3 text-sm font-medium hover:bg-surface-2">
              {t("nav.assembly")}
            </Link>
            <Link to="/cleaning" className="rounded-md px-3 py-3 text-sm font-medium hover:bg-surface-2">
              {t("nav.cleaning")}
            </Link>
            <Link to="/deals" className="rounded-md px-3 py-3 text-sm font-medium hover:bg-surface-2">
              {t("nav.deals")}
            </Link>
            <Link to="/contact" className="rounded-md px-3 py-3 text-sm font-medium hover:bg-surface-2">
              {t("nav.contact")}
            </Link>
            <div className="mt-2 flex gap-2">
              <select
                className="h-11 flex-1 rounded-md bg-bg px-2 text-sm shadow-[var(--shadow-border)]"
                value={lang}
                onChange={(e) => setLang(e.target.value as typeof lang)}
              >
                {LANGS.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.label}
                  </option>
                ))}
              </select>
              <Button asChild className="flex-1">
                <Link to="/inspection">{t("nav.book")}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
