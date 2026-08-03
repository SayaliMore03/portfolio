import { profile } from "../data/portfolioData";

export default function Connect() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-slate-100 dark:bg-white/5 py-10 text-center"
    >
      <div className="flex items-center justify-center gap-4 flex-wrap px-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Connect with me
        </h2>
        <div className="flex items-center gap-3">
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full bg-white dark:bg-[#0a1626] shadow flex items-center justify-center hover:scale-110 transition-transform"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#0A66C2]">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-full bg-white dark:bg-[#0a1626] shadow flex items-center justify-center hover:scale-110 transition-transform"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current text-navy dark:text-white"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.1c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
