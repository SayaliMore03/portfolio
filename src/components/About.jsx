import { profile, education, experience, atAGlance } from "../data/portfolioData";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 max-w-6xl mx-auto px-6 pt-4 pb-16 mb-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-5">
        About <span className="text-accent">Me</span>
      </h2>

      {/* Top Row: Bio Paragraph & Experience */}
      <div className="grid md:grid-cols-2 gap-12 items-start mb-6">
        {/* Left: Bio text */}
        <div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line text-sm md:text-base">
            {profile.about}
          </p>
        </div>

        {/* Right: Experience */}
        <div>
          <h3 className="text-xl font-bold text-navy dark:text-white mb-4">
            Experience
          </h3>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div
                key={exp.company}
                className="border-l-2 border-accent pl-5 relative"
              >
                <p className="font-bold text-base text-slate-900 dark:text-white">
                  {exp.role} · <span className="text-accent">{exp.company}</span>
                </p>
                <ul className="mt-2 space-y-1.5 text-slate-600 dark:text-slate-400 text-sm list-disc list-inside">
                  {exp.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row: Education Card & Quick Facts (Top & Bottom borders aligned 100% with Education Card) */}
      <div className="grid md:grid-cols-2 gap-10 items-stretch mt-6">
        {/* Left: Education Card */}
        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/70 dark:border-white/10 flex flex-col justify-between shadow-xs">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center text-xl shrink-0">
              🎓
            </div>
            <div>
              <h4 className="font-bold text-navy dark:text-white text-base">
                {education.degree}
              </h4>
              <p className="text-sm font-semibold text-accent mt-0.5">
                {education.field}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 font-medium">
                {education.college}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-300 mt-4 font-semibold">
            <span className="px-3 py-1 rounded-full bg-slate-200/70 dark:bg-white/10">
              {education.cgpa}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-200/70 dark:bg-white/10">
              {education.graduated}
            </span>
          </div>
        </div>

        {/* Right: Quick Facts cards (Top 3 cards match top border, Bottom 3 cards match bottom border) */}
        <div className="flex flex-col justify-between py-0.5">
          {/* Top 3 cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {atAGlance.slice(0, 3).map((fact) => (
              <div
                key={fact.text}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 shadow-xs"
              >
                <span className="text-base">{fact.icon}</span>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                  {fact.text}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom 3 cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {atAGlance.slice(3, 6).map((fact) => (
              <div
                key={fact.text}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 shadow-xs"
              >
                <span className="text-base">{fact.icon}</span>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                  {fact.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
