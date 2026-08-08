import { motion } from "framer-motion";
import { Flame, TrendingUp } from "lucide-react";
import {
  student,
  firstDayStudent,
  missedDayStudent,
  emptyProfileStudent,
} from "../data/challenge";
export default function StreakCard() {
  // Change this to true to preview the first-day experience.
  // Keep it false for the normal Rahul dashboard.
const isFirstDay = false;
const isMissedDay = false;
const isEmptyProfile = false;


const currentStudent = isEmptyProfile
  ? emptyProfileStudent
  : isFirstDay
    ? firstDayStudent
    : isMissedDay
      ? missedDayStudent
      : student;

  const progress =
    (currentStudent.currentDay / currentStudent.totalDays) * 100;

  return (
    <section className="mt-6 rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/15 via-slate-900 to-slate-950 p-6">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-orange-300">
            CURRENT STREAK
          </p>

          <div className="mt-2 flex items-center gap-2">
            <Flame className="text-orange-400" size={34} />

            <span className="text-5xl font-bold text-white">
              {currentStudent.streak}
            </span>

            <span className="mt-5 text-slate-400">
              days
            </span>
          </div>
        </div>

        <TrendingUp className="text-green-400" />
      </div>

      <div className="mt-6 flex items-center justify-between text-sm">
        <span className="text-slate-400">
          Day {currentStudent.currentDay} of{" "}
          {currentStudent.totalDays}
        </span>

        <span className="font-semibold text-white">
          {Math.round(progress)}%
        </span>
      </div>

<div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: `${progress}%` }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="h-full rounded-full bg-orange-500"
  />
</div>
      {isFirstDay && (
        <div className="mt-5 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4">
          <p className="text-sm font-semibold text-orange-300">
            Your first streak starts today! 🔥
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            Complete today's mission to earn your first streak day.
          </p>
        </div>
      )}
    {isMissedDay && (
  <div className="mt-5 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4">
    <p className="text-sm font-semibold text-amber-300">
      You missed yesterday. That's okay. 🌱
    </p>

{isEmptyProfile && (
  <div className="mt-5 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4">
    <p className="text-sm font-semibold text-blue-300">
      Welcome to ABTalks! 👋
    </p>

    <p className="mt-1 text-xs leading-5 text-slate-500">
      Your learning profile starts with your first challenge.
      Complete Day 1 to begin your streak and build your portfolio.
    </p>

    <a
      href="/day/12"
      className="mt-4 inline-flex rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
    >
      Start Day 1 →
    </a>
  </div>
)}

    <p className="mt-1 text-xs leading-5 text-slate-500">
      Your streak reset, but your progress is still here.
      Complete today's mission to start a new streak.
    </p>
  </div>
)}
    </section>
  );
}