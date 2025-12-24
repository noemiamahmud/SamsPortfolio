/**
 * ProHomePage.tsx
 * Professional side landing.
 */
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function ProHomePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-10">
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Professional Work</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
          Writing library designed for quick scanning, search, and reading. Still personal — just cleaner.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link to="/pro/writing">
            <Button variant="pro">Open Writing Library</Button>
          </Link>
          <Link to="/gallery">
            <Button variant="ghost">Jump to Gallery</Button>
          </Link>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-white/[0.03]">
          <div className="text-xs uppercase tracking-widest text-white/60">Searchable</div>
          <div className="mt-2 text-sm text-white/75">
            Search by title/description; tags show themes and domains.
          </div>
        </Card>
        <Card className="bg-white/[0.03]">
          <div className="text-xs uppercase tracking-widest text-white/60">Formats</div>
          <div className="mt-2 text-sm text-white/75">
            Markdown, PDF, and text — all viewable directly in-browser.
          </div>
        </Card>
      </div>
    </div>
  );
}
