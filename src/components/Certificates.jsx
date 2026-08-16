import { certificates } from "../data/portfolioData";

function CertificateIcon({ issuerType }) {
  if (issuerType === "Oracle") {
    return (
      <div className="w-11 h-11 rounded-xl bg-red-500/10 dark:bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0">
        <svg className="w-6 h-6 text-red-600 dark:text-red-400 fill-current" viewBox="0 0 24 24">
          <path d="M16.082 2.115c-1.745 0-3.376.678-4.607 1.91-1.23-1.232-2.862-1.91-4.607-1.91C3.076 2.115 0 5.19 0 8.96c0 3.77 3.076 6.846 6.868 6.846 1.745 0 3.376-.678 4.607-1.91 1.231 1.232 2.862 1.91 4.607 1.91C19.924 15.806 23 12.73 23 8.96c0-3.77-3.076-6.845-6.918-6.845zm-9.214 10.98c-2.316 0-4.197-1.881-4.197-4.135 0-2.254 1.881-4.135 4.197-4.135 2.316 0 4.197 1.881 4.197 4.135 0 2.254-1.881 4.135-4.197 4.135zm9.214 0c-2.316 0-4.197-1.881-4.197-4.135 0-2.254 1.881-4.135 4.197-4.135 2.316 0 4.197 1.881 4.197 4.135 0 2.254-1.881 4.135-4.197 4.135z" />
        </svg>
      </div>
    );
  }

  if (issuerType === "Microsoft") {
    return (
      <div className="w-11 h-11 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
        <svg className="w-6 h-6" viewBox="0 0 23 23" fill="none">
          <rect x="1" y="1" width="10" height="10" fill="#F25022" />
          <rect x="12" y="1" width="10" height="10" fill="#7FBA00" />
          <rect x="1" y="12" width="10" height="10" fill="#00A4EF" />
          <rect x="12" y="12" width="10" height="10" fill="#FFB900" />
        </svg>
      </div>
    );
  }

  return (
    <div className="w-11 h-11 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
      <svg className="w-6 h-6 text-purple-600 dark:text-purple-400 fill-current" viewBox="0 0 24 24">
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm-7 7.82v4.9L12 20l7-4.28v-4.9L12 15.1l-7-4.28z" />
      </svg>
    </div>
  );
}

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="scroll-mt-20 min-h-[calc(100vh-5rem)] max-w-6xl mx-auto px-6 pt-6 pb-12 flex flex-col justify-start"
    >
      <div className="mb-8">
        <h2 className="text-[#f09b11] text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-2">
          CERTIFICATIONS & CREDENTIALS
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
          Verified professional certifications in Artificial Intelligence, Business Intelligence, and Data Science.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id || cert.name}
            className="bg-white dark:bg-[#0f1f38] rounded-2xl border border-slate-200/80 dark:border-white/10 p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all duration-300 group"
          >
            <div>
              {/* Header with Issuer Icon & Badges */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <CertificateIcon issuerType={cert.issuerType} />
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/10">
                    {cert.issueDate}
                  </span>
                  {cert.validity && (
                    <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                      {cert.validity}
                    </span>
                  )}
                  {cert.coursesCount && (
                    <span className="text-[10px] font-medium text-blue-600 dark:text-blue-400">
                      {cert.coursesCount}
                    </span>
                  )}
                  {cert.duration && (
                    <span className="text-[10px] font-medium text-purple-600 dark:text-purple-400">
                      {cert.duration}
                    </span>
                  )}
                </div>
              </div>

              {/* Certificate Title */}
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {cert.name}
              </h3>

              {/* Issuer Name */}
              <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-3">
                {cert.issuer}
              </p>

              {/* Description */}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {cert.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-[11px] font-medium border border-slate-200/50 dark:border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer with Credential ID & Verify Link */}
            <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between gap-2">
              <div className="overflow-hidden">
                <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  Credential ID
                </p>
                <p className="text-[11px] font-mono text-slate-700 dark:text-slate-300 font-semibold truncate" title={cert.credentialId}>
                  {cert.credentialId}
                </p>
              </div>

              {cert.verifyUrl ? (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 shrink-0 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20 transition-colors"
                >
                  <span>Verify</span>
                  <svg className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 shrink-0 px-2 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Verified</span>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

