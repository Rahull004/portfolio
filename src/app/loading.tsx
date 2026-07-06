import { profile } from "@/data/content";

// Shown during route loading (App Router streaming). Keeps the brand
// present for a beat instead of a blank flash.
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-background">
      <span className="font-display text-2xl font-bold tracking-tight">
        {profile.monogram}
        <span className="animate-pulse text-accent">.</span>
      </span>
    </div>
  );
}
