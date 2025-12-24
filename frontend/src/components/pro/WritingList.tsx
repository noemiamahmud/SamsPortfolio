/**
 * WritingList.tsx
 * Displays a list of writing items.
 */
import { Item } from "../../api/types";
import WritingCard from "./WritingCard";

export default function WritingList({ items }: { items: Item[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((i) => (
        <WritingCard key={i.id} item={i} />
      ))}
    </div>
  );
}
