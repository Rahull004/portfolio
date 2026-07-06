"use client";

import type { IconType } from "react-icons";
import { motion } from "framer-motion";
import {
  SiGo, SiCplusplus, SiPython, SiTypescript, SiJavascript, SiNodedotjs,
  SiExpress, SiGraphql, SiSocketdotio, SiApachekafka, SiPostgresql, SiMongodb,
  SiMysql, SiRedis, SiDocker, SiKubernetes, SiNginx, SiGithubactions,
  SiGooglecloud, SiGnubash, SiGit, SiLinux, SiOpentelemetry, SiPrometheus,
  SiGrafana, SiSentry, SiReact, SiNextdotjs, SiRedux, SiTailwindcss,
  SiElectron, SiPostman, SiAppwrite, SiOwasp,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { TbApi, TbWebhook, TbPlugConnected, TbSearch } from "react-icons/tb";
import { skills } from "@/data/content";

// Brand icon for each skill name.
const ICONS: Record<string, IconType> = {
  Go: SiGo,
  "C/C++": SiCplusplus,
  Python: SiPython,
  Java: FaJava,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  gRPC: TbApi,
  GraphQL: SiGraphql,
  Webhooks: TbWebhook,
  WebSockets: TbPlugConnected,
  "Socket.io": SiSocketdotio,
  Kafka: SiApachekafka,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Redis: SiRedis,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Nginx: SiNginx,
  "GitHub Actions": SiGithubactions,
  GCP: SiGooglecloud,
  Bash: SiGnubash,
  Git: SiGit,
  Linux: SiLinux,
  OpenTelemetry: SiOpentelemetry,
  Prometheus: SiPrometheus,
  Grafana: SiGrafana,
  Sentry: SiSentry,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Redux: SiRedux,
  Tailwind: SiTailwindcss,
  Electron: SiElectron,
  Postman: SiPostman,
  Appwrite: SiAppwrite,
  OWASP: SiOwasp,
  OSINT: TbSearch,
};

// Inline dotted "What I use" strip — technologies flow as one wrapping line,
// each with its brand icon. Mirrors the reference site.
export function Skills({
  heading = "What I use",
  className = "",
}: {
  heading?: string;
  className?: string;
}) {
  return (
    <section className={className}>
      <h2 className="mb-6 text-right font-display text-2xl italic md:text-3xl">
        {heading}
      </h2>
      <div className="flex flex-wrap items-center gap-x-1 gap-y-3 border-t border-line pt-8 leading-loose">
        {skills.map((name, i) => {
          const Icon = ICONS[name] ?? TbApi;
          return (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 12) * 0.03 }}
              className="group inline-flex items-center gap-1.5"
            >
              {i > 0 && <span className="mr-1 text-faint">·</span>}
              <Icon aria-hidden className="h-3.5 w-3.5 text-faint transition-colors group-hover:text-accent" />
              <span className="font-mono text-xs uppercase tracking-wider text-muted transition-colors group-hover:text-accent">
                {name}
              </span>
            </motion.span>
          );
        })}
      </div>
    </section>
  );
}
