"use client";

import { usePathname } from "next/navigation";
import { profile, socials } from "@/data/content";

export function Footer() {
  const pathname = usePathname();
  const backToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  // Landing page stays minimal — no footer (matches the reference).
  if (pathname === "/") return null;

  return (
    <footer className="mt-32 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <p className="eyebrow mb-3">Let&apos;s connect</p>
            <a
              href={`mailto:${profile.email}`}
              className="link-underline font-display text-2xl font-semibold md:text-4xl"
            >
              {profile.email}
            </a>
            <p className="mt-4 flex items-center gap-2 font-mono text-xs text-muted">
              <span className="h-2 w-2 rounded-full bg-accent" />
              {profile.availability}
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline font-mono text-xs uppercase tracking-wider text-muted"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <button
              onClick={backToTop}
              className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-accent"
            >
              ↑ Back to top
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-line pt-6 font-mono text-[0.7rem] text-faint md:flex-row">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span> {`Let's connect and build something amazing together!`}</span>
        </div>
      </div>
    </footer>
  );
}
