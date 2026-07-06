"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle({ variant = "button" }: { variant?: "button" | "inline" }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";
  const glyph = mounted ? (isDark ? "☾" : "☀") : "·";

  // Inline text style — "THEME (☾)" — matches the reference sitemap.
  if (variant === "inline") {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="link-underline uppercase text-muted transition-colors hover:text-accent"
      >
        Theme ({glyph})
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="grid h-9 w-9 place-items-center rounded-full border border-line text-foreground transition-colors hover:border-accent hover:text-accent"
    >
      {/* avoid hydration mismatch: render a neutral glyph until mounted */}
      <span className="font-mono text-xs">{glyph}</span>
    </button>
  );
}
