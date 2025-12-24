/**
 * Button.tsx
 * Reusable button with grunge/pro variants.
 */
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "grunge" | "pro" | "ghost";
};

export default function Button({ variant = "grunge", className = "", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<string, string> = {
    grunge:
      "grunge-border bg-white/5 hover:bg-white/10 text-white uppercase tracking-widest",
    pro: "border border-white/15 bg-white/5 hover:bg-white/10 text-white tracking-wide",
    ghost: "text-white/80 hover:text-white hover:bg-white/5"
  };

  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
