import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTasks,
  FaChartLine,
  FaUsers,
  FaArrowRight,
  FaCheckCircle,
  FaMoon,
} from "react-icons/fa";

const Features = () => {
  const [themeTransition, setThemeTransition] = useState(false);

  const features = [
    {
      icon: <FaTasks />,
      title: "Task Management",
      desc: "Create, organize and manage tasks efficiently.",
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      desc: "Work together with your entire team in one place.",
    },
    {
      icon: <FaChartLine />,
      title: "Analytics",
      desc: "Visual dashboards to monitor productivity.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Kanban Board",
      desc: "Drag and drop workflow management.",
    },
    {
      icon: <FaMoon />,
      title: "Dark Mode",
      desc: "Beautiful light and dark experience.",
    },
    {
      icon: <FaArrowRight />,
      title: "Fast Performance",
      desc: "Optimized for speed and responsiveness.",
    },
  ];

  const handleDarkMode = () => {
    setThemeTransition(true);

    setTimeout(() => {
      const root = document.documentElement;

      root.classList.toggle("dark");

      const isDark = root.classList.contains("dark");

      localStorage.setItem("theme", isDark ? "dark" : "light");

      setTimeout(() => {
        setThemeTransition(false);
      }, 550);
    }, 150);
  };

  return (
    <>
      {/* DARK MODE TRANSITION */}
      <AnimatePresence>
        {themeTransition && (
          <motion.div
            initial={{
              clipPath: "circle(0% at 82% 78%)",
            }}
            animate={{
              clipPath: "circle(150% at 82% 78%)",
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="pointer-events-none fixed inset-0 z-[9999] bg-slate-950"
          />
        )}
      </AnimatePresence>

      <section
        id="features"
        className="relative overflow-hidden bg-slate-100 py-16 transition-colors duration-500 sm:py-20 lg:py-24 dark:bg-slate-900"
      >
        {/* SOFT BACKGROUND ACCENTS */}
        <div className="pointer-events-none absolute -left-32 top-16 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl sm:top-20 sm:h-72 sm:w-72 dark:bg-blue-600/10" />

        <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl sm:h-80 sm:w-80 dark:bg-indigo-600/10" />

        {/* MAIN CONTAINER */}
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="mb-9 sm:mb-12"
          >
            {/* SMALL LABEL */}
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-blue-600 sm:w-8" />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 sm:text-xs sm:tracking-[0.2em]">
                Features
              </span>
            </div>

            {/* HEADER CONTENT */}
            <div className="mt-4 flex flex-col gap-4 md:mt-5 md:flex-row md:items-end md:justify-between md:gap-10">
              <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-[-0.035em] text-slate-900 sm:text-4xl lg:text-[42px] dark:text-white">
                Everything your team needs
              </h2>

              <p className="max-w-xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7 md:max-w-md dark:text-slate-400">
                Manage projects, collaborate with teammates, organize work, and
                track progress—all from one dashboard.
              </p>
            </div>
          </motion.div>

          {/* FEATURES GRID */}
          <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((item, index) => {
              const isDarkModeCard = item.title === "Dark Mode";

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -5,
                    transition: {
                      duration: 0.25,
                    },
                  }}
                  onClick={isDarkModeCard ? handleDarkMode : undefined}
                  role={isDarkModeCard ? "button" : undefined}
                  tabIndex={isDarkModeCard ? 0 : undefined}
                  onKeyDown={
                    isDarkModeCard
                      ? (event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            handleDarkMode();
                          }
                        }
                      : undefined
                  }
                  className={`group relative min-w-0 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/80 p-5 backdrop-blur-sm transition-all duration-300 hover:border-blue-200 hover:bg-white/90 hover:shadow-[0_18px_40px_rgba(37,99,235,0.08)] sm:p-6 dark:border-slate-800 dark:bg-slate-950/60 dark:hover:border-slate-700 dark:hover:bg-slate-950 ${
                    index === 0 ? "lg:col-span-2" : ""
                  } ${
                    isDarkModeCard ? "cursor-pointer active:scale-[0.98]" : ""
                  }`}
                >
                  {/* TOP ACCENT */}
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />

                  {/* CARD TOP */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white sm:h-11 sm:w-11 dark:border-blue-900/40 dark:bg-blue-950/40 dark:text-blue-400 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                      {item.icon}
                    </div>

                    <span className="font-mono text-[10px] font-semibold text-slate-300 transition-colors duration-300 group-hover:text-blue-400 sm:text-[11px] dark:text-slate-700">
                      0{index + 1}
                    </span>
                  </div>

                  {/* CARD CONTENT */}
                  <h3 className="mt-5 text-base font-bold tracking-tight text-slate-900 sm:mt-6 sm:text-lg dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {item.desc}
                  </p>

                  {/* DARK MODE HINT */}
                  {isDarkModeCard && (
                    <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-blue-600 opacity-100 transition-opacity duration-300 sm:mt-5 sm:text-[11px] sm:opacity-0 sm:group-hover:opacity-100 dark:text-blue-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      Click to switch theme
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
