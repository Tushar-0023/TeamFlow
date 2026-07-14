import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaTasks,
  FaChartLine,
  FaUsers,
  FaArrowRight,
  FaCheckCircle,
  FaMoon,
} from "react-icons/fa";
const title = "Move Fast.... Stay Organized".split(" ");
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* LOGO */}
          <Link
            to="/"
            className="text-2xl font-black tracking-tight flex items-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              TeamFlow
            </span>
          </Link>

          {/* CENTER NAV (desktop) */}
          <div className="hidden md:flex items-center gap-2 bg-slate-100 dark:bg-slate-900 p-1 rounded-full">
            <a
              href="#features"
              className="px-4 py-2 rounded-full text-sm text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-blue-600 transition"
            >
              Features
            </a>

            <a
              href="#about"
              className="px-4 py-2 rounded-full text-sm text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-blue-600 transition"
            >
              About
            </a>

            <a
              href="#contact"
              className="px-4 py-2 rounded-full text-sm text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-blue-600 transition"
            >
              Contact
            </a>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="px-5 py-2 rounded-full text-sm font-medium text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:scale-105 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-500/10 to-cyan-500/10 blur-3xl animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-36 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-medium text-sm">
                🚀 Project Management SaaS
              </span>

              {/* ANIMATED TITLE */}
              <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight flex flex-wrap">
                {title.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.03,
                      duration: 0.4,
                    }}
                    className="inline-block"
                  >
                    {char === "." ? <br /> : char}
                  </motion.span>
                ))}
              </h1>

              <p className="mt-8 text-lg text-slate-600 dark:text-slate-300 leading-8">
                TeamFlow helps teams manage projects, organize tasks, track
                progress, and deliver work faster with a clean modern workspace.
              </p>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/register"
                  className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:scale-105 transition shadow-lg"
                >
                  Get Started
                  <FaArrowRight />
                </Link>

                <Link
                  to="/login"
                  className="px-8 py-4 rounded-2xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  Login
                </Link>
              </div>

              {/* STATS */}
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <h2 className="text-3xl font-bold">100+</h2>
                  <p className="text-slate-500">Projects</p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold">10K+</h2>
                  <p className="text-slate-500">Tasks</p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold">99%</h2>
                  <p className="text-slate-500">Productivity</p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-3xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 p-8 hover:scale-[1.02] transition">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-xl">Dashboard Preview</h3>
                  <FaMoon className="text-blue-600 animate-pulse" />
                </div>

                <div className="mt-8 space-y-5">
                  <div className="rounded-2xl bg-blue-600 text-white p-5 flex items-center gap-4 hover:scale-105 transition">
                    <FaTasks size={30} />
                    <div>
                      <h4 className="font-bold">Active Tasks</h4>
                      <p className="text-blue-100">48 Tasks</p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-green-500 text-white p-5 flex items-center gap-4 hover:scale-105 transition">
                    <FaChartLine size={30} />
                    <div>
                      <h4 className="font-bold">Progress</h4>
                      <p>82% Completed</p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-purple-600 text-white p-5 flex items-center gap-4 hover:scale-105 transition">
                    <FaUsers size={30} />
                    <div>
                      <h4 className="font-bold">Team Members</h4>
                      <p>18 Active Members</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border dark:border-slate-700 p-5 hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-500 animate-bounce" />
                      Project Launch Completed
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ================= FEATURES ================= */}

      <section id="features" className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-widest">
              FEATURES
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4">
              Everything your team needs
            </h2>

            <p className="mt-5 text-slate-500 max-w-2xl mx-auto">
              Manage projects, collaborate with teammates, organize work, and
              track progress—all from one dashboard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaTasks size={28} />,
                title: "Task Management",
                desc: "Create, organize and manage tasks efficiently.",
              },
              {
                icon: <FaUsers size={28} />,
                title: "Team Collaboration",
                desc: "Work together with your entire team in one place.",
              },
              {
                icon: <FaChartLine size={28} />,
                title: "Analytics",
                desc: "Visual dashboards to monitor productivity.",
              },
              {
                icon: <FaCheckCircle size={28} />,
                title: "Kanban Board",
                desc: "Drag and drop workflow management.",
              },
              {
                icon: <FaMoon size={28} />,
                title: "Dark Mode",
                desc: "Beautiful light and dark experience.",
              },
              {
                icon: <FaArrowRight size={28} />,
                title: "Fast Performance",
                desc: "Optimized for speed and responsiveness.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-8 shadow-lg hover:shadow-2xl transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mt-6">{item.title}</h3>

                <p className="mt-3 text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              ["150+", "Projects Managed"],
              ["12K+", "Tasks Completed"],
              ["300+", "Happy Teams"],
              ["99.9%", "Uptime"],
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-center p-10 shadow-xl"
              >
                <h2 className="text-5xl font-bold">{item[0]}</h2>

                <p className="mt-3 text-blue-100">{item[1]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= HOW IT WORKS ================= */}

      <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-widest">
              HOW IT WORKS
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4">
              Manage your work in 4 simple steps
            </h2>

            <p className="mt-5 text-slate-500 max-w-2xl mx-auto">
              TeamFlow makes project management simple, fast and organized.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Create Account",
                desc: "Sign up and access your workspace instantly.",
              },
              {
                step: "02",
                title: "Create Projects",
                desc: "Organize your work into projects.",
              },
              {
                step: "03",
                title: "Manage Tasks",
                desc: "Assign tasks, priorities and deadlines.",
              },
              {
                step: "04",
                title: "Track Progress",
                desc: "Monitor productivity with analytics.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-slate-950 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-800"
              >
                <div className="text-5xl font-extrabold text-blue-600">
                  {item.step}
                </div>

                <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[40px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-center py-20 px-10 shadow-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to boost your team's productivity?
            </h2>

            <p className="mt-6 text-blue-100 text-lg max-w-2xl mx-auto">
              Join TeamFlow and start managing projects, collaborating with your
              team, and delivering work faster.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/register"
                className="px-8 py-4 rounded-2xl bg-white text-blue-600 font-semibold hover:scale-105 transition"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="px-8 py-4 rounded-2xl border border-white text-white hover:bg-white hover:text-blue-600 transition"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer id="contact" className="bg-slate-950 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-extrabold text-white">
              <span className="text-blue-500">Team</span>Flow
            </h2>

            <p className="mt-4 text-slate-400">Collaborate. Manage. Deliver.</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>

            <ul className="space-y-2">
              <li>Dashboard</li>
              <li>Projects</li>
              <li>Tasks</li>
              <li>Analytics</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>

            <ul className="space-y-2">
              <li>About</li>
              <li>Features</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Get Started</h3>

            <Link
              to="/register"
              className="inline-block mt-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
            >
              Create Account
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-500">
          © {new Date().getFullYear()} TeamFlow. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
