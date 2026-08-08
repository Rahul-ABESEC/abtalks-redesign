import { BookOpen } from "lucide-react";
import { reflection } from "../data/challenge";

export default function ReflectionCard() {
  return (
    <section className="mt-6 rounded-3xl border border-blue-500/10 bg-blue-500/5 p-6">

      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
          <BookOpen className="text-blue-400" size={20} />
        </div>

        <div>
          <p className="font-semibold text-white">
            Daily Reflection
          </p>

          <p className="text-xs text-slate-500">
            {reflection.date}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-300">
        "{reflection.text}"
      </p>

      <p className="mt-4 text-sm font-medium text-blue-400">
        Keep showing up. 🔥
      </p>

    </section>
  );
}