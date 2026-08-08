import { Lock } from "lucide-react";
import { achievements } from "../data/challenge";

export default function Achievements() {
  return (
    <section className="mt-6">

      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
          Achievements
        </p>

        <span className="text-xs text-slate-500">
          3 / 4 unlocked
        </span>
      </div>

      <div className="grid grid-cols-4 gap-3">

        {achievements.map((achievement) => (
          <div
            key={achievement.title}
            className={`flex aspect-square flex-col items-center justify-center rounded-2xl border ${
              achievement.unlocked
                ? "border-slate-700 bg-slate-900"
                : "border-slate-800 bg-slate-950 opacity-50"
            }`}
          >
            {achievement.unlocked ? (
              <span className="text-2xl">
                {achievement.icon}
              </span>
            ) : (
              <Lock size={20} className="text-slate-600" />
            )}

            <p className="mt-2 text-center text-[10px] text-slate-500">
              {achievement.title}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}