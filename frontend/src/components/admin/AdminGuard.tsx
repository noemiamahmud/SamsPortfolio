/**
 * AdminGuard.tsx
 * Protects admin routes on the client side by requiring a token.
 * (Server still enforces auth; this is only UX.)
 */
import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../../api/http";

export function AdminGuard({ children }: { children: React.ReactNode }) {
  const token = getToken();
  if (!token) return <Navigate to="/admin/login" replace />;
  return <>{children}</>;
}
