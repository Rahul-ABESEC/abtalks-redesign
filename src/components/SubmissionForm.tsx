import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  GitBranch,
  BriefcaseBusiness,
  Send,
} from "lucide-react";

export default function SubmissionForm() {
  const [githubRepo, setGithubRepo] = useState("");
  const [githubCommit, setGithubCommit] = useState("");
  const [linkedinPost, setLinkedinPost] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isValidUrl = (value: string) => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  };

  const canSubmit =
    isValidUrl(githubRepo) &&
    isValidUrl(githubCommit) &&
    isValidUrl(linkedinPost);

  const handleSubmit = () => {
    if (!canSubmit) return;

    setSubmitted(true);
  };

  return (
    <section className="mt-8">
      <div className="flex items-center gap-2">
        <Send size={18} className="text-blue-400" />

        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
          Submit Your Proof
        </p>
      </div>

      <div className="mt-4 rounded-3xl border border-slate-800 bg-slate-900 p-6">

        <p className="text-sm leading-6 text-slate-400">
          Submit links showing what you built today. You need both
          GitHub proof and a LinkedIn post to complete the day.
        </p>

        {/* GitHub Repository */}

        <div className="mt-6">
          <label
            htmlFor="github-repo"
            className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300"
          >
            <GitBranch size={17} />
            GitHub Repository
          </label>

          <input
            id="github-repo"
            type="url"
            value={githubRepo}
            onChange={(event) => setGithubRepo(event.target.value)}
            placeholder="https://github.com/username/project"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
          />
        </div>

        {/* GitHub Commit */}

        <div className="mt-5">
          <label
            htmlFor="github-commit"
            className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300"
          >
            <GitBranch size={17} />
            GitHub Commit
          </label>

          <input
            id="github-commit"
            type="url"
            value={githubCommit}
            onChange={(event) => setGithubCommit(event.target.value)}
            placeholder="https://github.com/username/project/commit/..."
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
          />
        </div>

        {/* LinkedIn */}

        <div className="mt-5">
          <label
            htmlFor="linkedin-post"
            className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300"
          >
            <BriefcaseBusiness size={17} />
            LinkedIn Post
          </label>

          <input
            id="linkedin-post"
            type="url"
            value={linkedinPost}
            onChange={(event) => setLinkedinPost(event.target.value)}
            placeholder="https://www.linkedin.com/posts/..."
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
          />
        </div>

        {/* Submit */}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!canSubmit || submitted}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-500"
        >
          {submitted ? (
            <>
              <CheckCircle2 size={19} />
              Proof Submitted
            </>
          ) : (
            <>
              <Send size={18} />
              Submit Proof
            </>
          )}
        </button>

        {/* Success Message */}

       {submitted && (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 10 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="mt-4 rounded-2xl border border-green-500/20 bg-green-500/5 p-4"
  >
    <div className="flex items-start gap-3">
      <CheckCircle2
        size={20}
        className="mt-0.5 shrink-0 text-green-400"
      />

      <div>
        <p className="text-sm font-medium text-green-400">
          Proof submitted successfully! 🎉
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          Your Day 12 submission is ready to be reviewed.
        </p>
      </div>
    </div>
  </motion.div>
)}
      </div>
    </section>
  );
}