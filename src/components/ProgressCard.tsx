import { CheckCircle2, Target } from "lucide-react";
import { student } from "../data/challenge";

export default function ProgressCard() {
  return (
    <section className="mt-6 rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            CHALLENGE PROGRESS
          </p>

          <h2 className="mt-1 text-xl font-bold text-white">
            You're building momentum.
          </h2>
        </div>

        <Target className="text-blue-400" />
      </div>

      <div className="mt-6 flex items-end justify-between">
        <div>
          <span className="text-4xl font-bold text-white">
            {student.completedDays}
          </span>

          <span className="text-slate-500">
            {" "} / {student.totalDays} days
          </span>
        </div>

        <span className="text-lg font-semibold text-blue-400">
          {student.completionRate}%
        </span>
      </div>

      <div className="mt-3 h-3 rounded-full bg-slate-800">
        <div
          className="h-3 rounded-full bg-blue-600"
          style={{ width: `${student.completionRate}%` }}
        />
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm text-green-400">
        <CheckCircle2 size={17} />
        12 successful submissions
      </div>

    </section>
  );
}