import { ArrowUpRight, BookOpen } from "lucide-react";
import { challengeDay } from "../data/challenge";

export default function Resources() {
  return (
    <section className="mt-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
        Helpful Resources
      </p>

      <div className="mt-3 space-y-3">
        {challengeDay.resources.map((resource) => (
          <button
            key={resource.title}
            type="button"
            className="flex w-full items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-4 text-left transition hover:border-slate-700 hover:bg-slate-800"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
              <BookOpen size={19} className="text-blue-400" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-200">
                {resource.title}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                {resource.type}
              </p>
            </div>

            <ArrowUpRight
              size={18}
              className="shrink-0 text-slate-500"
            />
          </button>
        ))}
      </div>
    </section>
  );
}