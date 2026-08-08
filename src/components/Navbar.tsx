import { Code2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-blue-500 text-xl font-bold">
          <Code2 size={26} />
          ABTalks
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-xl text-white">
          Join
        </button>
      </div>
    </nav>
  );
}