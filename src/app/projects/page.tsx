import type { Metadata } from "next";
import { skillBuilding, profile } from "@/data/content";
import { SelectedWork } from "@/components/sections/SelectedWork";

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
  description: "Selected engineering projects and case studies.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      {/* Featured — draggable cards + glowing heading */}
      <SelectedWork />

      {/* Skill-building */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10">
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              Skill-Building Projects
            </h2>
          </div>
          <div>
            <p className="max-w-md leading-relaxed text-muted">
              Smaller projects built while learning — combining coursework,
              guided development, and real-world practice.
            </p>
            <a
              href="https://github.com/Rahull004"
              target="_blank"
              rel="noreferrer"
              className="link-underline mt-4 inline-block font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent"
            >
              View all on GitHub ↗
            </a>
          </div>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-line text-left font-mono text-xs uppercase tracking-wider text-faint">
              <th className="py-3 font-normal">Name</th>
              <th className="py-3 font-normal">Type</th>
              <th className="py-3 text-right font-normal">Date</th>
            </tr>
          </thead>
          <tbody>
            {skillBuilding.map((s) => (
              <tr key={s.name} className="group border-b border-line">
                <td className="py-4">
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline font-display text-lg font-medium transition-colors group-hover:text-accent"
                  >
                    {s.name} ↗
                  </a>
                </td>
                <td className="py-4 font-mono text-xs text-muted">{s.type}</td>
                <td className="py-4 text-right font-mono text-xs text-muted">{s.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
