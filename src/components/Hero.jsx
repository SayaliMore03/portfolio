import { profile } from "../data/portfolioData";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-20 min-h-[calc(100vh-5rem)] max-w-6xl mx-auto px-6 py-8 flex items-center justify-center"
    >
      <div className="w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section - Text & Social Links */}
        <div className="w-full text-left">
          <p className="text-xl md:text-2xl font-semibold mb-2 text-slate-700 dark:text-slate-300">
            Hello ,
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            <span>I'm</span>{" "}
            <span className="text-[#f09b11] font-bold">
              {profile.name}
            </span>
          </h1>

          {/* Typing effect */}
          <div className="w-full max-w-[420px] min-h-[48px] flex items-center my-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-100">
              <Typewriter words={profile.roles} />
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-md my-3 leading-relaxed">
            {profile.tagline}
          </p>

          {/* Action buttons */}
          <div className="flex items-center gap-4 mt-6">
            <a
              href={profile.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-2.5 rounded-full border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white bg-white dark:bg-slate-800 font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-xs"
            >
              Resume
            </a>
            <a
              href="#projects"
              className="px-7 py-2.5 rounded-full bg-[#0f2c52] text-white font-medium text-sm hover:bg-[#163864] transition-colors shadow-xs"
            >
              Projects
            </a>
          </div>

          {/* Social Media Links below Resume and Contact buttons */}
          <div className="flex items-center gap-3 mt-6">
            {/* GitHub */}
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs flex items-center justify-center hover:scale-110 hover:border-accent transition-all"
            >
              <svg
                className="w-5 h-5 fill-current text-slate-800 dark:text-white"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.1c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs flex items-center justify-center hover:scale-110 hover:border-accent transition-all"
            >
              <svg className="w-5 h-5 fill-[#0A66C2]" viewBox="0 0 24 24">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs flex items-center justify-center hover:scale-110 hover:border-accent transition-all"
            >
              <svg
                className="w-5 h-5 fill-slate-700 dark:fill-slate-200"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Section - Profile Image Card */}
        <div className="flex justify-center md:justify-end items-center">
          <div className="relative group">
            {/* Glowing Accent Aura */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-amber-500/30 via-amber-400/20 to-blue-600/30 blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

            {/* Main Image Frame */}
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border-2 border-amber-500/30 dark:border-amber-500/40 bg-slate-100 dark:bg-slate-900 shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]">
              <img
                src={profile.image || "/profile.jpg"}
                alt={profile.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Status Badge */}
            <div className="absolute -bottom-4 -left-3 bg-white dark:bg-[#0f1f38] px-3.5 py-2 rounded-xl border border-slate-200/80 dark:border-white/10 shadow-lg flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                Available for Full-Time Roles
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
