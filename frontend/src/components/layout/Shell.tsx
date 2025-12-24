/**
 * Shell.tsx
 * Global layout wrapper with route outlet + footer.
 */
import { Outlet, useLocation } from "react-router-dom";
import NavPublic from "./NavPublic";
import NavPro from "./NavPro";
import Footer from "./Footer";

export function Shell() {
  const location = useLocation();
  const isPro = location.pathname.startsWith("/pro");
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <div className={isPro ? "min-h-screen bg-[#07070a]" : "min-h-screen grunge-bg"}>
      {!isAdmin && (isPro ? <NavPro /> : <NavPublic />)}
      <main className="mx-auto w-full max-w-6xl px-4 py-8">
        <Outlet />
      </main>
      {!isAdmin && <Footer />}
    </div>
  );
}
