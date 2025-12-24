/**
 * AdminDashboardPage.tsx
 * Admin dashboard: upload form + quick lists with delete.
 */
import React from "react";
import UploadForm from "../components/admin/UploadForm";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Loader from "../components/ui/Loader";
import { http, clearToken, getToken } from "../api/http";
import { Item } from "../api/types";

export default function AdminDashboardPage() {
  const [items, setItems] = React.useState<Item[]>([]);
  const [busy, setBusy] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  async function load() {
    try {
      setBusy(true);
      setError(null);
      const data = await http.get<Item[]>("/api/items");
      setItems(data);
    } catch (e: any) {
      setError(e?.message || "Failed to load items.");
    } finally {
      setBusy(false);
    }
  }

  React.useEffect(() => {
    load();
  }, []);

  async function remove(id: number) {
    const token = getToken();
    if (!token) return;

    try {
      await http.delete<{ ok: boolean }>(`/api/admin/items/${id}`, token);
      await load();
    } catch (e: any) {
      setError(e?.message || "Delete failed.");
    }
  }

  function logout() {
    clearToken();
    window.location.href = "/";
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-widest text-white/60">Admin</div>
          <h1 className="mt-1 text-2xl font-semibold text-white">Dashboard</h1>
        </div>
        <Button variant="ghost" onClick={logout}>
          Logout
        </Button>
      </div>

      <UploadForm onUploaded={load} />

      <Card className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white">All items</h2>
          <button
            onClick={load}
            className="rounded-xl border border-white/12 bg-white/5 px-3 py-2 text-xs uppercase tracking-widest text-white hover:bg-white/10"
          >
            Refresh
          </button>
        </div>

        {busy ? <Loader label="Loading items..." /> : null}
        {error ? <div className="text-sm text-red-300">{error}</div> : null}

        {!busy && !error && (
          <div className="grid gap-2">
            {items.map((i) => (
              <div
                key={i.id}
                className="flex flex-col gap-2 rounded-xl border border-white/10 bg-black/25 p-3 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <div className="text-xs text-white/60">
                    {i.kind.toUpperCase()} • {i.mediaType.toUpperCase()} • {new Date(i.createdAt).toLocaleString()}
                  </div>
                  <div className="text-sm font-semibold text-white">{i.title}</div>
                </div>

                <Button variant="ghost" onClick={() => remove(i.id)}>
                  Delete
                </Button>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
