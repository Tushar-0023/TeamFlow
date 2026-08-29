import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaTasks,
  FaChartLine,
  FaUsers,
  FaCheckCircle,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const Hero = ({ title }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden bg-[#f7f8fa] transition-colors duration-500 dark:bg-slate-950">
      {/* Background design */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-15%] top-0 h-[280px] w-[280px] rounded-full bg-blue-500/10 blur-[90px] sm:left-[8%] sm:h-[420px] sm:w-[420px] sm:blur-[120px]" />

        <div className="absolute right-[-30%] top-[25%] h-[350px] w-[350px] rounded-full bg-indigo-500/10 blur-[100px] sm:right-[-10%] sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.3] transition-opacity duration-500 dark:opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* Theme Toggle */}
      <motion.button
        type="button"
        onClick={() => setDarkMode((prev) => !prev)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
        className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-blue-300 hover:text-blue-600 sm:right-6 sm:top-6 sm:h-11 sm:w-11 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
        aria-label="Toggle dark mode"
      >
        <motion.div
          key={darkMode ? "sun" : "moon"}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
        >
          {darkMode ? <FaSun size={15} /> : <FaMoon size={15} />}
        </motion.div>
      </motion.button>

      {/* Main container */}
      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl items-center px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="w-full">
          {/* TOP LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 flex items-center gap-3 sm:mb-10"
          >
            <span className="h-[1px] w-7 bg-blue-600 sm:w-10" />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 sm:text-xs sm:tracking-[0.25em] dark:text-slate-400">
              Project Management Platform
            </span>
          </motion.div>

          {/* MAIN HERO */}
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            {/* LEFT CONTENT */}
            <div className="min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                {/* Title */}
                <h1 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.045em] text-slate-950 transition-colors duration-500 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
                  {title.map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: i * 0.025,
                        duration: 0.35,
                      }}
                      className="inline-block"
                    >
                      {char === "." ? <br /> : char}
                    </motion.span>
                  ))}
                </h1>

                {/* Description */}
                <div className="mt-7 grid gap-5 border-t border-slate-200 pt-6 transition-colors duration-500 sm:mt-8 sm:gap-8 sm:pt-7 md:grid-cols-[1fr_auto] dark:border-slate-800">
                  <p className="max-w-xl text-sm leading-7 text-slate-600 transition-colors duration-500 sm:text-base sm:text-lg sm:leading-8 dark:text-slate-300">
                    TeamFlow helps teams manage projects, organize tasks, track
                    progress, and deliver work faster with a focused workspace
                    built for modern teams.
                  </p>

                  <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-slate-400 transition-colors duration-500 md:flex dark:border-slate-700">
                    ↓
                  </div>
                </div>
              </motion.div>

              {/* ACTIONS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="mt-7 flex flex-col items-stretch gap-4 xs:flex-row xs:items-center sm:mt-8 sm:flex-row sm:gap-6"
              >
                <Link
                  to="/register"
                  className="group inline-flex w-full items-center justify-center gap-4 bg-slate-950 px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/20 sm:w-auto sm:px-6 sm:py-4 dark:bg-white dark:text-slate-950"
                >
                  <span>Start building</span>

                  <span className="flex h-8 w-8 items-center justify-center bg-white/10 transition-transform duration-300 group-hover:translate-x-1 dark:bg-slate-950/10">
                    <FaArrowRight size={13} />
                  </span>
                </Link>

                <Link
                  to="/login"
                  className="self-center border-b border-slate-400 pb-1 text-sm font-bold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 sm:self-auto dark:text-slate-300 dark:hover:border-white dark:hover:text-white"
                >
                  Sign in to workspace
                </Link>
              </motion.div>

              {/* STATS */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="mt-10 grid max-w-2xl grid-cols-3 border-y border-slate-200 transition-colors duration-500 sm:mt-12 dark:border-slate-800"
              >
                <div className="py-4 pr-3 sm:py-5 sm:pr-5">
                  <h2 className="text-xl font-black tracking-tight text-slate-950 transition-colors duration-500 sm:text-3xl dark:text-white">
                    100+
                  </h2>

                  <p className="mt-1 text-[9px] font-medium uppercase tracking-wider text-slate-500 sm:text-xs">
                    Projects
                  </p>
                </div>

                <div className="border-l border-slate-200 px-3 py-4 transition-colors duration-500 sm:px-5 sm:py-5 dark:border-slate-800">
                  <h2 className="text-xl font-black tracking-tight text-slate-950 transition-colors duration-500 sm:text-3xl dark:text-white">
                    10K+
                  </h2>

                  <p className="mt-1 text-[9px] font-medium uppercase tracking-wider text-slate-500 sm:text-xs">
                    Tasks
                  </p>
                </div>

                <div className="border-l border-slate-200 px-3 py-4 transition-colors duration-500 sm:px-5 sm:py-5 dark:border-slate-800">
                  <h2 className="text-xl font-black tracking-tight text-slate-950 transition-colors duration-500 sm:text-3xl dark:text-white">
                    99%
                  </h2>

                  <p className="mt-1 text-[9px] font-medium uppercase tracking-wider text-slate-500 sm:text-xs">
                    Productivity
                  </p>
                </div>
              </motion.div>
            </div>

            {/* RIGHT — WORKSPACE */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full min-w-0 pb-8 sm:pb-10 lg:pb-0"
            >
              {/* Main workspace */}
              <div className="relative w-full overflow-hidden border border-slate-200 bg-white p-3 shadow-[12px_16px_0px_rgba(15,23,42,0.06)] transition-colors duration-500 sm:p-5 sm:shadow-[20px_25px_0px_rgba(15,23,42,0.06)] dark:border-slate-800 dark:bg-slate-900">
                {/* Window header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 sm:pb-5 dark:border-slate-800">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-300 sm:h-2.5 sm:w-2.5 dark:bg-slate-700" />
                    <span className="h-2 w-2 rounded-full bg-slate-300 sm:h-2.5 sm:w-2.5 dark:bg-slate-700" />
                    <span className="h-2 w-2 rounded-full bg-slate-300 sm:h-2.5 sm:w-2.5 dark:bg-slate-700" />
                  </div>

                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 sm:text-xs">
                    TeamFlow
                  </span>
                </div>

                {/* Dashboard content */}
                <div className="mt-4 grid grid-cols-[48px_1fr] gap-3 sm:mt-6 sm:grid-cols-[70px_1fr] sm:gap-5">
                  {/* Sidebar */}
                  <div className="border-r border-slate-100 pr-2 sm:pr-4 dark:border-slate-800">
                    <div className="mb-4 h-6 w-6 bg-slate-950 sm:mb-5 sm:h-8 sm:w-8 dark:bg-white" />

                    <div className="space-y-3 sm:space-y-4">
                      <div className="h-1.5 w-6 bg-blue-500 sm:h-2 sm:w-8" />
                      <div className="h-1.5 w-5 bg-slate-200 sm:h-2 sm:w-6 dark:bg-slate-700" />
                      <div className="h-1.5 w-6 bg-slate-200 sm:h-2 sm:w-8 dark:bg-slate-700" />
                      <div className="h-1.5 w-4 bg-slate-200 sm:h-2 sm:w-5 dark:bg-slate-700" />
                    </div>
                  </div>

                  {/* Main dashboard */}
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">
                          Workspace overview
                        </p>

                        <h3 className="mt-1 truncate text-base font-black text-slate-950 sm:text-xl dark:text-white">
                          Product Launch
                        </h3>
                      </div>

                      <span className="shrink-0 border border-green-200 bg-green-50 px-1.5 py-1 text-[8px] font-bold uppercase tracking-wider text-green-600 sm:px-2 sm:text-[10px] dark:border-green-900/50 dark:bg-green-900/20">
                        Active
                      </span>
                    </div>

                    {/* Progress */}
                    <div className="mt-5 sm:mt-7">
                      <div className="mb-2 flex justify-between text-[9px] font-bold sm:text-xs">
                        <span className="text-slate-500">Overall progress</span>

                        <span className="text-slate-950 dark:text-white">
                          82%
                        </span>
                      </div>

                      <div className="h-1.5 bg-slate-100 sm:h-2 dark:bg-slate-800">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "82%" }}
                          transition={{ delay: 0.8, duration: 1.2 }}
                          className="h-full bg-blue-600"
                        />
                      </div>
                    </div>

                    {/* Mini cards */}
                    <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-7 sm:gap-3">
                      <div className="border border-slate-100 p-2.5 sm:p-4 dark:border-slate-800">
                        <FaTasks className="text-sm text-blue-600 sm:text-base" />

                        <h4 className="mt-2 text-xl font-black text-slate-950 sm:mt-4 sm:text-2xl dark:text-white">
                          48
                        </h4>

                        <p className="text-[9px] text-slate-500 sm:text-xs">
                          Active Tasks
                        </p>
                      </div>

                      <div className="border border-slate-100 p-2.5 sm:p-4 dark:border-slate-800">
                        <FaUsers className="text-sm text-indigo-600 sm:text-base" />

                        <h4 className="mt-2 text-xl font-black text-slate-950 sm:mt-4 sm:text-2xl dark:text-white">
                          18
                        </h4>

                        <p className="text-[9px] text-slate-500 sm:text-xs">
                          Team Members
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating progress card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-1 left-2 border border-slate-200 bg-white p-2.5 shadow-xl transition-colors duration-500 sm:-bottom-2 sm:left-4 sm:p-4 md:left-8 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-green-50 text-green-600 sm:h-10 sm:w-10 dark:bg-green-900/20">
                    <FaCheckCircle size={13} />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold text-slate-950 sm:text-xs dark:text-white">
                      Milestone completed
                    </p>

                    <p className="mt-0.5 text-[8px] text-slate-500 sm:mt-1 sm:text-xs">
                      Launch preparation
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating chart icon */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-1 top-8 flex h-10 w-10 items-center justify-center border border-slate-200 bg-white shadow-lg transition-colors duration-500 sm:right-2 sm:top-12 sm:h-14 sm:w-14 dark:border-slate-800 dark:bg-slate-900"
              >
                <FaChartLine className="text-sm text-blue-600 sm:text-base" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
