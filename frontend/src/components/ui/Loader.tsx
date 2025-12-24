/**
 * Loader.tsx
 * Minimal loading indicator.
 */
export default function Loader({ label = "Loading..." }: { label?: string }) {
    return (
      <div className="flex items-center gap-3 text-white/70">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white/80" />
        <span className="text-sm">{label}</span>
      </div>
    );
  }
  