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
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-slate-700 dark:text-slate-300">
            Hello ,
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold whitespace-nowrap text-gray-800 dark:text-white">
            <span>I'm</span>{" "}
            <span className="text-[#f09b11] font-bold">
              {profile.name}
            </span>
          </h1>

          {/* Typing effect */}
          <div className="w-[320px] sm:w-[420px] h-[48px] flex items-center my-2">
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
              href="#contact"
              className="px-7 py-2.5 rounded-full bg-[#0f2c52] text-white font-medium text-sm hover:bg-[#163864] transition-colors shadow-xs"
            >
              Contact
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

            {/* Credly */}
            <a
              href={profile.socials.credly}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Credly"
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs flex items-center justify-center hover:scale-110 hover:border-accent transition-all"
            >
              <svg className="w-5 h-5 fill-[#FF6B00]" viewBox="0 0 24 24">
                <path d="M12 0L2.4 5.5v11L12 22l9.6-5.5v-11L12 0zm6.6 15.3L12 19.1l-6.6-3.8V8.7L12 4.9l6.6 3.8v6.6zM12 7.2L8.2 9.4v4.4l3.8 2.2 3.8-2.2V9.4L12 7.2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Section - Image Placeholder Space */}
        <div className="flex justify-center md:justify-end items-center">
          <div className="w-56 h-72 md:w-64 md:h-88 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-white/5 flex flex-col items-center justify-center p-6 text-center text-slate-400">
            <svg
              className="w-10 h-10 mb-2 opacity-60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-xs font-medium tracking-wide">
              Photo Space
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
