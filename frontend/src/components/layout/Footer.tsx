/**
 * Footer.tsx
 * Simple footer with a subtle alt vibe + discreet owner login link.
 */
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} — Portfolio Library</div>

        <div className="flex items-center gap-4">
          <div className="font-mono">built // archive // transmit</div>

          {/* Discreet owner-only entry point */}
          <Link
            to="/admin/login"
            className="text-[11px] uppercase tracking-widest text-white/40 hover:text-white/70"
          >
            Owner Login
          </Link>
        </div>
      </div>
    </footer>
  );
}
