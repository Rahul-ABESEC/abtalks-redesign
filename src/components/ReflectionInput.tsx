import { useState } from "react";
import { BookOpen, Check } from "lucide-react";

export default function ReflectionInput() {
  const [reflection, setReflection] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (!reflection.trim()) return;

    setSaved(true);
  };

  return (
    <section className="mt-8">
      <div className="flex items-center gap-2">
        <BookOpen size={18} className="text-blue-400" />

        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
          Daily Reflection
        </p>
      </div>

      <div className="mt-4 rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <h3 className="text-lg font-semibold text-white">
          What did you learn today?
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Write one thing you understood, built, or improved today.
        </p>

        <textarea
          value={reflection}
          onChange={(event) => {
            setReflection(event.target.value);
            setSaved(false);
          }}
          placeholder="Today I learned..."
          rows={4}
          className="mt-5 w-full resize-none rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
        />

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-slate-600">
            {reflection.length} characters
          </span>

          <button
            type="button"
            onClick={handleSave}
            disabled={!reflection.trim()}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-800 disabled:text-slate-600"
          >
            {saved ? (
              <>
                <Check size={17} />
                Saved
              </>
            ) : (
              "Save Reflection"
            )}
          </button>
        </div>

        {saved && (
          <div className="mt-4 rounded-2xl border border-green-500/20 bg-green-500/5 p-4">
            <p className="text-sm font-medium text-green-400">
              Reflection saved. Keep building. 🔥
            </p>
          </div>
        )}
      </div>
    </section>
  );
}