import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("size-8 shrink-0", className)} aria-hidden>
      <rect x="3" y="6" width="26" height="18" rx="3" className="fill-surface-2 stroke-fg/40" strokeWidth="1.4" />
      <rect x="6" y="9" width="20" height="12" rx="1.2" className="fill-navy" />
      <path
        d="M11.2 15.1 14.1 18l6.7-6.6"
        fill="none"
        stroke="currentColor"
        className="text-primary"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="12" y="25" width="8" height="1.6" rx="0.8" className="fill-fg/40" />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 text-fg">
      <Mark />
      {!compact && (
        <span className="font-display text-[1.15rem] font-semibold tracking-tight">
          CHECK<span className="text-primary">MY</span>PC
          <span className="text-muted">.MA</span>
        </span>
      )}
    </span>
  );
}
