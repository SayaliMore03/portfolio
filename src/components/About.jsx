import { profile, education, experience } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 max-w-6xl mx-auto px-6 py-16 min-h-[calc(100vh-5rem)] flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-8">
        About <span className="text-accent">Me</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
            {profile.about}
          </p>

          <div className="mt-6 p-5 rounded-xl bg-slate-50 dark:bg-white/5">
            <p className="font-semibold text-navy dark:text-white">
              {education.degree}
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              {education.college} · {education.cgpa} · {education.graduated}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-navy dark:text-white">
            Experience
          </h3>
          {experience.map((exp) => (
            <div
              key={exp.company}
              className="border-l-2 border-accent pl-5"
            >
              <p className="font-semibold">
                {exp.role} · <span className="text-accent">{exp.company}</span>
              </p>
              <ul className="mt-2 space-y-1 text-slate-600 dark:text-slate-400 text-sm list-disc list-inside">
                {exp.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
