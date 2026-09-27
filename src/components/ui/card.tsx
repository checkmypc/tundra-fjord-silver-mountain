import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150",
        className,
      )}
      {...props}
    />
  );
}
