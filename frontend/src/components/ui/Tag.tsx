/**
 * Tag.tsx
 * Small tag pill.
 */
export default function Tag({ text }: { text: string }) {
    return (
      <span className="rounded-full border border-white/12 bg-white/5 px-2 py-1 text-[11px] text-white/70">
        {text}
      </span>
    );
  }
  