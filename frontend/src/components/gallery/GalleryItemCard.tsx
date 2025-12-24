/**
 * GalleryItemCard.tsx
 * A single tile in the gallery grid (grunge hover).
 */
import { Link } from "react-router-dom";
import { Item } from "../../api/types";
import Tag from "../ui/Tag";

export default function GalleryItemCard({ item }: { item: Item }) {
  return (
    <Link
      to={`/gallery/${item.id}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-black/30 transition hover:border-white/20 hover:bg-white/5"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-black/40">
        <TilePreview item={item} />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm font-semibold tracking-wide text-white">{item.title}</h3>
          <span className="text-[11px] font-mono text-white/50">{new Date(item.createdAt).toLocaleDateString()}</span>
        </div>

        <p className="mt-2 line-clamp-2 text-xs text-white/65">{item.description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.slice(0, 3).map((t) => (
            <Tag key={t} text={t} />
          ))}
        </div>
      </div>
    </Link>
  );
}

function TilePreview({ item }: { item: Item }) {
  return (
    <div className="flex h-full w-full items-center justify-center text-xs text-white/50">
      {item.mediaType === "image" ? "IMAGE" : null}
      {item.mediaType === "video" ? "VIDEO" : null}
      {item.mediaType === "audio" ? "AUDIO" : null}
      {item.mediaType === "pdf" ? "PDF" : null}
      {item.mediaType === "text" ? "TEXT" : null}
      <div className="absolute opacity-0">.</div>
    </div>
  );
}
