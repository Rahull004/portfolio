"use client";

import Link from "next/link";
import type { IconType } from "react-icons";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { profile, socials, heroTagline } from "@/data/content";

const SOCIAL_ICONS: Record<string, IconType> = {
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
  LeetCode: SiLeetcode,
};

// Thin structural rule — the reference frames every cell with lines like this.
function Line({ className }: { className: string }) {
  return <span aria-hidden className={`pointer-events-none absolute bg-line ${className}`} />;
}

function Social({ label, className = "" }: { label: string; className?: string }) {
  const s = socials.find((x) => x.label === label);
  const Icon = SOCIAL_ICONS[label];
  if (!s || !Icon) return null;
  return (
    <a
      href={s.href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`hatch group flex items-center justify-center py-6 text-muted transition-colors hover:text-accent ${className}`}
    >
      <Icon className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-[1.35rem] sm:w-[1.35rem]" />
    </a>
  );
}

// Landing hero — a faithful reproduction of the wadi3.codes blueprint grid:
// a 10-column layout (empty · name · title · social+bio · resume) with guide
// lines at the 20% / 80% columns framing the name.
export function Hero() {
  return (
    <section className="w-full pt-20">
      <main
        className="relative grid min-h-[calc(100dvh-5rem)] w-full px-6 md:px-10"
        style={{
          gridTemplateColumns: "repeat(10, minmax(0, 1fr))",
          gridTemplateRows: "56px auto minmax(auto, 60px) auto auto auto 60px 52px",
          gridTemplateAreas: `
            "e e e e e e e e e e"
            "n n n n n n n n n n"
            "t t t t t t t t t t"
            "s s b b b b b b b b"
            "s s b b b b b b b b"
            "s s b b b b b b b b"
            "r r r r r r r r r r"
            "f f f f f f f f f f"
          `,
        }}
      >
        {/* EMPTY — top strip: both vertical guide lines + a bottom rule */}
        <div className="relative" style={{ gridArea: "e" }}>
          <Line className="inset-y-0 left-[20%] hidden w-px md:block" />
          <Line className="inset-y-0 left-[80%] hidden w-px md:block" />
          <Line className="inset-x-0 bottom-0 h-px" />
        </div>

        {/* NAME — the 20% guide line breaks here (reference does the same, so it
            never slices the name); only the right guide frames it */}
        <div className="relative flex items-center" style={{ gridArea: "n" }}>
          <Line className="inset-y-0 left-[80%] hidden w-px md:block" />
          <Line className="inset-x-0 bottom-0 h-px" />
          <div className="overflow-hidden py-6 pl-2 md:pl-8">
            <motion.h1
              className="font-display whitespace-nowrap text-[clamp(2.6rem,8.5vw,6rem)] font-normal leading-[1.05]"
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {profile.name}
            </motion.h1>
          </div>
        </div>

        {/* TITLE / ROLE — sits between the guide lines, uppercase & light */}
        <div className="relative" style={{ gridArea: "t" }}>
          <Line className="inset-y-0 left-[20%] hidden w-px md:block" />
          <Line className="inset-x-0 bottom-0 h-px" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex h-full items-center justify-between gap-6 py-4 text-base font-light uppercase tracking-wide text-muted md:pl-[calc(20%+1.5rem)] md:pr-[20%] md:text-lg"
          >
            <span className="truncate">{profile.role}</span>
            <Link
              href="/projects"
              className="link-underline flex shrink-0 items-center gap-1 whitespace-nowrap text-foreground transition-colors hover:text-accent"
            >
              See My Work ↗
            </Link>
          </motion.div>
        </div>

        {/* SOCIAL — narrow left column (cols 1–2); its right edge continues the
            20% guide line down the page */}
        <div className="relative border-r border-line" style={{ gridArea: "s" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex h-full flex-col justify-end"
          >
            <div className="grid grid-cols-2 border-t border-line">
              <Social label="LinkedIn" className="border-r border-line" />
              <Social label="GitHub" />
              <div className="border-r border-t border-line" />
              <Social label="LeetCode" className="border-t border-line" />
            </div>
          </motion.div>
        </div>

        {/* BIO — the highlighted tagline, indented past the guide line */}
        <div className="relative" style={{ gridArea: "b" }}>
          <Line className="inset-x-0 bottom-0 h-px" />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="flex h-full items-center"
          >
            <p className="max-w-4xl py-8 pl-6 text-xl leading-relaxed text-muted md:pl-12 md:text-2xl lg:text-3xl">
              {heroTagline.map((seg, i) => (
                <span key={i} className={seg.hl ? "hl font-normal" : undefined}>
                  {seg.t}
                </span>
              ))}
            </p>
          </motion.div>
        </div>

        {/* RESUME — aligned to the bio column (20%), uppercase & light */}
        <div className="relative flex items-center" style={{ gridArea: "r" }}>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="link-underline text-sm font-light uppercase tracking-wide text-muted transition-colors hover:text-accent md:pl-[calc(20%+1.5rem)] md:text-lg"
          >
            Resume / CV
          </a>
        </div>

        {/* FOOTER — bottom diagonal hatch strip */}
        <div
          className="hatch border-t border-line"
          style={{ gridArea: "f" }}
        />
      </main>
    </section>
  );
}
