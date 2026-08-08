import { ArrowLeft, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { challengeDay } from "../data/challenge";

export default function ChallengeHeader() {
  const progress =
    (challengeDay.day / challengeDay.totalDays) * 100;

  return (
    <header>
      <Link
        to="/dashboard"
        className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
      >
        <ArrowLeft size={18} />
        Dashboard
      </Link>

      <div className="mt-8 flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            Challenge Day
          </p>

          <h1 className="mt-2 text-4xl font-bold text-white">
            Day {challengeDay.day}
          </h1>

          <p className="mt-2 text-slate-400">
            of {challengeDay.totalDays}
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
          <CalendarDays
            size={24}
            className="text-blue-400"
          />
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-500">
            Challenge progress
          </span>

          <span className="font-semibold text-blue-400">
            {Math.round(progress)}%
          </span>
        </div>

        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-blue-600"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </header>
  );
}