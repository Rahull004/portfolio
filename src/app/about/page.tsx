import type { Metadata } from "next";
import { about, aboutLead, experience, profile } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { Skills } from "@/components/sections/Skills";

export const metadata: Metadata = {
  title: `About — ${profile.name}`,
  description: about.intro[0],
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-36 md:px-10">
      <h2 className="mb-6 font-display text-3xl italic md:text-4xl">About Me</h2>
      <h1 className="max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
        {aboutLead.map((seg, i) => (
          <span key={i} className={seg.hl ? "hl" : undefined}>
            {seg.t}
          </span>
        ))}
      </h1>
      <p className="mt-8 max-w-2xl leading-relaxed text-muted">
        {about.intro[1]}
      </p>

      {/* What I use */}
      <Skills className="mt-24" />

      {/* Experience */}
      <section className="mt-24">
        <h2 className="eyebrow mb-8">Experience</h2>
        <div className="flex flex-col">
          {experience.map((job) => (
            <Reveal key={job.company}>
              <div className="grid grid-cols-1 gap-4 border-t border-line py-8 md:grid-cols-[14rem_1fr]">
                <div>
                  <h3 className="font-display text-xl font-semibold">{job.company}</h3>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {job.role}
                    {job.team ? ` · ${job.team}` : ""}
                  </p>
                  <p className="mt-1 font-mono text-xs text-faint">{job.period}</p>
                </div>
                <div>
                  <ul className="flex flex-col gap-2.5">
                    {job.points.map((p, i) => (
                      <li key={i} className="flex gap-3 leading-relaxed text-muted">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {job.stack.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-24">
        <h2 className="eyebrow mb-8">Education</h2>
        {about.education.map((e) => (
          <div
            key={e.school}
            className="grid grid-cols-1 gap-2 border-t border-line py-8 md:grid-cols-[14rem_1fr]"
          >
            <p className="font-mono text-xs text-faint">{e.period}</p>
            <div>
              <h3 className="font-display text-xl font-semibold">{e.school}</h3>
              <p className="mt-1 text-muted">{e.degree}</p>
              <p className="mt-1 font-mono text-xs text-accent">{e.detail}</p>
              {e.description && (
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">{e.description}</p>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
