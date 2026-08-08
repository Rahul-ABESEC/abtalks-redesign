import { ArrowRight, Flame } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-slate-950 px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/20 via-slate-900 to-slate-950 p-8 md:p-12 text-center">

          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20">
            <Flame className="text-blue-400" size={28} />
          </div>

          <p className="text-blue-400 font-semibold">
            YOUR NEXT 60 DAYS START HERE
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Ready to build something every day?
          </h2>

          <p className="text-slate-400 max-w-xl mx-auto mt-4">
            Don't wait for motivation. Build a system that makes progress
            inevitable.
          </p>

          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 mt-8 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-500 hover:scale-105"
          >
            Start Your 60-Day Challenge
            <ArrowRight size={20} />
          </Link>

        </div>

      </div>
    </section>
  );
}