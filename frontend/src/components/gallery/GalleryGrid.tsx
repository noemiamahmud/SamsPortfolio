/**
 * GalleryGrid.tsx
 * Displays a responsive grid of art items.
 */
import { Item } from "../../api/types";
import GalleryItemCard from "./GalleryItemCard";

export default function GalleryGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((i) => (
        <GalleryItemCard key={i.id} item={i} />
      ))}
    </div>
  );
}
