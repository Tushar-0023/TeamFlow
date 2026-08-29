import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", {
        full_name: name,
        email,
        password,
      });

      alert("Account created successfully");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Register failed");
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-100/60 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      {/* Register Card */}
      <div className="relative z-10 w-full max-w-5xl bg-white rounded-[28px] shadow-[0_25px_80px_rgba(15,23,42,0.10)] border border-slate-200/70 overflow-hidden">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] min-h-[650px]">
          {/* Left Information Panel */}
          <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center">
                  <span className="text-xl font-black">T</span>
                </div>

                <h1 className="text-2xl font-black tracking-tight">
                  <span className="text-blue-100">Team</span>Flow
                </h1>
              </div>

              {/* Message */}
              <div className="mt-24">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-300" />
                  Start your journey
                </div>

                <h2 className="mt-6 text-4xl font-black leading-tight">
                  Bring your
                  <br />
                  team together.
                </h2>

                <p className="mt-6 text-blue-100/80 leading-7 max-w-sm">
                  Create your TeamFlow account and organize projects, tasks and
                  collaboration from one powerful workspace.
                </p>
              </div>
            </div>

            {/* Feature highlights */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-blue-50">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  ✓
                </div>
                Organize projects effortlessly
              </div>

              <div className="flex items-center gap-3 text-sm text-blue-50">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  ✓
                </div>
                Track your team's progress
              </div>

              <div className="flex items-center gap-3 text-sm text-blue-50">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  ✓
                </div>
                Collaborate in one workspace
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="flex items-center justify-center px-7 py-12 sm:px-12 lg:px-16">
            <div className="w-full max-w-lg">
              {/* Mobile Logo */}
              <div className="lg:hidden flex items-center justify-center gap-3 mb-10">
                <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200">
                  <span className="text-white text-xl font-black">T</span>
                </div>

                <h1 className="text-2xl font-black text-slate-900">
                  <span className="text-blue-600">Team</span>Flow
                </h1>
              </div>

              {/* Heading */}
              <div className="mb-9">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600 mb-3">
                  Create account
                </p>

                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                  Let's get you started.
                </h2>

                <p className="mt-3 text-slate-500">
                  Create your account and start building better workflows.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleRegister} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2.5">
                    Full name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2.5">
                    Email address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2.5">
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="Create a password"
                    className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/20 transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/25 active:translate-y-0"
                >
                  Create my account
                </button>
              </form>

              {/* Login */}
              <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                <p className="text-sm text-slate-500">
                  Already have an account?{" "}
                  <span
                    onClick={() => navigate("/login")}
                    className="font-bold text-blue-600 cursor-pointer hover:text-blue-700 transition-colors"
                  >
                    Sign in
                  </span>
                </p>
              </div>

              <p className="mt-5 text-center text-xs text-slate-400">
                By creating an account, you can start managing your projects and
                team workflow in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
