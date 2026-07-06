"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import { projects, projectYearRange } from "@/data/content";
import { Thumb } from "@/components/ui/Thumb";

export function SelectedWork() {
  const track = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-4 flex items-center justify-between">
          <p className="eyebrow">Selected Work</p>
          <p className="font-mono text-xs text-faint">↔ Drag the cards</p>
        </div>
      </div>

      {/* Draggable horizontal card strip — aligned to the max-w-7xl frame */}
      <div ref={track} className="mx-auto max-w-7xl overflow-hidden px-5 md:px-10">
        <motion.div
          drag="x"
          dragConstraints={track}
          dragElastic={0.08}
          className="flex w-max cursor-grab gap-6 pb-2 active:cursor-grabbing"
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              whileHover={{ y: -6 }}
              className="flex w-[300px] shrink-0 select-none flex-col"
            >
              <Link
                href={`/projects/${p.slug}`}
                className="group flex flex-col"
                draggable={false}
              >
                <Thumb
                  accent={p.accent}
                  label={p.title.split(" ")[0]}
                  className="aspect-[4/3]"
                />
                <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-wider text-faint">
                  {p.type} · {p.year}
                </p>
                <h3 className="mt-1 min-h-[3.5rem] font-display text-xl font-medium leading-snug transition-colors group-hover:text-accent">
                  {String(i + 1).padStart(2, "0")}. {p.title}
                </h3>
                <span className="link-underline inline-block self-start font-mono text-[0.7rem] uppercase tracking-wider text-muted">
                  View Case ↗
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Giant glowing heading */}
      <div className="mx-auto mt-16 max-w-7xl px-5 md:px-10">
        <h2 className="glow font-display text-[13vw] font-medium leading-[0.95] tracking-tight md:text-[8rem]">
          Selected projects
        </h2>
        <p className="glow mt-2 text-right font-display text-4xl italic md:text-6xl">
          ({projectYearRange})
        </p>
      </div>
    </section>
  );
}
