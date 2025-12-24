/**
 * ContactPage.tsx
 * Public contact form to reach the artist (stored server-side).
 */
import React from "react";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Button from "../components/ui/Button";
import { http } from "../api/http";
import { ContactPayload } from "../api/types";

export default function ContactPage() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const [status, setStatus] = React.useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    if (!name.trim() || !message.trim()) {
      setStatus("Name and message are required.");
      return;
    }

    const payload: ContactPayload = { name, email, phone, message };

    try {
      setBusy(true);
      await http.post<{ ok: boolean }>("/api/contact", payload);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setStatus("Sent. Thank you.");
    } catch (e: any) {
      setStatus(e?.message || "Failed to send.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-white">Contact</h1>
        <p className="mt-1 text-sm text-white/65">Leave an email or number + a message.</p>
      </div>

      <Card className="max-w-2xl space-y-4">
        <form onSubmit={submit} className="grid gap-3">
          <label className="text-xs text-white/70">
            Name *
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
          </label>

          <div className="grid gap-3 md:grid-cols-2">
            <label className="text-xs text-white/70">
              Email
              <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" />
            </label>
            <label className="text-xs text-white/70">
              Phone
              <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(optional)" />
            </label>
          </div>

          <label className="text-xs text-white/70">
            Message *
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message..."
              rows={6}
            />
          </label>

          {status && <div className="text-sm text-white/80">{status}</div>}

          <Button type="submit" disabled={busy}>
            {busy ? "Sending..." : "Send"}
          </Button>
        </form>
      </Card>
    </div>
  );
}
