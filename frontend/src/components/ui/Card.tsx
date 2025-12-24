/**
 * Card.tsx
 * Simple container card.
 */
import React from "react";

export default function Card({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={`rounded-2xl border border-white/10 bg-black/35 p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.6)_inset] ${className}`}
    />
  );
}
