import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="mx-auto max-w-7xl rounded-2xl border border-slate-200/70 bg-white/90 shadow-[0_8px_30px_rgb(15,23,42,0.08)] backdrop-blur-xl transition-all duration-500 dark:border-slate-800/80 dark:bg-slate-950/90">
        {/* MAIN NAVBAR */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-5">
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-2.5 sm:gap-3"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 shadow-lg transition-all duration-500 group-hover:-rotate-6 group-hover:scale-105 sm:h-10 sm:w-10 dark:bg-white">
              <div className="absolute inset-1 rounded-lg border border-white/10 dark:border-slate-950/10" />

              <span className="relative text-sm font-black tracking-tight text-white sm:text-base dark:text-slate-950">
                TF
              </span>
            </div>

            <div>
              <h2 className="text-lg font-extrabold tracking-[-0.04em] text-slate-950 transition-colors duration-300 group-hover:text-blue-600 sm:text-xl dark:text-white dark:group-hover:text-blue-400">
                TeamFlow
              </h2>

              <div className="mt-0.5 hidden h-[2px] w-0 rounded-full bg-blue-600 transition-all duration-500 group-hover:w-full sm:block" />
            </div>
          </Link>

          {/* DESKTOP CENTER NAV */}
          <div className="hidden items-center gap-1 rounded-xl border border-slate-200/80 bg-slate-50/80 p-1.5 md:flex dark:border-slate-800 dark:bg-slate-900/70">
            <a
              href="#features"
              className="group relative overflow-hidden rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 transition-all duration-300 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
            >
              <span className="relative z-10">Features</span>
              <span className="absolute inset-0 translate-y-full rounded-lg bg-white shadow-sm transition-transform duration-300 group-hover:translate-y-0 dark:bg-slate-800" />
            </a>

            <a
              href="#about"
              className="group relative overflow-hidden rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 transition-all duration-300 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
            >
              <span className="relative z-10">About</span>
              <span className="absolute inset-0 translate-y-full rounded-lg bg-white shadow-sm transition-transform duration-300 group-hover:translate-y-0 dark:bg-slate-800" />
            </a>

            <a
              href="#contact"
              className="group relative overflow-hidden rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 transition-all duration-300 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-0 translate-y-full rounded-lg bg-white shadow-sm transition-transform duration-300 group-hover:translate-y-0 dark:bg-slate-800" />
            </a>
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden items-center gap-2 md:flex">
            <Link
              to="/login"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 transition-all duration-300 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-900/25 dark:bg-white dark:text-slate-950"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative">Get Started</span>

              <svg
                className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-all duration-300 hover:bg-slate-100 md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-slate-200/80 px-4 pb-4 pt-3 dark:border-slate-800">
            {/* MOBILE LINKS */}
            <div className="space-y-1">
              <a
                href="#features"
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
              >
                Features
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
              >
                Contact
              </a>
            </div>

            {/* MOBILE ACTIONS */}
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3 dark:border-slate-800">
              <Link
                to="/login"
                onClick={closeMenu}
                className="flex items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={closeMenu}
                className="flex items-center justify-center rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
