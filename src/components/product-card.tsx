import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { useBuild } from "@/lib/store";
import type { Product } from "@/lib/types";
import { dh } from "@/lib/utils";
import { lowestOffer } from "@/lib/catalog";

export function ProductRow({ product }: { product: Product }) {
  const { t } = useI18n();
  const add = useBuild((s) => s.add);
  const slots = useBuild((s) => s.slots);
  const inBuild = slots[product.category]?.id === product.id;
  const offer = lowestOffer(product);
  const spec = Object.entries(product.specs)
    .slice(0, 3)
    .map(([, v]) => v)
    .join(" · ");

  return (
    <article className="grid grid-cols-[56px_1fr] items-center gap-3 border-b border-border px-3 py-3 last:border-0 sm:grid-cols-[56px_1fr_auto_auto] sm:gap-5">
      <Link to="/products/$id" params={{ id: product.id }} className="grid size-14 place-items-center rounded-md bg-surface-2">
        <img src={product.image} alt="" className="part-art size-9 object-contain" />
      </Link>
      <div className="min-w-0">
        <Link to="/products/$id" params={{ id: product.id }} className="block truncate font-medium hover:text-primary">
          {product.name}
        </Link>
        <p className="mt-0.5 truncate text-xs text-muted ltr-isolate">
          {product.brand} · {spec}
        </p>
        <p className="mt-1 text-[11px] text-ok sm:hidden">
          {dh(product.best_price)} · {product.store_count} {t("ui.stores")}
        </p>
      </div>
      <div className="hidden text-end sm:block">
        <div className="font-display text-base font-semibold tabular-nums ltr-isolate">{dh(product.best_price)}</div>
        <div className="text-[11px] text-muted">
          {product.store_count} {t("ui.stores")}
          {offer ? ` · ${offer.city}` : ""}
        </div>
        <Badge tone="primary" className="mt-1">
          {t("ui.lowest")}
        </Badge>
      </div>
      <div className="col-span-2 flex gap-2 sm:col-span-1 sm:flex-col">
        <Button
          size="sm"
          variant={inBuild ? "soft" : "default"}
          onClick={() => add(product.id, product.category)}
        >
          {inBuild ? t("ui.inBuild") : t("ui.addBuild")}
        </Button>
      </div>
    </article>
  );
}

export function ProductTile({ product }: { product: Product }) {
  return (
    <Link
      to="/products/$id"
      params={{ id: product.id }}
      className="group flex flex-col rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] transition-[box-shadow] hover:shadow-[var(--shadow-border-hover)]"
    >
      <div className="mb-3 grid h-28 place-items-center rounded-lg bg-surface-2">
        <img src={product.image} alt="" className="part-art h-20 object-contain" />
      </div>
      <h3 className="line-clamp-2 text-sm font-medium group-hover:text-primary">{product.name}</h3>
      <p className="mt-auto pt-2 font-display text-base font-semibold tabular-nums ltr-isolate">{dh(product.best_price)}</p>
    </Link>
  );
}
