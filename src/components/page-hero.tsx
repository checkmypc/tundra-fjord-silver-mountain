export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-border bg-surface-2/60">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-primary uppercase">{eyebrow}</p>
        )}
        <h1 className="max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-base text-muted">{description}</p>}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
