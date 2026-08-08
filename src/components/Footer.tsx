import { Flame } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
            <Flame size={18} className="text-white" />
          </div>

          <div>
            <p className="font-bold text-white">
              ABTalks
            </p>

            <p className="text-xs text-slate-500">
              Build every day.
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-500">
          60 days. One commit at a time.
        </p>

      </div>
    </footer>
  );
}