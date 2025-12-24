/**
 * WritingCard.tsx
 * Compact card for writing library list.
 */
import { Link } from "react-router-dom";
import { Item } from "../../api/types";
import Tag from "../ui/Tag";

export default function WritingCard({ item }: { item: Item }) {
  return (
    <Link
      to={`/pro/writing/${item.id}`}
      className="block rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/20 hover:bg-white/[0.06]"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold tracking-wide text-white">{item.title}</h3>
        <span className="text-xs font-mono text-white/50">{new Date(item.createdAt).toLocaleDateString()}</span>
      </div>

      <p className="mt-2 line-clamp-2 text-sm text-white/70">{item.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {item.tags.slice(0, 4).map((t) => (
          <Tag key={t} text={t} />
        ))}
      </div>
    </Link>
  );
}
