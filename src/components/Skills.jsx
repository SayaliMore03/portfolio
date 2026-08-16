const skillIcons = {
  Python: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 256 255">
      <path fill="#3776AB" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.07 29.072h61.733v8.742H43.061S0 60.785 0 126.027c0 65.241 37.525 62.868 37.525 62.868h22.428v-31.547s-1.258-37.531 37.531-37.531h61.733s35.34.618 35.34-34.717V33.432s4.95-33.36-67.641-33.36zm-34.73 19.34a10.088 10.088 0 1 1 0 20.177 10.088 10.088 0 0 1 0-20.177z" />
      <path fill="#FFD43B" d="M129.084 254.928c64.832 0 60.784-28.115 60.784-28.115l-.07-29.072h-61.733v-8.742h84.874s43.061 5.214 43.061-60.028c0-65.241-37.525-62.868-37.525-62.868h-22.428v31.547s1.258 37.531-37.531 37.531H76.783s-35.34-.618-35.34 34.717v53.111s-4.95 33.36 67.641 33.36zm34.73-19.34a10.088 10.088 0 1 1 0-20.177 10.088 10.088 0 0 1 0 20.177z" />
    </svg>
  ),
  SQL: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 64 64">
      <path fill="#00758F" d="M32 4C18.7 4 8 8.5 8 14v36c0 5.5 10.7 10 24 10s24-4.5 24-10V14c0-5.5-10.7-10-24-10z" />
      <path fill="#00A8CC" d="M32 8c11.6 0 20 3.6 20 6s-8.4 6-20 6-20-3.6-20-6 8.4-6 20-6z" />
      <text x="32" y="38" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="bold" fontFamily="sans-serif">SQL</text>
    </svg>
  ),
  Pandas: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 64 64">
      <rect x="4" y="4" width="56" height="56" rx="12" fill="#150458" />
      <rect x="18" y="16" width="6" height="32" fill="#E70488" rx="2" />
      <rect x="29" y="16" width="6" height="32" fill="#FFD43B" rx="2" />
      <rect x="40" y="16" width="6" height="32" fill="#3776AB" rx="2" />
    </svg>
  ),
  NumPy: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 64 64">
      <rect x="4" y="4" width="56" height="56" rx="12" fill="#013243" />
      <text x="32" y="41" textAnchor="middle" fill="#4DABCF" fontSize="18" fontWeight="bold" fontFamily="sans-serif">NP</text>
    </svg>
  ),
  EDA: (
    <svg className="w-5 h-5 shrink-0 text-emerald-500 fill-current" viewBox="0 0 24 24">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-4-4 1.41-1.41L12 14.17l5.59-5.59L19 10l-7 7z" />
    </svg>
  ),
  Statistics: (
    <svg className="w-5 h-5 shrink-0 text-purple-500 fill-current" viewBox="0 0 24 24">
      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
    </svg>
  ),
  "Machine Learning": (
    <svg className="w-5 h-5 shrink-0 text-indigo-500 fill-current" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5h-2v-2h2v2zm0-4h-2v-6h2v6z" />
    </svg>
  ),
  "Power BI": (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 64 64">
      <rect x="4" y="4" width="56" height="56" rx="12" fill="#F2C811" />
      <rect x="16" y="30" width="8" height="18" rx="2" fill="#000000" />
      <rect x="28" y="22" width="8" height="26" rx="2" fill="#000000" />
      <rect x="40" y="14" width="8" height="34" rx="2" fill="#000000" />
    </svg>
  ),
  "MS Excel": (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 64 64">
      <rect x="4" y="4" width="56" height="56" rx="12" fill="#107C41" />
      <path fill="#FFFFFF" d="M22 18h8l6 11 6-11h8l-10 16 10 16h-8l-6-11-6 11h-8l10-16z" />
    </svg>
  ),
  "Power Query": (
    <svg className="w-5 h-5 shrink-0 text-emerald-600 fill-current" viewBox="0 0 24 24">
      <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
    </svg>
  ),
  DAX: (
    <svg className="w-5 h-5 shrink-0 text-amber-600 fill-current" viewBox="0 0 24 24">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
    </svg>
  ),
  MySQL: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 64 64">
      <rect x="4" y="4" width="56" height="56" rx="12" fill="#00618A" />
      <path fill="#F29111" d="M44 26c-1.5 0-3 .5-4.2 1.5C38 25.5 35.5 24 32 24c-5.5 0-9.5 4-9.5 9.5S26.5 43 32 43c3.5 0 6-1.5 7.8-3.5 1.2 1 2.7 1.5 4.2 1.5 4.4 0 8-3.6 8-8s-3.6-7-8-7z" />
      <text x="32" y="50" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">MySQL</text>
    </svg>
  ),
  "Jupyter Notebook": (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 64 64">
      <rect x="4" y="4" width="56" height="56" rx="12" fill="#F37626" />
      <circle cx="32" cy="20" r="4" fill="#FFFFFF" />
      <circle cx="20" cy="44" r="4" fill="#FFFFFF" />
      <circle cx="44" cy="44" r="4" fill="#FFFFFF" />
    </svg>
  ),
  "Git & GitHub": (
    <svg className="w-5 h-5 shrink-0 fill-current text-slate-800 dark:text-white" viewBox="0 0 24 24">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.1c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  ),
  "Scikit-learn": (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 64 64">
      <rect x="4" y="4" width="56" height="56" rx="12" fill="#F7931E" />
      <path fill="#3499CD" d="M32 16L18 42h28L32 16z" />
      <circle cx="32" cy="24" r="5" fill="#FFFFFF" />
    </svg>
  ),
  SHAP: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 64 64">
      <rect x="4" y="4" width="56" height="56" rx="12" fill="#8E44AD" />
      <text x="32" y="40" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="sans-serif">SHAP</text>
    </svg>
  ),
  Streamlit: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 64 64">
      <rect x="4" y="4" width="56" height="56" rx="12" fill="#FF4B4B" />
      <path fill="#FFFFFF" d="M16 44L32 20l16 24H16z" />
    </svg>
  ),
  "Data Cleaning & Transformation": (
    <svg className="w-5 h-5 shrink-0 text-cyan-500 fill-current" viewBox="0 0 24 24">
      <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
    </svg>
  ),
  "KPI Dashboards": (
    <svg className="w-5 h-5 shrink-0 text-amber-500 fill-current" viewBox="0 0 24 24">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-4-4 1.41-1.41L12 14.17l5.59-5.59L19 10l-7 7z" />
    </svg>
  ),
  "Data Modelling": (
    <svg className="w-5 h-5 shrink-0 text-indigo-500 fill-current" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5h-2v-2h2v2zm0-4h-2v-6h2v6z" />
    </svg>
  ),
  "Predictive Analytics": (
    <svg className="w-5 h-5 shrink-0 text-emerald-500 fill-current" viewBox="0 0 24 24">
      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
    </svg>
  ),
  "Window Functions": (
    <svg className="w-5 h-5 shrink-0 text-blue-500 fill-current" viewBox="0 0 24 24">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H5v-5h7v5zm0-7H5V5h7v5zm7 7h-5v-5h5v5zm0-7h-5V5h5v5z" />
    </svg>
  ),
  CTEs: (
    <svg className="w-5 h-5 shrink-0 text-indigo-500 fill-current" viewBox="0 0 24 24">
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
    </svg>
  ),
  "Stored Procedures": (
    <svg className="w-5 h-5 shrink-0 text-teal-500 fill-current" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  ),
  HTML: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 64 64">
      <path fill="#E34F26" d="M8 4l4.5 50.5L32 60l19.5-5.5L56 4H8z" />
      <path fill="#EF652A" d="M32 8v47.2l15.6-4.4L51.8 8H32z" />
      <path fill="#FFFFFF" d="M32 23.5H20.6l-.8-9H32V8H11l2.4 27H32v-5.5zm0 15.6h-7.8l-.5-6H18.1l1 11.8L32 50.4v-5.8s0-5.5 0-5.5z" />
    </svg>
  ),
  CSS: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 64 64">
      <path fill="#1572B6" d="M8 4l4.5 50.5L32 60l19.5-5.5L56 4H8z" />
      <path fill="#33A9DC" d="M32 8v47.2l15.6-4.4L51.8 8H32z" />
      <path fill="#FFFFFF" d="M32 23.5H20.6l-.8-9H43.4l-.4 4.5H32v4.5zm0 15.6h-7.8l-.5-6H18.1l1 11.8L32 50.4v-5.8s0-5.5 0-5.5z" />
    </svg>
  ),
  JavaScript: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 64 64">
      <rect x="4" y="4" width="56" height="56" rx="8" fill="#F7DF1E" />
      <path fill="#000000" d="M26.4 46.5c2.1 1.2 4.4 2.1 6.8 2.1 3.5 0 5.4-1.6 5.4-4.1 0-2.6-2.1-3.7-5.3-5-4.4-1.8-7.5-3.6-7.5-8.5 0-4.7 3.8-8.2 9.5-8.2 3.1 0 5.8.8 7.7 1.9l-1.9 4.8c-1.5-.9-3.4-1.5-5.6-1.5-2.8 0-4.3 1.4-4.3 3.3 0 2.3 2 3.2 5.1 4.5 4.8 2 7.7 3.9 7.7 8.9 0 5.2-4.1 8.8-10.8 8.8-3.4 0-6.6-.9-8.7-2.2l1.9-4.8zm-14.2.3c1.7 1 3.7 1.7 5.8 1.7 3 0 4.8-1.3 4.8-4.4v-21h5.8v21.2c0 6.6-3.8 9.5-10.4 9.5-2.8 0-5.5-.7-7.2-1.7l1.2-5.3z" />
    </svg>
  ),
  React: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 64 64">
      <ellipse cx="32" cy="32" rx="7" ry="7" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="2.5" fill="none">
        <ellipse cx="32" cy="32" rx="24" ry="9" />
        <ellipse cx="32" cy="32" rx="24" ry="9" transform="rotate(60 32 32)" />
        <ellipse cx="32" cy="32" rx="24" ry="9" transform="rotate(120 32 32)" />
      </g>
    </svg>
  ),
};

const coreSkillsList = ["Python", "SQL", "Power BI", "MS Excel"];

export default function Skills() {
  const skillGroups = [
    {
      title: "Programming & Analytics",
      items: ["Python", "SQL", "Pandas", "NumPy", "EDA", "Statistics", "Machine Learning"],
    },
    {
      title: "Data Analytics & BI Tools",
      items: ["Power BI", "MS Excel", "Power Query", "DAX", "MySQL", "Jupyter Notebook", "Git & GitHub"],
    },
    {
      title: "Machine Learning Libraries",
      items: ["Scikit-learn", "SHAP", "Streamlit"],
    },
    {
      title: "Analytical Concepts & Methodologies",
      items: [
        "Data Cleaning & Transformation",
        "KPI Dashboards",
        "Data Modelling",
        "Predictive Analytics",
        "Window Functions",
        "CTEs",
        "Stored Procedures",
      ],
    },
    {
      title: "Additional Technologies",
      items: ["HTML", "CSS", "JavaScript", "React"],
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-20 min-h-[calc(100vh-5rem)] max-w-6xl mx-auto px-6 pt-6 pb-12 flex flex-col justify-start"
    >
      {/* Category Header */}
      <div className="mb-6">
        <h2 className="text-[#f09b11] font-mono tracking-widest text-lg md:text-xl font-bold uppercase">
          SKILLS
        </h2>
      </div>

      <div className="space-y-5">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xs font-mono tracking-widest text-slate-400 dark:text-slate-500 font-semibold mb-2.5 uppercase">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill) => {
                const isCore = coreSkillsList.includes(skill);
                return (
                  <div
                    key={skill}
                    className={`flex items-center gap-2.5 px-4 h-11 rounded-xl text-sm font-semibold transition-all duration-200 ease-out cursor-pointer shadow-2xs ${isCore
                      ? "bg-slate-100/80 dark:bg-white/5 border border-accent/80 dark:border-accent/70 text-slate-900 dark:text-white hover:-translate-y-0.5 hover:border-accent hover:bg-white dark:hover:bg-slate-800 hover:shadow-xs"
                      : "bg-slate-100/80 dark:bg-white/5 border border-slate-200/70 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:-translate-y-0.5 hover:border-accent/70 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xs"
                      }`}
                  >
                    {skillIcons[skill] || (
                      <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center text-xs font-bold shrink-0">
                        ⚡
                      </span>
                    )}
                    <span>{skill}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
