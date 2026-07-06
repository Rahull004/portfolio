// ------------------------------------------------------------------ //
//  All site copy + project data. Edit here; pages generate from this.
// ------------------------------------------------------------------ //

export const profile = {
  name: "Rahul Bansal",
  monogram: "RB",
  role: "Backend Software Engineer",
  focus: "Distributed Systems · Payments Infrastructure",
  tagline:
    "I build production-ready backend systems — payment services, event-streaming pipelines, and the infrastructure that keeps them reliable — with carefully crafted interfaces on top.",
  availability: "Open to full-time SDE & internship opportunities",
  availabilityShort: "Open to full-time SDE & internships",
  location: "India",
  email: "rahullx004@gmail.com",
  resumeUrl: "/resume.pdf", // drop your PDF in /public
};

export const socials = [
  { label: "GitHub", href: "https://github.com/Rahull004" },
  { label: "LinkedIn", href: "https://linkedin.com/in/rahull004" },
  { label: "LeetCode", href: "https://leetcode.com/u/Rahull004" },
  { label: "Email", href: "mailto:rahullx004@gmail.com" },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Highlight-segmented copy — `hl: true` renders the accent color inline
// (matching the reference site's keyword emphasis).
export type Segment = { t: string; hl?: boolean };

export const heroTagline: Segment[] = [
  { t: "I build " },
  { t: "production-ready backend systems", hl: true },
  {
    t: " — payment services, event-streaming pipelines, and the infrastructure that keeps them reliable — with ",
  },
  { t: "carefully crafted interfaces", hl: true },
  { t: " on top." },
];

// Inline dotted skills strip — the site's "What I use" section. Names are
// ordered by category; each maps to a brand icon in <Skills />.
export const skills: string[] = [
  // Languages
  "Go", "C/C++", "Python", "Java", "TypeScript", "JavaScript",
  // Backend & APIs
  "Node.js", "Express", "gRPC", "GraphQL", "Webhooks", "WebSockets", "Socket.io", "Kafka",
  // Data
  "PostgreSQL", "MongoDB", "MySQL", "Redis",
  // Infra & DevOps
  "Docker", "Kubernetes", "Nginx", "GitHub Actions", "GCP", "Bash", "Git", "Linux",
  // Observability
  "OpenTelemetry", "Prometheus", "Grafana", "Sentry",
  // Frontend
  "React", "Next.js", "Redux", "Tailwind", "Electron",
  // Tooling & Security
  "Postman", "Appwrite", "OWASP", "OSINT",
];

export const aboutLead: Segment[] = [
  { t: "I'm a " },
  { t: "backend-leaning software engineer", hl: true },
  { t: " who likes turning messy real-world problems into " },
  { t: "reliable systems", hl: true },
  { t: "." },
];

export const about = {
  intro: [
    "I'm a backend-leaning software engineer who likes turning messy real-world problems into reliable systems.",
    "I wrote production code at Razorpay on the payments routing layer, spent a Google Summer of Code with OSGeo making infrastructure reproducible, and care a lot about clean code, thoughtful technical decisions, and software that holds up under real load.",
  ],
  whatIUse: [
    "Go", "C/C++", "Python", "TypeScript", "Java", "JavaScript",
    "Node.js", "Express", "gRPC", "Webhooks", "WebSockets",
    "PostgreSQL", "MongoDB", "MySQL", "Redis",
    "Docker", "Kubernetes", "Kafka", "OpenTelemetry", "CI/CD", "Sentry",
    "React", "Next.js", "Redux", "Tailwind", "Electron",
    "Git", "Linux", "OWASP", "OSINT",
  ],
  education: [
    {
      school: "IIIT-M Gwalior",
      degree: "B.Tech · Computer Science & Engineering",
      period: "2022 — 2026",
      detail: "CGPA 8.15",
      description:
        "Coursework in operating systems, DBMS, computer networks, and distributed systems, applied through internships in payments infrastructure and open-source systems tooling.",
    },
  ],
};

export type Experience = {
  company: string;
  role: string;
  team?: string;
  period: string;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Razorpay",
    role: "Backend Developer Intern",
    team: "PG-Router",
    period: "Jan – Jun 2026",
    points: [
      "Shipped the payment.notes.updated webhook end-to-end across 10+ microservices — Protobuf schema, Kafka streaming, delivery, and rate-limiting.",
      "Built the Subscription Reactivation flow: reactivation endpoint, API-monolith proxy, Kong gateway route with user-auth, and merchant-dashboard authz policy.",
      "Hardened CI/CD with SLIT integration suites, consolidated Docker images, and added OpenTelemetry distributed tracing.",
    ],
    stack: ["Go", "Kafka", "gRPC", "Protobuf", "Kong", "OpenTelemetry"],
  },
  {
    company: "OSGeo · Google Summer of Code '25",
    role: "Software Engineer Intern",
    team: "istSOS4",
    period: "May – Aug 2025",
    points: [
      "Built a graphical Docker deployment wizard (React + Electron) that generates validated docker-compose configs.",
      "Eliminated ~95% of manual deployment errors and cut environment setup time ~85%.",
    ],
    stack: ["React", "Electron", "Docker"],
  },
  {
    company: "C-DAC Noida",
    role: "Cyber Security Intern",
    period: "Nov – Dec 2024",
    points: [
      "Remediated web-app vulnerabilities using the OWASP Top 10 methodology.",
      "Surfaced 5+ critical data-exposure points via OSINT recon (SpiderFoot, Netlas); fed mitigation reports into the secure SDLC.",
    ],
    stack: ["OWASP", "OSINT", "Pen-testing"],
  },
];

export type Project = {
  slug: string;
  title: string;
  type: string;
  year: string;
  role: string;
  summary: string;
  overview: string;
  built: string[];
  outcomes: string[];
  stack: string[];
  accent: string; // used for the placeholder gradient
  code?: string;
  live?: string;
};

// Featured work — each gets a /projects/[slug] case study.
export const projects: Project[] = [
  {
    slug: "horizon",
    title: "Horizon",
    type: "Fintech Platform",
    year: "2024",
    role: "Full-stack",
    summary:
      "A modern banking platform to connect multiple bank accounts, track transactions in real time, and transfer money.",
    overview:
      "Horizon is a financial SaaS platform where users link real bank accounts, see a unified dashboard of balances and transactions, and send money to others — built on a secure, server-rendered Next.js stack.",
    built: [
      "Bank-account linking and transaction sync via Plaid, with a unified multi-account dashboard.",
      "Secure server-side authentication and sessions with Appwrite.",
      "Peer-to-peer transfers powered by Dwolla, with real-time balance updates.",
    ],
    outcomes: [
      "Unified view across multiple linked bank accounts",
      "Secure, server-rendered auth and data flows",
    ],
    stack: ["Next.js", "TypeScript", "Appwrite", "Plaid", "Dwolla", "Tailwind"],
    accent: "#2f6bff",
    code: "https://github.com/Rahull004/horizon",
  },
  {
    slug: "istsos4-wizard",
    title: "istSOS4 Deployment Wizard",
    type: "Developer Tool",
    year: "2025",
    role: "GSoC Software Engineer @ OSGeo",
    summary:
      "A graphical Docker deployment wizard that makes error-prone infra setup reproducible for non-experts.",
    overview:
      "istSOS4 is an open-source Sensor Observation Service. Setting it up meant hand-editing docker-compose files — easy to get wrong. During Google Summer of Code with OSGeo, I built a desktop wizard that turns that into a guided, validated flow.",
    built: [
      "A full-stack wizard in React + Electron that programmatically generates validated docker-compose configurations.",
      "Real-time form validation guaranteeing 100% configuration correctness at setup time.",
      "A cross-platform desktop packaging pipeline so non-expert users can deploy reproducibly.",
    ],
    outcomes: [
      "~95% fewer manual deployment errors",
      "~85% faster environment setup",
      "Merged upstream into the OSGeo istSOS4 project",
    ],
    stack: ["React", "Electron", "Docker", "Node.js"],
    accent: "#ff5e3a",
    code: "https://github.com/istSOS/istsos4",
  },
  {
    slug: "notify",
    title: "Notify",
    type: "Web Application",
    year: "2024",
    role: "Full-stack",
    summary:
      "A notes platform with an OpenAI-powered assistant and latency-tuned APIs.",
    overview:
      "A feature-rich note-management app focused on a fast, organized writing experience, with an AI assistant available on demand.",
    built: [
      "Streamlined note creation and organization for higher day-to-day productivity.",
      "Optimized backend API endpoints and database queries to cut note-saving latency.",
      "Integrated an OpenAI-powered chatbot for on-demand help inside the app.",
    ],
    outcomes: [
      "Noticeably lower note-save latency",
      "Higher engagement via the built-in assistant",
    ],
    stack: ["React", "Node.js", "Appwrite", "OpenAI"],
    accent: "#7c5cff",
    code: "https://github.com/Rahull004/notify",
  },
  {
    slug: "remote-code-executor",
    title: "Remote Code Executor",
    type: "Developer Tool",
    year: "2024",
    role: "Full-stack",
    summary:
      "A real-time collaborative IDE with a secure, containerized multi-language execution engine.",
    overview:
      "An online IDE where multiple people edit and run code together in real time — with sandboxed execution so untrusted code stays contained.",
    built: [
      "Real-time collaborative editing over WebSockets (Socket.io) for smooth pair-programming.",
      "A secure, multi-language code-execution engine designed for concurrent users.",
      "Full-stack containerization with Docker to automate deployment and onboarding.",
    ],
    outcomes: [
      "~95% reduction in onboarding time via containerization",
      "Concurrent, sandboxed multi-language execution",
    ],
    stack: ["React", "Node.js", "Socket.io", "Docker"],
    accent: "#2dd4bf",
    code: "https://github.com/Rahull004/remote-code-executor",
  },
];

// Smaller repos — a table linking to GitHub.
export const skillBuilding = [
  { name: "MERN-estate", type: "Web Application", date: "2024", href: "https://github.com/Rahull004/MERN-estate" },
  { name: "Promptopia", type: "Next.js App", date: "2024", href: "https://github.com/Rahull004/promptopia" },
  { name: "Bloggroo", type: "Next.js App", date: "2024", href: "https://github.com/Rahull004/bloggroo" },
];

export const achievements = [
  "GSoC '25 — 8.4% acceptance (of 15,240)",
  "1000+ LeetCode · top 0.5% Contest 457",
  "JEE Mains 99.02 percentile",
  "CGPA 8.15",
];

export const projectYearRange = "2024 — 2026";
