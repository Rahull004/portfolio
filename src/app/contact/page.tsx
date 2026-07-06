import type { Metadata } from "next";
import { profile } from "@/data/content";
import { MadLibsForm } from "@/components/sections/MadLibsForm";

export const metadata: Metadata = {
  title: `Contact — ${profile.name}`,
  description: "Get in touch.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 pt-36 md:px-10">
      <p className="eyebrow mb-10">Contact</p>

      <MadLibsForm />

      <div className="mt-24 border-t border-line pt-10">
        <p className="mb-6 font-mono text-xs text-faint">
          ↓ Prefer to skip the form? Reach me directly.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="eyebrow mb-2">Status</p>
            <p className="flex items-center gap-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Available
            </p>
          </div>
          <div>
            <p className="eyebrow mb-2">Email</p>
            <a href={`mailto:${profile.email}`} className="link-underline text-sm">
              {profile.email}
            </a>
          </div>
          <div>
            <p className="eyebrow mb-2">Location</p>
            <p className="text-sm">{profile.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
