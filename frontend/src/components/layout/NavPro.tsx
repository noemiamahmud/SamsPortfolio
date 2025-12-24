/**
 * NavPro.tsx
 * Cleaner, more professional nav for the writing side (still stylized).
 */
import { Link, NavLink } from "react-router-dom";

export default function NavPro() {
  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-sm tracking-wide ${
      isActive ? "text-white" : "text-white/75 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07070a]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-base font-semibold tracking-wider">
          Portfolio — Professional
        </Link>

        <nav className="flex items-center gap-1">
          <NavLink to="/pro" className={linkCls}>
            Overview
          </NavLink>
          <NavLink to="/pro/writing" className={linkCls}>
            Writing Library
          </NavLink>
          <NavLink to="/media" className={linkCls}>
            Media
          </NavLink>
          <NavLink to="/contact" className={linkCls}>
            Contact
          </NavLink>
          <NavLink to="/gallery" className={linkCls}>
            Gallery
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
