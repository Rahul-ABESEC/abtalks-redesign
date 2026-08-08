import { Users, Trophy, CalendarDays } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: "12,000+",
      title: "Students Joined",
    },
    {
      icon: Trophy,
      value: "95%",
      title: "Completion Rate",
    },
    {
      icon: CalendarDays,
      value: "60",
      title: "Challenge Days",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-16">

      <h2 className="text-3xl font-bold text-white text-center">
        Trusted by Thousands
      </h2>

      <div className="mt-10 space-y-5">

        {stats.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={index}
              className="bg-slate-900 rounded-2xl border border-slate-800 p-6 text-center"
            >

              <Icon
                size={32}
                className="mx-auto text-blue-500"
              />

              <h3 className="text-4xl font-bold text-white mt-4">
                {item.value}
              </h3>

              <p className="text-slate-400 mt-2">
                {item.title}
              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}