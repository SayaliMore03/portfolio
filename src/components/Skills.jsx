import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-slate-50 dark:bg-white/5 py-16 min-h-[calc(100vh-5rem)] flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">
          My <span className="text-accent">Skills</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white dark:bg-[#0a1626] rounded-xl p-6 shadow-sm"
            >
              <h3 className="font-semibold text-navy dark:text-white mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent-dark dark:text-accent font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
