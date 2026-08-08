import { ArrowRight, Clock3, Signal } from "lucide-react";
import { Link } from "react-router-dom";
import { todayTask } from "../data/challenge";

export default function TodayMission() {
  return (
    <section className="mt-6">

      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
          Today's Mission
        </p>

        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
          Day {todayTask.day}
        </span>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

        <h2 className="text-2xl font-bold text-white">
          {todayTask.title}
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          {todayTask.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {todayTask.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-5 text-sm text-slate-400">
          <span className="flex items-center gap-1.5">
            <Clock3 size={16} />
            {todayTask.estimatedTime}
          </span>

          <span className="flex items-center gap-1.5">
            <Signal size={16} />
            {todayTask.difficulty}
          </span>
        </div>

        <Link
          to="/day/12"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-500"
        >
          Continue Mission
          <ArrowRight size={18} />
        </Link>

      </div>
    </section>
  );
}