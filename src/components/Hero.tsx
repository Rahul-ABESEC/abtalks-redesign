import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6 pt-24">

      {/* Logo */}
      <span className="text-blue-500 text-xl font-semibold flex items-center gap-2">
        🔥 ABTalks
      </span>

      {/* Heading */}
      <motion.h1
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
        Build Every Day.
      </motion.h1>

      <h2 className="text-5xl md:text-6xl font-bold text-center text-blue-500 leading-tight">
        Become Recruiter Ready.
      </h2>
{/* Description */}
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-400"
>
  A 60-day coding challenge helping students build consistency
  through daily GitHub commits and LinkedIn posts.
</motion.p>
      <button>
      <Link
        to="/dashboard"
        className="mt-10 bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-4 rounded-xl flex items-center gap-3 text-lg font-medium shadow-lg hover:scale-105"
      >
        Start Challenge
        <ArrowRight size={22} />
      </Link>
      </button>

      {/* Small Stats */}
      <div className="mt-16 grid grid-cols-3 gap-6 text-center">

        <div>
          <h3 className="text-2xl font-bold text-white">12K+</h3>
          <p className="text-slate-400 text-sm">Students</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white">60</h3>
          <p className="text-slate-400 text-sm">Days</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white">95%</h3>
          <p className="text-slate-400 text-sm">Completion</p>
        </div>

      </div>

    </section>
  );
}