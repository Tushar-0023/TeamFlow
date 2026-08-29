import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaLock,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";
import api from "../../services/api";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("LOGIN BUTTON CLICKED");

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      console.log("LOGIN RESPONSE:", res.data);
      console.log("TOKEN:", res.data.token);

      login(res.data.token);
      navigate("/dashboard");
    } catch (err) {
      console.log("FULL ERROR:", err);
      console.log("ERROR RESPONSE:", err.response);
      console.log("ERROR DATA:", err.response?.data);
      console.log("ERROR MESSAGE:", err.message);

      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#eef2f7] text-slate-900">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-300/30 blur-[120px]" />

        <div className="absolute -bottom-40 -right-40 h-[550px] w-[550px] rounded-full bg-indigo-300/25 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* PAGE CONTAINER */}
      <div className="relative flex min-h-screen w-full items-center justify-center px-4 py-8 sm:px-6">
        {/* AUTH CARD */}
        <div className="grid w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/80 bg-white/80 shadow-[0_35px_100px_rgba(15,23,42,0.14)] backdrop-blur-xl lg:min-h-[680px] lg:grid-cols-2">
          {/* ========================================= */}
          {/* LEFT SIDE */}
          {/* ========================================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative hidden overflow-hidden bg-slate-950 p-10 text-white sm:p-12 lg:flex lg:flex-col lg:justify-between"
          >
            {/* GRID */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            {/* GLOW */}
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-blue-400/20" />

            <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-indigo-400/20" />

            <div className="absolute right-20 top-28 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

            {/* CONTENT */}
            <div className="relative z-10">
              {/* LOGO */}
              <button
                type="button"
                onClick={() => navigate("/")}
                className="text-2xl font-black tracking-tight"
              >
                <span className="text-blue-400">Team</span>Flow
              </button>

              {/* INTRO */}
              <div className="mt-28 max-w-md">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-blue-400" />

                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                    Workspace access
                  </span>
                </div>

                <h1 className="text-5xl font-black leading-[1.02] tracking-[-0.05em]">
                  Your work,
                  <br />
                  already
                  <br />
                  <span className="text-blue-400">in motion.</span>
                </h1>

                <p className="mt-7 max-w-sm text-sm leading-7 text-slate-400">
                  Continue managing projects, coordinating your team, and
                  keeping every task moving forward.
                </p>
              </div>
            </div>

            {/* STATUS */}
            <div className="relative z-10 border-t border-slate-800 pt-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <FaCheckCircle size={15} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Workspace ready
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Secure team access
                  </p>
                </div>

                <div className="ml-auto flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    Online
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ========================================= */}
          {/* RIGHT SIDE */}
          {/* ========================================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex min-h-[620px] items-center justify-center bg-[#f8fafc] p-7 sm:p-12 lg:min-h-0 lg:p-16"
          >
            <div className="w-full max-w-md">
              {/* MOBILE LOGO */}
              <button
                type="button"
                onClick={() => navigate("/")}
                className="mb-12 text-xl font-black tracking-tight lg:hidden"
              >
                <span className="text-blue-600">Team</span>Flow
              </button>

              {/* HEADER */}
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-blue-600" />

                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-600">
                    Sign in
                  </span>
                </div>

                <h2 className="text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl">
                  Welcome back.
                </h2>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  Enter your workspace credentials to continue.
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleLogin} className="mt-10 space-y-6">
                {/* EMAIL */}
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
                    Email address
                  </label>

                  <div className="group relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 transition-colors duration-300 group-focus-within:text-blue-600" />

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-11 pr-4 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
                    Password
                  </label>

                  <div className="group relative">
                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 transition-colors duration-300 group-focus-within:text-blue-600" />

                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-11 pr-4 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                {/* LOGIN BUTTON */}
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="group flex w-full items-center justify-between rounded-2xl bg-slate-950 p-2 pl-6 text-sm font-bold text-white shadow-xl shadow-slate-950/10 transition-all duration-300 hover:shadow-2xl"
                >
                  <span>Enter workspace</span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 transition-transform duration-300 group-hover:translate-x-1">
                    <FaArrowRight size={13} />
                  </span>
                </motion.button>
              </form>

              {/* REGISTER */}
              <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6">
                <p className="text-sm text-slate-500">New to TeamFlow?</p>

                <button
                  type="button"
                  onClick={() => navigate("/register")}
                  className="text-sm font-bold text-blue-600 transition-colors hover:text-blue-800"
                >
                  Create account →
                </button>
              </div>

              {/* SECURITY */}
              <div className="mt-8 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                <FaLock size={9} />
                Secure workspace authentication
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
