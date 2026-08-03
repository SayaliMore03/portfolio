import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-slate-50 dark:bg-white/5 pt-6 pb-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">
          My <span className="text-accent">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-[#0a1626] rounded-xl p-6 shadow-sm flex flex-col"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-lg text-navy dark:text-white">
                  {project.title}
                </h3>
                {project.metric && (
                  <span className="shrink-0 text-xs font-semibold px-2 py-1 rounded-full bg-accent/10 text-accent-dark dark:text-accent">
                    {project.metric}
                  </span>
                )}
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-5 text-sm font-medium">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Live Demo →
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy dark:text-slate-300 hover:underline"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
