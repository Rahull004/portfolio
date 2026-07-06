import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-5 text-center">
      <p className="font-display text-[22vw] font-bold leading-none tracking-tight md:text-[14rem]">
        404
      </p>
      <p className="mt-4 text-muted">This page wandered off.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-accent px-7 py-3.5 font-medium text-accent-ink"
      >
        Back home
      </Link>
    </div>
  );
}
