import {
  Rocket,
  Code2,
  GitBranch,
  Users,
  Trophy,
} from "lucide-react";

const steps = [
  {
    icon: Rocket,
    title: "Join Challenge",
    desc: "Choose your learning track.",
  },
  {
    icon: Code2,
    title: "Code Daily",
    desc: "Build something every day.",
  },
  {
    icon: GitBranch,
    title: "Push to GitHub",
    desc: "Maintain your coding streak.",
  },
  {
    icon: Users,
    title: "Share on LinkedIn",
    desc: "Build your public profile.",
  },
  {
    icon: Trophy,
    title: "Become Recruiter Ready",
    desc: "Finish all 60 days.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-950 px-6 py-20">

      <h2 className="text-4xl font-bold text-center text-white">
        Your 60-Day Journey
      </h2>

      <p className="text-slate-400 text-center mt-3 mb-12">
        One small step every day.
      </p>

      <div className="space-y-8">

        {steps.map((step, index) => {

          const Icon = step.icon;

          return (

            <div
              key={index}
              className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >

              <div className="flex items-center gap-5">

                <div className="bg-blue-600 p-4 rounded-xl">

                  <Icon
                    className="text-white"
                    size={28}
                  />

                </div>

                <div>

                  <h3 className="text-white text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="text-slate-400">
                    {step.desc}
                  </p>

                </div>

              </div>

              {index !== steps.length - 1 && (
                <div className="absolute left-11 top-24 h-8 border-l-2 border-dashed border-blue-500"></div>
              )}

            </div>

          );

        })}

      </div>

    </section>
  );
}