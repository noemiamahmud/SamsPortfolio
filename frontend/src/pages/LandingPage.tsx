/**
 * LandingPage.tsx
 * Landing page where visitors choose Professional or Gallery.
 */
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function LandingPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-white/10 bg-black/30 p-6 md:p-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            A personal archive of <span className="text-glitch">work</span> — writing, design, sound, video.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
            Choose a path. The gallery is raw + visual. The professional side is clean, searchable, and built for reading.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/gallery">
              <Button>Enter Gallery</Button>
            </Link>
            <Link to="/pro">
              <Button variant="pro">View Professional</Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <div className="text-xs uppercase tracking-widest text-white/60">Gallery</div>
          <div className="mt-2 text-sm text-white/80">
            Visual archive: image/video/audio/text artifacts — each with a long description page.
          </div>
        </Card>
        <Card>
          <div className="text-xs uppercase tracking-widest text-white/60">Professional</div>
          <div className="mt-2 text-sm text-white/80">
            Searchable writing library — markdown, PDF, and text with a cleaner layout.
          </div>
        </Card>
        <Card>
          <div className="text-xs uppercase tracking-widest text-white/60">Media</div>
          <div className="mt-2 text-sm text-white/80">
            Social links + embedded “podcast” section (YouTube player ready).
          </div>
        </Card>
      </div>
    </div>
  );
}
