"use client";

import Link from "next/link";
import { nav, profile } from "@/data/content";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

// Desktop-only technical top strip, styled after the reference site's
// "Availability / Sitemap" blueprint header. Mobile uses <Nav /> instead.
export function TechBar() {
  return (
    <header className="hatch fixed inset-x-0 top-0 z-50 hidden border-b border-line bg-background/80 backdrop-blur-md md:block">
      <div className="grid w-full grid-cols-2 items-start px-6 py-5 md:px-10">
        {/* Availability */}
        <div className="flex flex-col gap-1">
          <span className="text-[0.8rem] tracking-[0.08em] text-faint">Availability</span>
          <span className="label flex items-center text-[0.85rem] text-muted">
            <span className="mr-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {profile.availabilityShort}
          </span>
        </div>

        {/* Sitemap */}
        <div className="flex flex-col items-end gap-1">
          <span className="text-[0.8rem] tracking-[0.08em] text-faint">Sitemap</span>
          <nav className="label flex items-center text-[0.85rem]">
            {nav.map((item, i) => (
              <span key={item.href} className="flex items-center">
                {i === 0 && (
                  <span className="mr-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                )}
                <Link
                  href={item.href}
                  className="link-underline text-muted transition-colors hover:text-accent"
                >
                  {item.label === "Home" ? "Index" : item.label}
                </Link>
                <span className="mr-1.5 text-faint">,</span>
                {i === nav.length - 1 && <ThemeToggle variant="inline" />}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
