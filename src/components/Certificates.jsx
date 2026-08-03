import { certificates } from "../data/portfolioData";

export default function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-20 max-w-6xl mx-auto px-6 py-16 min-h-[calc(100vh-5rem)] flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-8">
        <span className="text-accent">Certificates</span>
      </h2>

      <div className="grid sm:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.name}
            className="rounded-xl border border-slate-200 dark:border-white/10 p-6 hover:border-accent transition-colors"
          >
            <p className="font-semibold text-navy dark:text-white">
              {cert.name}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {cert.issuer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
