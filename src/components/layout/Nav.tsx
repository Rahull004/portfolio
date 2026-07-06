"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile, nav, socials } from "@/data/content";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar — desktop uses <TechBar /> instead. */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/70 backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/" className="font-display text-lg font-bold tracking-tight">
            {profile.monogram}
            <span className="text-accent">.</span>
          </Link>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="rounded-full border border-line px-4 py-2 font-mono text-xs uppercase"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-background"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 md:px-10">
              <span className="font-display text-lg font-bold">{profile.monogram}.</span>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-wider hover:border-accent hover:text-accent"
              >
                Close
              </button>
            </div>

            <nav className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center gap-2 px-5 md:px-10">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 py-2"
                  >
                    <span className="font-mono text-xs text-faint">0{i + 1}</span>
                    <span className="font-display text-5xl font-semibold tracking-tight transition-colors group-hover:text-accent md:text-8xl">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mx-auto flex w-full max-w-7xl flex-wrap gap-x-6 gap-y-2 px-5 py-8 md:px-10">
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
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="link-underline font-mono text-xs uppercase tracking-wider text-muted"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
