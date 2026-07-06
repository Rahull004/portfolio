import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, profile } from "@/data/content";
import { Thumb } from "@/components/ui/Thumb";
import { Reveal } from "@/components/ui/Reveal";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: `Project — ${profile.name}` };
  return {
    title: `${project.title} — ${profile.name}`,
    description: project.summary,
  };
}

export default async function CaseStudy({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-4xl px-5 pt-36 md:px-10">
      <Link
        href="/projects"
        className="link-underline mb-10 inline-block font-mono text-xs uppercase tracking-wider text-muted"
      >
        ← All projects
      </Link>

      <p className="eyebrow mb-3">
        {project.type} · {project.year}
      </p>
      <h1 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
        {project.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        {project.summary}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.code && (
          <a
            href={project.code}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink"
          >
            View Code ↗
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-6 py-3 text-sm hover:border-accent hover:text-accent"
          >
            Live ↗
          </a>
        )}
      </div>

      <Thumb
        accent={project.accent}
        label={project.title}
        className="mt-10 aspect-[16/9] max-h-[22rem] w-full"
      />

      <div className="mt-16 grid gap-12 md:grid-cols-[1fr_16rem]">
        <div className="flex flex-col gap-10">
          <Reveal>
            <h2 className="eyebrow mb-3">Overview</h2>
            <p className="text-lg leading-relaxed text-muted">{project.overview}</p>
          </Reveal>

          <Reveal>
            <h2 className="eyebrow mb-3">What I built</h2>
            <ul className="flex flex-col gap-3">
              {project.built.map((b, i) => (
                <li key={i} className="flex gap-3 leading-relaxed text-muted">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <aside className="flex flex-col gap-8">
          <div>
            <h2 className="eyebrow mb-3">Role</h2>
            <p className="text-sm text-foreground">{project.role}</p>
          </div>
          <div>
            <h2 className="eyebrow mb-3">Stack</h2>
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="eyebrow mb-3">Outcomes</h2>
            <ul className="flex flex-col gap-2">
              {project.outcomes.map((o) => (
                <li key={o} className="text-sm text-foreground">
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <div className="mt-24 border-t border-line pt-8">
        <Link
          href="/contact"
          className="link-underline font-display text-2xl font-semibold md:text-4xl"
        >
          Like what you see? Let&apos;s talk →
        </Link>
      </div>
    </article>
  );
}
