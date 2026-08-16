import { useState } from "react";
import { navLinks, profile } from "../data/portfolioData";

export default function Navbar({ isDark, setIsDark }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-20 flex items-center bg-white/95 dark:bg-[#0a1626]/95 backdrop-blur border-b border-slate-100 dark:border-white/10 shadow-xs">
      <nav className="w-full max-w-6xl mx-auto flex items-center justify-between px-6">
        <a href="#home" className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
          {profile.name}
        </a>

        <ul className="hidden md:flex items-center gap-10 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-1 text-slate-700 dark:text-slate-200 hover:text-accent font-medium transition-colors group"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            aria-label="Toggle dark mode"
            onClick={() => setIsDark(!isDark)}
            className="relative w-12 h-6 rounded-full bg-slate-200 dark:bg-navy-light transition-colors"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                isDark ? "translate-x-6" : ""
              }`}
            />
          </button>

          <button
            className="md:hidden text-2xl leading-none"
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
