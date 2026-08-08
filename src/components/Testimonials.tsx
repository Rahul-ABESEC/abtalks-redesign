import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aarav",
    role: "B.Tech Student",
    text: "The daily streak made me stop procrastinating. I finally started building projects consistently.",
  },
  {
    name: "Priya",
    role: "Computer Science Student",
    text: "Posting my progress publicly helped me build a portfolio that I could actually show recruiters.",
  },
  {
    name: "Rohan",
    role: "AIML Student",
    text: "60 days felt huge at first. Breaking it into one task per day made it achievable.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-950 px-6 py-20">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">
          <p className="text-blue-500 font-semibold">
            STUDENT STORIES
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Small streaks. Big progress.
          </h2>

          <p className="text-slate-400 mt-3">
            Realistic progress starts with showing up every day.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <Quote className="text-blue-500 mb-5" size={28} />

              <p className="text-slate-300 leading-7">
                "{testimonial.text}"
              </p>

              <div className="mt-6">
                <p className="font-semibold text-white">
                  {testimonial.name}
                </p>

                <p className="text-sm text-slate-500">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}