import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DEFAULT_PIN } from "@/lib/ops-seed";
import { useOps } from "@/lib/ops";

export const Route = createFileRoute("/admin/settings")({ component: AdminSettings });

function AdminSettings() {
  const settings = useOps((s) => s.settings);
  const patch = useOps((s) => s.patchSettings);
  const setPin = useOps((s) => s.setPin);
  const reset = useOps((s) => s.resetDemo);
  const exportJson = useOps((s) => s.exportJson);
  const importJson = useOps((s) => s.importJson);
  const [pin, setPinVal] = useState("");
  const [pin2, setPin2] = useState("");
  const [dump, setDump] = useState("");

  function download() {
    const blob = new Blob([exportJson()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "checkmypc-ops.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="mx-auto max-w-3xl space-y-4 px-4 py-6 lg:px-6">
      <div>
        <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">Console</p>
        <h1 className="font-display text-3xl font-semibold">Settings</h1>
        <p className="mt-1 text-sm text-muted">
          PIN and data live in this browser only — swap for a real backend before launch.
        </p>
      </div>

      <Card className="rounded-2xl p-5">
        <h2 className="font-display font-semibold">Contact</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Label htmlFor="em">Email</Label>
            <Input
              id="em"
              value={settings.email}
              onChange={(e) => patch({ email: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="ph">Phone</Label>
            <Input id="ph" value={settings.phone} onChange={(e) => patch({ phone: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="wa">WhatsApp (digits)</Label>
            <Input id="wa" value={settings.whatsapp} onChange={(e) => patch({ whatsapp: e.target.value })} />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="hr">Hours</Label>
            <Input id="hr" value={settings.hours} onChange={(e) => patch({ hours: e.target.value })} />
          </div>
        </div>
      </Card>

      <Card className="rounded-2xl p-5">
        <h2 className="font-display font-semibold">Admin PIN</h2>
        <p className="mt-1 text-sm text-muted">
          Current demo default is {DEFAULT_PIN} until you change it. Session unlock lasts until you lock or close the tab.
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div>
            <Label htmlFor="pin1">New PIN</Label>
            <Input id="pin1" type="password" value={pin} onChange={(e) => setPinVal(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="pin2">Confirm</Label>
            <Input id="pin2" type="password" value={pin2} onChange={(e) => setPin2(e.target.value)} />
          </div>
        </div>
        <Button
          className="mt-3"
          type="button"
          onClick={() => {
            if (pin.length < 4 || pin !== pin2) {
              toast.error("PIN must match and be at least 4 characters");
              return;
            }
            setPin(pin);
            setPinVal("");
            setPin2("");
            toast.success("PIN updated");
          }}
        >
          Update PIN
        </Button>
      </Card>

      <Card className="rounded-2xl p-5">
        <h2 className="font-display font-semibold">Backup</h2>
        <p className="mt-1 text-sm text-muted">Export the full ops snapshot (bookings, prices, listings, reports).</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Button type="button" onClick={download}>
            Download JSON
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={async () => {
              await navigator.clipboard.writeText(exportJson());
              toast.success("Copied");
            }}
          >
            Copy JSON
          </Button>
        </div>
        <Label className="mt-4" htmlFor="imp">
          Import JSON
        </Label>
        <textarea
          id="imp"
          value={dump}
          onChange={(e) => setDump(e.target.value)}
          className="mt-1 min-h-28 w-full rounded-md bg-bg p-3 font-mono text-xs shadow-[var(--shadow-border)]"
        />
        <Button
          className="mt-3"
          type="button"
          variant="secondary"
          onClick={() => {
            const ok = importJson(dump);
            toast[ok ? "success" : "error"](ok ? "Imported" : "Invalid JSON");
          }}
        >
          Import
        </Button>
      </Card>

      <Card className="rounded-2xl p-5">
        <h2 className="font-display font-semibold">Reset demo data</h2>
        <p className="mt-1 text-sm text-muted">
          Reloads sample bookings, listings, reports and catalogue prices. Does not change the public site files — only this browser copy.
        </p>
        <Button
          className="mt-3"
          type="button"
          variant="danger"
          onClick={() => {
            if (window.confirm("Reset the ops console to demo data?")) {
              reset();
              toast.success("Demo data restored");
            }
          }}
        >
          Reset to demo
        </Button>
      </Card>
    </div>
  );
}
