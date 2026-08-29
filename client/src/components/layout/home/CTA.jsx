import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-slate-100 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 px-7 py-12 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:px-12 lg:px-16 lg:py-14"
        >
          {/* Background detail */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-blue-200/60 dark:border-blue-900/40" />

          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-blue-200/50 dark:border-blue-900/30" />

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute right-20 top-10 hidden h-3 w-3 rounded-full bg-blue-500/60 lg:block"
          />

          {/* Content */}
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            {/* LEFT */}
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                  Get Started
                </span>
              </div>

              <h2 className="text-3xl font-black leading-tight tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
                Ready to get your team
                <span className="text-blue-600"> moving?</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
                Start managing projects, organizing tasks, and keeping your team
                aligned with TeamFlow.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                to="/register"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
              >
                Get Started
                <FaArrowRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 transition-all duration-700 hover:w-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
