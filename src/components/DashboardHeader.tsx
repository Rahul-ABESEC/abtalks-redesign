import { Bell } from "lucide-react";
import { student } from "../data/challenge";

export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <p className="text-sm text-slate-500">
          Welcome back
        </p>

        <h1 className="text-2xl font-bold text-white">
          Good evening, {student.name} 👋
        </h1>

        <p className="text-sm text-slate-400 mt-1">
          Keep your streak alive.
        </p>
      </div>

      <button
        className="flex h-10 w-10 items-center justify-center rounded-full
        border border-slate-800 bg-slate-900 text-slate-300"
        aria-label="Notifications"
      >
        <Bell size={19} />
      </button>
    </header>
  );
}