import {
  GitBranch,
  Brain,
  Flame,
  Users,
} from "lucide-react";
export default function Features() {
  const features = [
    {
      icon: GitBranch,
      title: "Daily GitHub Commits",
      desc: "Build a public coding profile recruiters can trust.",
    },
    {
      icon: Users,
      title: "LinkedIn Growth",
      desc: "Share your progress and grow your professional network.",
    },
    {
      icon: Brain,
      title: "AI Learning Coach",
      desc: "Receive guidance and stay motivated every single day.",
    },
    {
      icon: Flame,
      title: "Maintain Your Streak",
      desc: "Stay consistent for 60 days and unlock achievements.",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-16">

      <h2 className="text-white text-3xl font-bold text-center mb-10">
        Why Students Love ABTalks
      </h2>

      <div className="space-y-5">

        {features.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-5 border border-slate-800"
            >
              <Icon className="text-blue-500 mb-3" size={30} />

              <h3 className="text-white text-xl font-semibold">
                {item.title}
              </h3>

              <p className="text-slate-400 mt-2">
                {item.desc}
              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}