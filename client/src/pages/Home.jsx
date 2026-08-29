import Navbar from "../components/layout/home/Navbar";
import Hero from "../components/layout/home/Hero";
import Features from "../components/layout/home/Features";
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
import Stats from "../components/layout/home/Stats";
import HowItWorks from "../components/layout/home/HowItWorks";
import CTA from "../components/layout/home/CTA";
import Footer from "../components/layout/home/Footer";
const title = "Move Fast.... Stay Organized".split(" ");
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      {/* ================= NAVBAR ================= */}
      <Navbar />
      {/* ================= HERO ================= */}
      <Hero title={title} />

      {/* ================= FEATURES ================= */}
      <Features />

      {/* ================= STATS ================= */}

      <Stats />
      {/* ================= HOW IT WORKS ================= */}

      <HowItWorks />

      {/* ================= CTA ================= */}

      <CTA />

      {/* ================= FOOTER ================= */}

      <Footer />
    </div>
  );
}
