import { CheckCircle2, Circle } from "lucide-react";
import { challengeDay } from "../data/challenge";

export default function TaskChecklist() {
  return (
    <section className="mt-6">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
          What You'll Build
        </p>

        <span className="text-xs text-slate-500">
          0 / {challengeDay.goals.length} complete
        </span>
      </div>

      <div className="mt-3 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
        {challengeDay.goals.map((goal, index) => (
          <div
            key={goal}
            className={`flex items-start gap-4 p-5 ${
              index !== challengeDay.goals.length - 1
                ? "border-b border-slate-800"
                : ""
            }`}
          >
            <Circle
              size={21}
              className="mt-0.5 shrink-0 text-slate-600"
            />

            <div>
              <p className="text-sm font-medium text-slate-200">
                {goal}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Step {index + 1}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-2xl border border-green-500/10 bg-green-500/5 p-4">
        <CheckCircle2
          size={18}
          className="shrink-0 text-green-400"
        />

        <p className="text-xs leading-5 text-slate-400">
          Complete each step before submitting your proof of work.
        </p>
      </div>
    </section>
  );
}