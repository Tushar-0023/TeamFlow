import { useEffect, useState } from "react";
import {
  Sun,
  Moon,
  Settings as SettingsIcon,
  Palette,
  CheckCircle2,
} from "lucide-react";

export default function Settings() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "dark") {
      root.classList.add("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-[#070b14] via-[#0b1220] to-[#070b14] text-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-violet-600 blur-[140px] rounded-full -top-24 -left-24" />

        <div className="absolute w-[450px] h-[450px] bg-cyan-600 blur-[140px] rounded-full bottom-0 right-0" />
      </div>

      <div className="relative z-10"></div>
      {/* HERO */}

      <div className="relative overflow-hidden rounded-3xl mb-8 border border-white/10 bg-gradient-to-r from-indigo-600/80 via-violet-600/80 to-cyan-600/80 p-8 shadow-2xl">
        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-white/20 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-cyan-400/20 blur-[100px]" />

        <div className="relative z-10 flex items-center gap-5">
          <div className="h-16 w-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
            <SettingsIcon size={34} />
          </div>

          <div>
            <h1 className="text-4xl font-bold">Settings</h1>

            <p className="text-white/80 mt-2">
              Customize the appearance of TeamFlow.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl">
        <div className="flex items-center gap-3 mb-8">
          <Palette className="text-violet-400" />

          <h2 className="text-2xl font-semibold">Appearance</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Light */}

          <button
            onClick={() => setTheme("light")}
            className={`rounded-3xl border p-8 transition-all duration-300 hover:scale-[1.02]
      ${
        theme === "light"
          ? "border-blue-500 bg-blue-500/20 shadow-lg shadow-blue-500/20"
          : "border-white/10 bg-white/5 hover:bg-white/10"
      }`}
          >
            <Sun size={42} className="mx-auto mb-4 text-yellow-400" />

            <h3 className="text-xl font-semibold">Light Mode</h3>

            <p className="text-sm text-gray-400 mt-2">
              Bright workspace for daytime productivity.
            </p>
          </button>

          {/* Dark */}

          <button
            onClick={() => setTheme("dark")}
            className={`rounded-3xl border p-8 transition-all duration-300 hover:scale-[1.02]
      ${
        theme === "dark"
          ? "border-violet-500 bg-violet-500/20 shadow-lg shadow-violet-500/20"
          : "border-white/10 bg-white/5 hover:bg-white/10"
      }`}
          >
            <Moon size={42} className="mx-auto mb-4 text-cyan-400" />

            <h3 className="text-xl font-semibold">Dark Mode</h3>

            <p className="text-sm text-gray-400 mt-2">
              Comfortable viewing with a modern dark interface.
            </p>
          </button>
        </div>

        {/* Current Theme */}

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-green-400" />

            <span className="text-gray-300">Current Theme</span>
          </div>

          <span className="px-4 py-2 rounded-xl bg-violet-600 font-semibold capitalize">
            {theme}
          </span>
        </div>
      </div>
    </div>
  );
}
