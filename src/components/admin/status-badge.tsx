import { Badge } from "@/components/ui/badge";
import { STATUS_LABEL, KIND_LABEL } from "@/lib/ops";
import type { BookingStatus, ServiceKind } from "@/lib/types";
import type { Verdict } from "@/lib/used";

export function StatusBadge({ status }: { status: BookingStatus }) {
  const tone =
    status === "done"
      ? "ok"
      : status === "cancelled"
        ? "danger"
        : status === "new"
          ? "primary"
          : "warn";
  return <Badge tone={tone}>{STATUS_LABEL[status]}</Badge>;
}

export function KindBadge({ kind }: { kind: ServiceKind }) {
  return <Badge>{KIND_LABEL[kind]}</Badge>;
}

export function VerdictBadge({ verdict }: { verdict?: Verdict }) {
  if (!verdict) return <Badge>Pending</Badge>;
  const tone = verdict === "BUY" ? "ok" : verdict === "DONT" ? "danger" : "warn";
  return <Badge tone={tone}>{verdict}</Badge>;
}
