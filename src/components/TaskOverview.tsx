import { Clock3, Signal, Target } from "lucide-react";
import { challengeDay } from "../data/challenge";

export default function TaskOverview() {
  return (
    <section className="mt-8">
      {/* Section label */}
      <div className="flex items-center gap-2">
        <Target size={18} className="text-blue-400" />

        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
          Today's Mission
        </p>
      </div>

      {/* Task card */}
      <div className="mt-4 rounded-3xl border border-slate-800 bg-slate-900 p-6">

        <h2 className="text-2xl font-bold leading-tight text-white">
          {challengeDay.title}
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          {challengeDay.subtitle}
        </p>

        <p className="mt-4 text-sm leading-6 text-slate-300">
          {challengeDay.description}
        </p>

        {/* Task information */}
        <div className="mt-6 flex flex-wrap gap-3">

          <div className="flex items-center gap-2 rounded-xl bg-slate-800 px-3 py-2">
            <Clock3 size={16} className="text-blue-400" />

            <span className="text-sm text-slate-300">
              {challengeDay.estimatedTime}
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-slate-800 px-3 py-2">
            <Signal size={16} className="text-blue-400" />

            <span className="text-sm text-slate-300">
              {challengeDay.difficulty}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}