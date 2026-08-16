import { profile } from "../data/portfolioData";

export default function Connect() {
  return (
    <footer
      id="contact"
      className="scroll-mt-20 bg-slate-100 dark:bg-[#0a1626] py-6 border-t border-slate-200/60 dark:border-white/10 text-center"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-3">
        <div className="flex items-center justify-center gap-3.5 flex-wrap">
          <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
            Connect with me:
          </span>
          <div className="flex items-center gap-2.5">
            {/* LinkedIn */}
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-white dark:bg-white/10 border border-slate-200/80 dark:border-white/10 shadow-xs flex items-center justify-center hover:scale-110 hover:border-amber-500 transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#0A66C2]">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-full bg-white dark:bg-white/10 border border-slate-200/80 dark:border-white/10 shadow-xs flex items-center justify-center hover:scale-110 hover:border-amber-500 transition-all"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current text-slate-800 dark:text-white"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.1c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="w-8 h-8 rounded-full bg-white dark:bg-white/10 border border-slate-200/80 dark:border-white/10 shadow-xs flex items-center justify-center hover:scale-110 hover:border-amber-500 transition-all"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current text-slate-700 dark:text-slate-200"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright notice */}
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium pt-1">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
