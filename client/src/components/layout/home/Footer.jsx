import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="border-t border-slate-800 bg-slate-950 text-slate-400"
    >
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="text-2xl font-black tracking-tight text-white"
            >
              <span className="text-blue-500">Team</span>Flow
            </Link>

            <p className="mt-1 text-xs text-slate-500">
              Collaborate. Manage. Deliver.
            </p>
          </motion.div>

          {/* NAVIGATION */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-x-7 gap-y-3 text-xs"
          >
            <a
              href="#features"
              className="transition-colors duration-300 hover:text-white"
            >
              Features
            </a>

            <a
              href="#about"
              className="transition-colors duration-300 hover:text-white"
            >
              About
            </a>

            <a
              href="#contact"
              className="transition-colors duration-300 hover:text-white"
            >
              Contact
            </a>

            <Link
              to="/register"
              className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
            >
              Create Account
              <FaArrowUpRightFromSquare
                size={9}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <div className="mt-8 flex flex-col gap-2 border-t border-slate-800 pt-5 text-[11px] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TeamFlow. All rights reserved.</p>

          <span>Built for better teamwork.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
