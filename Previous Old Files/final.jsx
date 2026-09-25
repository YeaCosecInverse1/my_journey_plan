import { useState } from "react";

const PHASES = [
  {
    id: 0,
    label: "Phase 0",
    title: "Right Now → HSC 2027",
    subtitle: "Stabilize. Survive. Build roots.",
    period: "Now → Mid-2027",
    incomeTarget: "৳0",
    incomeReality: { optimistic: "৳0", expected: "৳0", disaster: "৳0" },
    color: "#6C63FF",
    lightColor: "#f0eeff",
    icon: "🌱",
    mission: "The HSC exam is the gate. Nothing opens without it. This is not the time to become a DevOps engineer — this is the time to become someone who finishes what they started.",
    systemsStatus: { degree: "HSC Focus", tech: "Foundations only", japanese: "N5 target", income: "Ignore for now", experience: "Building habits" },
    doList: [
      "Focus 80% energy on HSC selective chapters — only ~40% coverage per paper, highest-frequency topics first",
      "Learn Python beginner/intermediate: variables, loops, functions, basic OOP — no frameworks",
      "Master Git basics: init, add, commit, push, branch — use it for every file you write",
      "Learn Linux basics inside WSL2: cd, ls, mkdir, cp, mv, grep, chmod, ssh — live in the terminal",
      "Study Japanese 30–60 min daily — Hiragana, Katakana, basic vocab — target N5",
      "Watch Crash Course Computer Science Episodes 1–15 to understand CPU, RAM, processes, OS",
      "Read MDN HTTP Guide + 'How the Internet Works' — understand DNS, HTTP, APIs, JSON",
      "Keep a GitHub account. Push every script you write, even tiny ones.",
      "Protect your sleep above all else — 7–8 hours. Neuroplasticity collapses without it.",
    ],
    dontList: [
      "Do NOT start freelancing — you are not ready and it will waste time you don't have",
      "Do NOT learn React, AWS, Docker, Kubernetes — these come later",
      "Do NOT follow the 'Python-only → DevOps' shortcut advice — it is architecturally wrong",
      "Do NOT let family pressure about HSC 'prestige' consume your mental bandwidth",
      "Do NOT attempt to learn 3 things at once — HSC + Python + Japanese is the limit",
      "Do NOT vibe-code (copy-paste until it works) — understand every line you write",
    ],
    tips: [
      "The HSC is not your ceiling — it is just the current door. Pass it and the entire roadmap unlocks.",
      "For Python: 'Automate the Boring Stuff with Python' (free online) — Chapters 1–6 are your bible",
      "For Linux: Linux Journey (linuxjourney.com) — free, browser-based, excellent",
      "For Japanese: Anki flashcards for N5 vocab + any grammar guide. Daily consistency beats intensity",
      "Early morning fatigue disrupting study? Study in 25-min Pomodoro blocks, not 3-hour marathons",
    ],
    tracker: [
      { task: "HSC Exam Completed", type: "milestone" },
      { task: "WSL2 + Ubuntu installed and comfortable", type: "skill" },
      { task: "Python: 3+ original scripts on GitHub", type: "skill" },
      { task: "Git: can push, branch, merge without googling", type: "skill" },
      { task: "Linux: navigate terminal without thinking", type: "skill" },
      { task: "Japanese: N5 vocabulary (800 words minimum)", type: "language" },
      { task: "GitHub account with regular commits", type: "portfolio" },
    ],
    resources: [
      { name: "Automate the Boring Stuff with Python", url: "https://automatetheboringstuff.com", note: "Free, Chapters 1–6" },
      { name: "Crash Course Computer Science", url: "https://youtube.com", note: "YouTube, Ep 1–15" },
      { name: "Linux Journey", url: "https://linuxjourney.com", note: "Free, browser-based" },
      { name: "Git & GitHub — freeCodeCamp", url: "https://youtube.com", note: "1hr YouTube" },
      { name: "MDN HTTP Guide", url: "https://developer.mozilla.org", note: "Read twice" },
    ],
    scenario: {
      best: "HSC passed with GPA 4+. Python and Linux feel natural. GitHub has 5+ projects. Japanese N5 achieved.",
      worst: "HSC disappoints but you kept building skills. Python foundation is solid. The technical path is unaffected — the Japan route via ITPEC FE exam does not require HSC GPA.",
      key: "A bachelor's degree acquired after HSC makes the Japan visa process trivially simple. This is the recommended route. The ITPEC FE exam is the backup for if the degree path becomes impossible."
    }
  },
  {
    id: 1,
    label: "Phase 1",
    title: "Frontend Foundations",
    subtitle: "Learn the language of the web. Ship your first live projects.",
    period: "Post-HSC → Month 3",
    incomeTarget: "৳0–৳15,000",
    incomeReality: { optimistic: "৳5,000–৳15,000", expected: "৳0–৳5,000", disaster: "৳0 (no clients yet)" },
    color: "#FF6B6B",
    lightColor: "#fff0f0",
    icon: "🖥️",
    mission: "Every button, every layout, every animation on the internet is HTML + CSS + JavaScript. Before you touch React, you need to own the raw material. This phase makes you a web developer.",
    systemsStatus: { degree: "Bachelor's enrollment", tech: "HTML/CSS/JS mastery", japanese: "N5 → N4", income: "First Upwork profile", experience: "5+ live projects" },
    doList: [
      "Master HTML5: semantic structure, forms, accessibility basics, SEO-relevant tags",
      "Master CSS3: Flexbox, Grid, responsive design with media queries, animations, custom properties",
      "Master Vanilla JavaScript: DOM manipulation, events, fetch API, async/await, local storage, array methods",
      "Build 5+ projects — all deployed live, not on localhost. Use Netlify or Vercel (free)",
      "Create Upwork profile by Month 3 — even if zero clients yet. Observe, not obsess",
      "Create LinkedIn and GitHub Portfolio — your public professional identity starts now",
      "Buy a custom domain (~৳800–1,500/yr from Namecheap) for your portfolio site",
      "Start structured Japanese — target JLPT N4 by end of Phase 1",
      "Enroll in a bachelor's degree program (priority: affordable + flexible, not prestigious)",
    ],
    dontList: [
      "Do NOT skip to React before understanding vanilla JS DOM manipulation",
      "Do NOT build tutorial clones and call them projects — build originals",
      "Do NOT neglect responsive design — every project must work on mobile",
      "Do NOT obsess over getting clients yet — build the foundation first",
      "Do NOT use CSS frameworks before understanding raw CSS",
    ],
    tips: [
      "The Odin Project (free) is the best structured path — follow it as your spine",
      "Kevin Powell on YouTube is the best CSS teacher alive — watch him for anything CSS",
      "JavaScript.info is better than any course for understanding JS deeply",
      "MDN Web Docs is your permanent reference — bookmark it, use it daily",
      "Deploy every project the day you finish it. 'Will deploy later' means never.",
      "On Upwork: start at ৳500–৳1,500/hour, bid on small gigs (fix a form, make responsive), get your first review — one review changes everything",
    ],
    tracker: [
      { task: "5 live deployed projects on Netlify/Vercel", type: "portfolio" },
      { task: "Portfolio site on custom domain", type: "portfolio" },
      { task: "Upwork profile created with services listed", type: "income" },
      { task: "LinkedIn + GitHub profile professional", type: "portfolio" },
      { task: "Can build responsive layout from scratch without googling Flexbox", type: "skill" },
      { task: "20+ Upwork proposals sent (even zero replies is fine)", type: "income" },
      { task: "Japanese: N4 level (2,500 vocab, basic grammar)", type: "language" },
      { task: "Bachelor's degree enrollment confirmed", type: "milestone" },
    ],
    resources: [
      { name: "The Odin Project", url: "https://theodinproject.com", note: "Free, project-based spine" },
      { name: "Kevin Powell CSS — YouTube", url: "https://youtube.com", note: "Best CSS teacher" },
      { name: "JavaScript.info", url: "https://javascript.info", note: "Complete JS reference" },
      { name: "MDN Web Docs", url: "https://developer.mozilla.org", note: "Permanent reference" },
      { name: "Netlify", url: "https://netlify.com", note: "Free deployment" },
    ],
    scenario: {
      best: "Portfolio live at custom domain with 5 solid projects. First 1–2 Upwork clients paying ৳5,000–৳15,000. N4 Japanese achieved.",
      worst: "No clients yet but portfolio is solid and skills are real. The income will come in Phase 2 — this phase is about the foundation, not the money.",
      key: "One Upwork review is worth more than 100 proposals. Your job is to get that first review, even for free or near-free."
    }
  },
  {
    id: 2,
    label: "Phase 2",
    title: "Modern Full-Stack (Next.js + PostgreSQL)",
    subtitle: "Cross from website builder to software developer.",
    period: "Month 4–7",
    incomeTarget: "৳10,000–৳40,000",
    incomeReality: { optimistic: "৳20,000–৳40,000", expected: "৳5,000–৳15,000", disaster: "৳0–৳5,000 (long client drought)" },
    color: "#00C896",
    lightColor: "#e6faf5",
    icon: "⚙️",
    mission: "This is where you stop building pages and start building products. React, Next.js, databases, authentication — these are the tools that make you worth serious money.",
    systemsStatus: { degree: "Year 1 studies", tech: "TypeScript + Next.js + PostgreSQL", japanese: "N4 → N3", income: "Regular Upwork gigs", experience: "Full-stack projects" },
    doList: [
      "Learn TypeScript from the Official Handbook — start with your existing JS, convert projects",
      "Master Next.js 14+ App Router: server components, client components, routing, data fetching",
      "Learn PostgreSQL: tables, joins, indexes, transactions — relational databases are non-negotiable",
      "Learn Prisma ORM: models, migrations, queries — the modern standard",
      "Implement JWT authentication, sessions, OAuth basics — every real app needs this",
      "Learn Tailwind CSS — the dominant CSS framework in 2026, drastically speeds up UI",
      "Git branching strategy: feature branches, pull requests, meaningful commit messages",
      "Bid 5–10 proposals/day on Upwork — pitch landing pages, dashboards, CRUD systems",
      "Start JLPT N3 preparation — daily Japanese practice continues",
    ],
    dontList: [
      "Do NOT build projects without authentication — every real app has users",
      "Do NOT use MongoDB as your only DB — learn PostgreSQL, relational DBs dominate enterprise",
      "Do NOT skip TypeScript — clients paying ৳60,000+ almost always require it",
      "Do NOT present tutorial clones as portfolio pieces",
      "Do NOT skip README files — documentation is a professional signal",
    ],
    tips: [
      "Next.js official tutorial (nextjs.org/learn) is free and excellent — do it first",
      "Prisma docs are world-class — use them as your primary Prisma reference",
      "Railway.app and Render.com have free tiers for hosting backend — use them for portfolio projects",
      "Tailwind CSS: learn it in one day from the official docs, then use it forever",
      "For Upwork: tailored proposals beat copy-paste 10x — read the client's job post and respond to their specific pain point",
      "Convert one project to TypeScript every month — don't do it all at once",
    ],
    tracker: [
      { task: "2+ full-stack apps deployed with authentication", type: "portfolio" },
      { task: "Personal Blog CMS — Next.js + PostgreSQL + Prisma", type: "portfolio" },
      { task: "Expense Tracker with user accounts", type: "portfolio" },
      { task: "Authentication System (JWT + OAuth)", type: "skill" },
      { task: "Upwork: ৳20,000+ in a single month (once)", type: "income" },
      { task: "TypeScript: one project fully converted", type: "skill" },
      { task: "Japanese: N3 study started, N4 solidified", type: "language" },
    ],
    resources: [
      { name: "Next.js Official Learn", url: "https://nextjs.org/learn", note: "Free, complete" },
      { name: "TypeScript Handbook", url: "https://typescriptlang.org/docs", note: "Official, free" },
      { name: "Prisma Docs", url: "https://prisma.io/docs", note: "Best ORM reference" },
      { name: "Tailwind CSS Docs", url: "https://tailwindcss.com/docs", note: "Learn in one day" },
      { name: "Railway.app", url: "https://railway.app", note: "Free backend hosting" },
    ],
    scenario: {
      best: "Consistent ৳30,000–৳40,000/month from Upwork. 3 deployed full-stack apps. TypeScript comfortable. N3 Japanese in progress.",
      worst: "Income still inconsistent but skills are real. The gap between Phase 2 and income is smaller than it looks — one good client changes the trajectory.",
      key: "At this stage you are competing with 90% of Bangladeshi freelancers. Most don't know TypeScript + Next.js + PostgreSQL together. You do."
    }
  },
  {
    id: 3,
    label: "Phase 3",
    title: "Professional Software Engineering",
    subtitle: "Solve real problems. Build production-grade systems.",
    period: "Month 8–11",
    incomeTarget: "৳30,000–৳80,000",
    incomeReality: { optimistic: "৳50,000–৳80,000", expected: "৳20,000–৳45,000", disaster: "৳0–৳20,000 (no clients for months)" },
    color: "#FF9F43",
    lightColor: "#fff8ee",
    icon: "🏗️",
    mission: "The gap between junior and senior is not frameworks — it is whether you can handle performance, security, payments, and scale. This phase closes that gap.",
    systemsStatus: { degree: "Year 1–2 studies", tech: "Security + Redis + Docker + Stripe", japanese: "N3 target", income: "Retainer clients", experience: "Production-quality work" },
    doList: [
      "Study OWASP Top 10 security vulnerabilities: XSS, CSRF, SQL Injection, rate limiting",
      "Learn Redis for caching — used in virtually every serious production system",
      "Learn Stripe payment integration — any e-commerce or SaaS client will need this",
      "Learn Docker: containers, images, volumes, networks, Docker Compose",
      "Learn Jest + React Testing Library — basic unit and integration testing",
      "Learn WebSockets / Socket.io for real-time features (chat, notifications)",
      "Build a SaaS micro-product — even 1 paying user teaches more than any tutorial",
      "Shift Upwork strategy from hourly gigs to project-based and retainer contracts",
      "Target JLPT N3 exam — prepare consistently",
    ],
    dontList: [
      "Do NOT ignore error handling — try/catch, error boundaries, proper HTTP status codes everywhere",
      "Do NOT store passwords in plain text — ever. bcrypt is non-negotiable",
      "Do NOT deploy without environment variables (.env files, never hardcode secrets)",
      "Do NOT skip Docker — it bridges directly into DevOps (Phase 4)",
      "Do NOT underestimate English communication — at ৳80,000/month you're competing globally",
    ],
    tips: [
      "Read 'The Elements of Style' (Strunk & White) for English communication — one sitting, changes everything",
      "EXPLAIN ANALYZE in PostgreSQL shows why your query is slow — use it before optimizing anything",
      "Upstash (free tier) for Redis is easier than self-hosting — start there",
      "For Stripe: their official docs are world-class — follow them, don't rely on YouTube tutorials",
      "Socket.io is a rare skill in the junior pool — adding it to one project makes your portfolio stand out",
      "One real paying SaaS user (even $5/month) is worth more as a portfolio signal than 10 tutorial projects",
    ],
    tracker: [
      { task: "SaaS application with Stripe payments deployed", type: "portfolio" },
      { task: "Real-time chat application with Socket.io", type: "portfolio" },
      { task: "Docker Compose running full local dev stack", type: "skill" },
      { task: "Redis caching implemented in a production app", type: "skill" },
      { task: "OWASP Top 10 studied and applied", type: "skill" },
      { task: "Upwork: ৳60,000+ in a month (consistent, 2 months)", type: "income" },
      { task: "JLPT N3 passed", type: "language" },
      { task: "First retainer client (monthly contract)", type: "income" },
    ],
    resources: [
      { name: "OWASP Top 10", url: "https://owasp.org/Top10", note: "Security bible, free" },
      { name: "Redis Crash Course — Traversy Media", url: "https://youtube.com", note: "1 hour, YouTube" },
      { name: "Stripe Official Docs", url: "https://stripe.com/docs", note: "Best payment reference" },
      { name: "Docker for Web Developers — Bret Fisher", url: "https://udemy.com", note: "Udemy, ~$12" },
      { name: "Web Dev Simplified — JWT Auth", url: "https://youtube.com", note: "Watch 3 times" },
    ],
    scenario: {
      best: "Consistent ৳70,000–৳80,000/month. One retainer client. SaaS product deployed with paying users. N3 passed. Docker fluent.",
      worst: "Income at ৳40,000–৳50,000 — still a massive win. Docker and Redis knowledge directly feeds Phase 4. The foundation is solid.",
      key: "The developer who can build, secure, test, and deploy is dramatically rarer than the one who can only build. You are becoming that developer."
    }
  },
  {
    id: 4,
    label: "Phase 4",
    title: "Cloud Foundation (AWS + Networking)",
    subtitle: "Enter the cloud. Become someone who can run systems, not just build them.",
    period: "Month 12–18",
    incomeTarget: "৳50,000–৳1,20,000",
    incomeReality: { optimistic: "৳80,000–৳1,20,000", expected: "৳30,000–৳60,000", disaster: "৳10,000–৳30,000 (slow months)" },
    color: "#4ECDC4",
    lightColor: "#edfafa",
    icon: "☁️",
    mission: "Now you enter cloud. AWS is the global standard. Every serious tech company in Japan uses cloud infrastructure. This phase makes you hireable for remote jobs paying in USD.",
    systemsStatus: { degree: "Year 2 studies", tech: "AWS + Linux deep + Nginx + Terraform", japanese: "N3 → N2 prep", income: "Remote contracts", experience: "Cloud deployments" },
    doList: [
      "Master Ubuntu/Debian Linux deeply: processes, permissions, cron, systemd, journalctl, firewalls",
      "Learn Networking: IP, DNS, HTTP/HTTPS, TCP, UDP, NAT, VPN, Load Balancer — most DevOps failures are network failures",
      "Learn Nginx: production web server, reverse proxy, SSL with Let's Encrypt (free)",
      "Master AWS core services: EC2, S3, IAM, VPC, Route53, CloudWatch, RDS, CloudFront",
      "Learn Terraform: write infrastructure as code — provision VPC, EC2, RDS from .tf files",
      "Earn AWS Solutions Architect Associate (SAA) certification — globally recognized in Japan",
      "Rent a Hetzner VPS (৳500–৳900/month) — SSH in, deploy a real app manually first",
      "Start Python automation/scripting projects: file organizer, log analyzer, server monitor",
      "Begin JLPT N2 preparation — this is the big one that opens Japanese companies",
    ],
    dontList: [
      "Do NOT jump into Kubernetes before mastering Docker, Linux, and Networking",
      "Do NOT use only the AWS console — everything must also be doable via CLI and Terraform",
      "Do NOT skip the SAA exam — it is the credential that makes your CV credible to Japanese recruiters",
      "Do NOT neglect the VPS hands-on work — theory without deployment is worthless",
      "Do NOT use Azure or GCP as your primary — AWS dominates Japan's market",
    ],
    tips: [
      "Adrian Cantrill's AWS SAA course (learn.cantrill.io, ~$40) is the best — better than A Cloud Guru",
      "KodeKloud (~$20/month) gives browser-based hands-on labs for Docker, K8s, Terraform, Linux — worth every taka",
      "Hetzner is cheaper than AWS for practice VPS — use it to deploy your real apps",
      "Terraform: 'Terraform: Up & Running' by Yevgeniy Brikman is the standard reference",
      "Destroy and recreate your Terraform infrastructure 3 times — muscle memory is the goal",
      "For Upwork DevOps niche: 'set up CI/CD for my startup', 'migrate to AWS' — pay ৳30,000–৳80,000 each",
      "ITPEC IT Passport Exam (IP) — register for October sitting. Level-1, primers you for the FE exam later",
    ],
    tracker: [
      { task: "Personal website deployed on AWS (EC2 + Nginx + SSL)", type: "portfolio" },
      { task: "AWS SAA-C03 Certification passed", type: "milestone" },
      { task: "Terraform: can provision VPC + EC2 + RDS from scratch", type: "skill" },
      { task: "Python projects: 3+ automation scripts deployed", type: "skill" },
      { task: "Networking: understand DNS, subnetting, HTTP flow without reference", type: "skill" },
      { task: "ITPEC IP Exam (Level 1) — registered and attempted", type: "milestone" },
      { task: "Japanese: N2 preparation started, N3 solidified", type: "language" },
      { task: "Upwork: DevOps gig successfully completed", type: "income" },
    ],
    resources: [
      { name: "Adrian Cantrill AWS SAA", url: "https://learn.cantrill.io", note: "~$40, best available" },
      { name: "KodeKloud", url: "https://kodekloud.com", note: "~$20/mo, hands-on labs" },
      { name: "Terraform: Up & Running", url: "https://amazon.com", note: "Standard Terraform book" },
      { name: "Linux Command Line — William Shotts", url: "https://linuxcommand.org", note: "Free online" },
      { name: "BDITEC — IP Exam Resources", url: "https://bditec.gov.bd", note: "Register here" },
    ],
    scenario: {
      best: "AWS SAA passed. Real app running on AWS with Nginx + SSL. Terraform automated. ৳1,00,000+/month. ITPEC IP exam attempted.",
      worst: "SAA failed first attempt (common) — retake in 3 months. Cloud deployments still happening. Skills accumulating regardless.",
      key: "AWS SAA is the credential that makes Japanese recruiters take you seriously. It is worth ৳16,000 and 3 months of study."
    }
  },
  {
    id: 5,
    label: "Phase 5",
    title: "Containers + CI/CD",
    subtitle: "Automate everything. Let machines do the deployment.",
    period: "Month 19–24",
    incomeTarget: "৳80,000–৳1,50,000",
    incomeReality: { optimistic: "৳1,20,000–৳1,50,000", expected: "৳40,000–৳80,000", disaster: "৳15,000–৳40,000 (client gaps)" },
    color: "#A855F7",
    lightColor: "#f5eeff",
    icon: "🔄",
    mission: "This is where money starts appearing at scale. Companies pay specifically for automation. CI/CD means every code push deploys itself. This skill is rare, valued, and directly maps to Japan's SRE roles.",
    systemsStatus: { degree: "Year 2–3 studies", tech: "Docker advanced + GitHub Actions + Monitoring", japanese: "N2 exam prep", income: "Senior contracts", experience: "CI/CD pipelines in production" },
    doList: [
      "Master Docker advanced: multi-stage builds, image optimization, Docker networking, volumes",
      "Build GitHub Actions pipelines: Push → Test → Build Docker image → Deploy automatically",
      "Learn Prometheus + Grafana: metrics collection, dashboards, alert rules",
      "Set up monitoring alerts: Telegram notification when server CPU > 80%",
      "Build: Docker Compose running Next.js + PostgreSQL + Redis + Nginx + backup to S3",
      "Automate database backups to AWS S3 with a cron job",
      "Build a complete CI/CD pipeline for one of your real applications",
      "Register for and attempt ITPEC FE Examination (April sitting) — expect to map the battlefield",
      "Intensify JLPT N2 preparation — this is the Japan language key",
    ],
    dontList: [
      "Do NOT skip monitoring — companies pay you to know when things break before clients do",
      "Do NOT treat the first FE exam attempt as a pass/fail — treat it as a recon mission",
      "Do NOT rush into Kubernetes until Docker and CI/CD are solid",
      "Do NOT build CI/CD for only toy projects — connect it to a real deployed app",
    ],
    tips: [
      "TechWorld with Nana (YouTube) — best DevOps educator on YouTube. Watch her Prometheus + Grafana series",
      "GitHub Actions official docs are excellent — build your first workflow from the quickstart",
      "ITPEC FE Exam: collect 'New FE Text Book Vol. 1 & 2' from BDITEC. Solve ALL past papers (2010–2024) obsessively",
      "FE Morning Session: discrete math, business strategy, corporate hierarchy — these are not programming questions. Study them separately",
      "FE Afternoon Session: data structures, algorithms, SQL, pseudo-code — this is your home turf as a developer. Should feel natural by now",
      "Pass rate in Bangladesh: 9.2%–25.4%. This is brutal. Treat it like a university exam, not a certification quiz",
    ],
    tracker: [
      { task: "Complete CI/CD pipeline: push → test → deploy", type: "portfolio" },
      { task: "Prometheus + Grafana monitoring dashboard live", type: "portfolio" },
      { task: "Docker Compose: full stack with 4+ services running", type: "skill" },
      { task: "Database auto-backup to S3 running in production", type: "skill" },
      { task: "ITPEC FE Exam attempted (April) — results analyzed", type: "milestone" },
      { task: "Upwork: ৳1,00,000+ in a month (first time)", type: "income" },
      { task: "JLPT N2 study: formal preparation program enrolled", type: "language" },
    ],
    resources: [
      { name: "TechWorld with Nana — YouTube", url: "https://youtube.com", note: "Best DevOps educator" },
      { name: "GitHub Actions Docs", url: "https://docs.github.com/actions", note: "Official quickstart" },
      { name: "BDITEC Past Exam Papers", url: "https://bditec.gov.bd", note: "Download ALL years" },
      { name: "ITPEC Learning Materials", url: "https://itpec.org/about/learning-materials.html", note: "Official resources" },
      { name: "Lightworks e-learning", url: "https://itpec.org", note: "FE online prep" },
    ],
    scenario: {
      best: "CI/CD running in production. Monitoring live. FE exam attempted (pass or valuable recon). ৳1,20,000+/month. N2 prep underway.",
      worst: "FE first attempt failed (expected). Reattempt in October. Income and skills are independent of the FE result.",
      key: "The FE exam is your visa key. Every other skill builds your income. Both tracks run in parallel — never sacrifice one for the other."
    }
  },
  {
    id: 6,
    label: "Phase 6",
    title: "Infrastructure as Code + Kubernetes",
    subtitle: "The dragon appears. Approach with respect, not fear.",
    period: "Month 25–30",
    incomeTarget: "৳1,00,000–৳2,00,000",
    incomeReality: { optimistic: "৳1,50,000–৳2,00,000", expected: "৳40,000–৳1,00,000", disaster: "৳20,000–৳50,000 (market dry spells)" },
    color: "#F97316",
    lightColor: "#fff4ee",
    icon: "🐉",
    mission: "Kubernetes is the final technical gate before senior cloud engineering. Do NOT rush here. Only approach after Linux, Docker, Networking, and AWS are solid. The people who skip to Kubernetes drown.",
    systemsStatus: { degree: "Year 3 studies", tech: "Kubernetes + Helm + Terraform advanced", japanese: "N2 exam attempt", income: "Senior remote contracts", experience: "Production Kubernetes" },
    doList: [
      "Learn Kubernetes fully: Pods, Deployments, Services, Ingress, Helm, Horizontal Pod Autoscaler",
      "Start with k3s locally, then graduate to AWS EKS",
      "Build: 3-tier application (frontend + backend + DB) inside Kubernetes",
      "Watch Kubernetes self-heal: crash a pod deliberately and watch it restart automatically",
      "Advanced Terraform: modules, state management, remote backends in S3",
      "Build Terraform config for VPC + Subnet + EC2 + Security Group — no clicking required",
      "Deploy your full CI/CD pipeline: Code → Test → Docker → ECR → Kubernetes deployment",
      "Sit JLPT N2 exam — this is the credential that opens mid-sized Japanese tech companies",
      "Pass ITPEC FE Examination (October re-attempt) — this is your Japan visa key",
    ],
    dontList: [
      "Do NOT treat Kubernetes as just 'Docker but bigger' — it is a different philosophy",
      "Do NOT skip Helm — managing raw K8s YAML at scale is painful without it",
      "Do NOT neglect the FE exam just because technical skills are strong",
      "Do NOT apply to Japanese companies yet — wait for the full package (FE cert + portfolio + N2/N3)",
    ],
    tips: [
      "Kubernetes official interactive tutorial (kubernetes.io/docs) is surprisingly good — start there",
      "k3s is Kubernetes without the complexity — run it on your VPS to practice everything real",
      "The moment Kubernetes automatically restarts your crashed pod will feel like magic — let it",
      "For FE afternoon session: data structures (hash maps, trees, queues) are the backbone — drill them",
      "JLPT N2 requires ~600 hours of study total. If N3 is done, you need ~300 more hours. Plan accordingly",
      "N2 is a gigantic advantage at Japanese companies. N3 is good. N4 is the minimum to be taken seriously",
    ],
    tracker: [
      { task: "3-tier app running in Kubernetes on AWS EKS", type: "portfolio" },
      { task: "Kubernetes: pods auto-healing demonstrated", type: "skill" },
      { task: "Terraform: full AWS infrastructure via code only", type: "skill" },
      { task: "Helm: app deployed and managed with Helm charts", type: "skill" },
      { task: "ITPEC FE Exam PASSED ✓", type: "milestone" },
      { task: "JLPT N2 Exam attempted", type: "language" },
      { task: "GitHub: 6+ production-quality projects documented", type: "portfolio" },
      { task: "Income: ৳1,50,000+ monthly (consistent)", type: "income" },
    ],
    resources: [
      { name: "Kubernetes Official Docs Tutorial", url: "https://kubernetes.io/docs", note: "Interactive, free" },
      { name: "KodeKloud K8s Labs", url: "https://kodekloud.com", note: "Best hands-on K8s practice" },
      { name: "Helm Official Docs", url: "https://helm.sh/docs", note: "Free, complete" },
      { name: "BDITEC FE Past Papers", url: "https://bditec.gov.bd/past-exam-questions", note: "Download all years" },
    ],
    scenario: {
      best: "FE exam PASSED. JLPT N2 passed or close. Kubernetes in production. ৳1,80,000–৳2,00,000/month. Japan application phase can begin.",
      worst: "FE failed again (3rd attempt in April next year). Japan route delayed by 6 months but not closed. Keep building.",
      key: "Once the FE exam is passed, you have the legal right to work in Japan as an engineer without a bachelor's degree. This is the legal pivot point of the entire plan."
    }
  },
  {
    id: 7,
    label: "Phase 7",
    title: "AI & System Design Engineering",
    subtitle: "Build systems that think. Become the engineer companies fight over.",
    period: "Month 31–42",
    incomeTarget: "৳1,50,000–৳3,00,000+",
    incomeReality: { optimistic: "৳2,50,000–৳3,00,000+", expected: "৳1,00,000–৳1,80,000", disaster: "৳50,000–৳1,00,000 (AI market shifts)" },
    color: "#06B6D4",
    lightColor: "#e6fafd",
    icon: "🧠",
    mission: "This phase does not start from zero in AI. It starts from you — a full-stack developer and DevOps engineer — learning to deploy AI as a tool in production systems. That combination commands the highest rates in 2026.",
    systemsStatus: { degree: "Year 3–4, near completion", tech: "FastAPI + RAG + Agents + MLOps", japanese: "N2 achieved or near", income: "AI integration contracts", experience: "AI systems in production" },
    doList: [
      "Master FastAPI: async Python APIs, dependency injection, Pydantic models, auto-documentation",
      "Integrate OpenAI and Anthropic APIs: prompt engineering, function calling, cost management",
      "Learn LangChain / LlamaIndex for AI pipelines, agents, and RAG systems",
      "Learn Vector Databases: ChromaDB, Pinecone, pgvector (PostgreSQL extension)",
      "Build a complete RAG pipeline: PDF → chunk → embed → ChromaDB → LLM → grounded answer",
      "Build an AI agent with 3+ tools: web search, calculator, database query",
      "Learn Ollama: run local models (Llama 3, Mistral) — for clients who need data privacy",
      "Learn QLoRA fine-tuning on Google Colab — adapt models to specific domains",
      "Study System Design: monoliths, microservices, event-driven, queues, caching (ByteByteGo)",
      "Build a complete AI SaaS: auth + payments + RAG + analytics + CI/CD + monitoring",
    ],
    dontList: [
      "Do NOT try to become a data scientist — you are an AI Integration Engineer, not a researcher",
      "Do NOT ignore MLOps — deploying AI models uses all your DevOps skills, extend them",
      "Do NOT neglect cost management on AI APIs — uncontrolled token usage can drain budgets fast",
      "Do NOT build AI demos — build AI features that solve actual business problems",
    ],
    tips: [
      "Andrej Karpathy's 'Neural Networks: Zero to Hero' (YouTube) — the best conceptual AI foundation ever made, free",
      "FastAPI official tutorial (fastapi.tiangolo.com/tutorial) — complete it fully before building anything",
      "A RAG system for a company's documents is the #1 requested AI feature from businesses in 2026",
      "Google Colab Pro (~৳1,100/month) gives GPU access for fine-tuning — worth it for Phase 7",
      "A deployed RAG system solving a real business problem is worth ৳50,000–৳1,50,000 to a client",
      "LangGraph and CrewAI for agents — these are the emerging standards",
      "Stop selling code. Start selling solutions: 'AI Knowledge Base Builder' > 'React Developer'",
    ],
    tracker: [
      { task: "RAG pipeline: PDF → embed → query → grounded LLM answer", type: "portfolio" },
      { task: "AI agent: 3+ tools, multi-step task completion", type: "portfolio" },
      { task: "Local LLM via Ollama running offline (data privacy)", type: "skill" },
      { task: "QLoRA fine-tune on custom dataset via Colab", type: "skill" },
      { task: "Complete AI SaaS: auth + payments + RAG + monitoring", type: "portfolio" },
      { task: "FastAPI: production API with Swagger docs deployed", type: "skill" },
      { task: "Upwork: first AI integration contract secured", type: "income" },
      { task: "Bachelor's degree on track for completion", type: "milestone" },
    ],
    resources: [
      { name: "Karpathy — Neural Networks: Zero to Hero", url: "https://youtube.com", note: "Free YouTube" },
      { name: "FastAPI Official Tutorial", url: "https://fastapi.tiangolo.com/tutorial", note: "Free, complete" },
      { name: "Hugging Face Course", url: "https://huggingface.co/learn", note: "Free, transformers + fine-tuning" },
      { name: "LangChain Docs", url: "https://python.langchain.com/docs", note: "Official reference" },
      { name: "Google Colab Pro", url: "https://colab.research.google.com", note: "~৳1,100/month for GPU" },
    ],
    scenario: {
      best: "AI SaaS deployed with paying users. ৳2,00,000–৳2,50,000+/month from AI integration contracts. Degree nearing completion. Japan applications live.",
      worst: "Income at ৳1,50,000–৳2,00,000 from DevOps + full-stack. AI skills are additive, not replacement — the floor income is high regardless.",
      key: "The engineer who can design it, build it, deploy it, secure it, automate it, and integrate AI into it has no competition in Bangladesh's market."
    }
  },
  {
    id: 8,
    label: "Phase 8",
    title: "Japan Strike → Relocation",
    subtitle: "Present the package. Trigger the visa. Execute the move.",
    period: "Year 4–5 (2030–2031)",
    incomeTarget: "¥5.5M–¥7M JPY (first Japan job)",
    incomeReality: { optimistic: "¥6M–¥7M", expected: "¥4.5M–¥6M", disaster: "No offer — remote income continues" },
    longTermNote: "¥10M–¥15M+ is realistic after 8–12 years of career growth in Japan (Senior SRE / Platform Engineer / Cloud Architect) — not a first-job target.",
    color: "#EC4899",
    lightColor: "#fdf0f7",
    icon: "🇯🇵",
    mission: "You are not a desperate junior seeking a visa escape. You are an established engineer with verified international income, choosing to bring your skills to Japan. This framing is everything.",
    systemsStatus: { degree: "Bachelor's completed ✓ (or ITPEC FE passed ✓)", tech: "Full Stack + DevOps + AI", japanese: "N2/N3 achieved", income: "৳2,00,000+/month remotely", experience: "3+ years verifiable" },
    doList: [
      "Assemble the complete package: FE Certificate OR Bachelor's degree + 3yr portfolio + JLPT cert",
      "Build an undeniable GitHub portfolio: 6+ projects, all documented, all production-deployed",
      "Polish GitHub READMEs: architecture, CI/CD pipelines, pain points resolved, bottlenecks fixed",
      "Apply via TokyoDev (tokyodev.com) and Japan Dev (japan-dev.com) — built for English-speaking engineers",
      "Target specifically: Mercari, PayPay, Rakuten, HENNGE, Zeals — global-minded companies",
      "Only apply to companies that explicitly state 'Visa Sponsorship Available'",
      "Never mention you want to 'escape Bangladesh' — you are choosing Japan for professional growth",
      "Prepare for 3–4 round interviews: technical, system design, cultural fit",
      "Study Japanese work culture: nemawashi, ringi, team communication norms",
    ],
    dontList: [
      "Do NOT move to Japan on a Tourist Visa to job hunt — immigration scrutinizes this heavily",
      "Do NOT move on a Student Visa hoping to land a tech role — this leads to Izakaya work, not engineering",
      "Do NOT apply to legacy Japanese firms demanding N1 Japanese without sponsorship transparency",
      "Do NOT present your Upwork income as 'freelance gigs' — frame it as 'international product development'",
      "Do NOT apply without at minimum JLPT N3 — N2 is strongly preferred",
    ],
    tips: [
      "Mercari: 50% of their C2C engineers are non-Japanese. They sponsor visa, cover one-way flight, 1 month temp housing, moving allowance",
      "PayPay: 70M+ users, Japanese lessons on company time, specifically hires foreign SREs",
      "The narrative frame to recruiters: 'I am an established remote infrastructure engineer managing international deployments choosing to join your team' — not 'I want to come to Japan'",
      "TokyoDev and Japan Dev are purpose-built for this exact situation — use them exclusively for Japan applications",
      "Certificate of Eligibility (COE) processing takes 1–3 months — plan timeline accordingly",
      "The Izakaya trap is real: developer with 10yr PHP experience moved to Japan on student visa, tech stack outdated, no portfolio, stuck in restaurant work. Physical presence ≠ job offer",
      "JLPT N2 = massive advantage. N3 = competitive. N4 = minimum. N5 = not enough alone",
    ],
    tracker: [
      { task: "ITPEC FE Certificate obtained (or bachelor's degree)", type: "milestone" },
      { task: "GitHub: 6+ projects with full architecture documentation", type: "portfolio" },
      { task: "TokyoDev + Japan Dev profiles active", type: "milestone" },
      { task: "10+ Japan applications submitted", type: "milestone" },
      { task: "JLPT N2 (ideal) or N3 (minimum) certificate", type: "language" },
      { task: "Job offer received from Japan company ✓", type: "milestone" },
      { task: "Certificate of Eligibility (COE) processing started", type: "milestone" },
      { task: "Flight from Dhaka to Tokyo booked ✓", type: "milestone" },
    ],
    resources: [
      { name: "TokyoDev", url: "https://tokyodev.com", note: "Primary Japan job platform" },
      { name: "Japan Dev", url: "https://japan-dev.com", note: "Japan tech job listings" },
      { name: "Mercari Careers", url: "https://careers.mercari.com/en/work-in-japan", note: "Visa + relocation package" },
      { name: "PayPay SRE Role", url: "https://tokyodev.com/companies/paypay", note: "Foreign SRE hiring" },
      { name: "HENNGE", url: "https://hennge.com/global/recruit", note: "English-first, visa sponsor" },
    ],
    scenario: {
      best: "Mercari or PayPay offer at ¥5.5M–¥7M JPY (first-job range). Visa sponsored. Flight covered. Temporary housing provided. Dhaka → Tokyo executed. ¥10M–¥15M+ comes after years of growth in Japan.",
      worst: "FE exam failed entirely — Japan path via visa exemption closed. But: 3+ years of remote work at ৳2,00,000+/month continues. Skills are globally marketable to Singapore, UAE, EU digital nomad visas, or direct remote employment.",
      key: "Even the worst-case scenario produces a globally competitive engineer earning ৳2,00,000+/month in Dhaka. The Japan path is the ceiling, not the floor."
    }
  }
];

const INCOME_TRAJECTORY = [
  { phase: "Phase 0", period: "Now–2027", income: 0, label: "৳0", note: "Survival" },
  { phase: "Phase 1", period: "Month 1–3", income: 2500, label: "৳0–5K", note: "Expected" },
  { phase: "Phase 2", period: "Month 4–7", income: 10000, label: "৳5–15K", note: "Expected" },
  { phase: "Phase 3", period: "Month 8–11", income: 32000, label: "৳20–45K", note: "Expected" },
  { phase: "Phase 4", period: "Month 12–18", income: 45000, label: "৳30–60K", note: "Expected" },
  { phase: "Phase 5", period: "Month 19–24", income: 60000, label: "৳40–80K", note: "Expected" },
  { phase: "Phase 6", period: "Month 25–30", income: 70000, label: "৳40–100K", note: "Expected" },
  { phase: "Phase 7", period: "Month 31–42", income: 140000, label: "৳100–180K", note: "Expected" },
  { phase: "Japan", period: "Year 4–5", income: 250000, label: "¥4.5–6M", note: "First job (expected)" },
];

const SYSTEMS = ["Degree", "Tech Skills", "Japanese", "Income", "Experience"];

export default function MasterPlan() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [checkedItems, setCheckedItems] = useState({});

  const phase = PHASES[activePhase];

  const toggleCheck = (phaseId, taskIdx) => {
    const key = `${phaseId}-${taskIdx}`;
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getCheckedCount = (phaseId, tasks) => {
    return tasks.filter((_, i) => checkedItems[`${phaseId}-${i}`]).length;
  };

  const maxIncome = 350000;

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#0a0a0f", minHeight: "100vh", color: "#e8e8f0" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0a0a0f 0%, #12121e 100%)", borderBottom: "1px solid #1e1e2e", padding: "24px 20px 0", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: 3, color: "#6C63FF", textTransform: "uppercase", marginBottom: 4, fontWeight: 600 }}>The Unbreakable Master Plan</div>
              <h1 style={{ margin: 0, fontSize: "clamp(18px, 3vw, 26px)", fontWeight: 800, background: "linear-gradient(135deg, #fff 0%, #a0a0c0 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Dhaka → Global Engineer → Tokyo
              </h1>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <div style={{ background: "#1e1e2e", padding: "6px 12px", borderRadius: 6, fontSize: 11 }}>
                <span style={{ color: "#6C63FF", fontWeight: 700 }}>First Japan Job</span>
                <span style={{ color: "#a0a0c0", marginLeft: 6 }}>¥5M–7M JPY</span>
              </div>
              <div style={{ background: "#1e1e2e", padding: "6px 12px", borderRadius: 6, fontSize: 11 }}>
                <span style={{ color: "#FF9F43", fontWeight: 700 }}>Long-term (8–12yr)</span>
                <span style={{ color: "#a0a0c0", marginLeft: 6 }}>¥10M–15M+ JPY</span>
              </div>
              <div style={{ background: "#1e1e2e", padding: "6px 12px", borderRadius: 6, fontSize: 11 }}>
                <span style={{ color: "#00C896", fontWeight: 700 }}>Timeline</span>
                <span style={{ color: "#a0a0c0", marginLeft: 6 }}>4–5 Years</span>
              </div>
            </div>
          </div>

          {/* Phase selector */}
          <div style={{ display: "flex", gap: 4, overflowX: "auto", paddingBottom: 0 }}>
            {PHASES.map((p, i) => (
              <button
                key={i}
                onClick={() => { setActivePhase(i); setActiveTab("overview"); }}
                style={{
                  padding: "8px 14px",
                  background: activePhase === i ? p.color : "transparent",
                  color: activePhase === i ? "#fff" : "#666",
                  border: "none",
                  borderRadius: "6px 6px 0 0",
                  cursor: "pointer",
                  fontSize: 11,
                  fontWeight: activePhase === i ? 700 : 500,
                  whiteSpace: "nowrap",
                  transition: "all 0.2s",
                  borderBottom: activePhase === i ? `2px solid ${p.color}` : "2px solid transparent",
                  flexShrink: 0,
                }}
              >
                {p.icon} {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 40px" }}>

        {/* Phase hero */}
        <div style={{ background: `linear-gradient(135deg, ${phase.color}22 0%, #12121e 100%)`, border: `1px solid ${phase.color}44`, borderTop: "none", borderRadius: "0 0 12px 12px", padding: "24px", marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: "clamp(20px, 4vw, 32px)", marginBottom: 4 }}>{phase.icon}</div>
              <h2 style={{ margin: "0 0 4px", fontSize: "clamp(16px, 2.5vw, 22px)", fontWeight: 800, color: "#fff" }}>{phase.title}</h2>
              <div style={{ color: phase.color, fontSize: 13, fontWeight: 600 }}>{phase.subtitle}</div>
              <div style={{ color: "#666", fontSize: 12, marginTop: 4 }}>{phase.period} · Income Target: <span style={{ color: "#00C896", fontWeight: 700 }}>{phase.incomeTarget}</span></div>
            </div>
            <div style={{ background: "#0a0a0f88", borderRadius: 8, padding: "12px 16px", maxWidth: 340 }}>
              <div style={{ fontSize: 11, color: "#666", marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>Mission</div>
              <div style={{ fontSize: 12, color: "#c0c0d8", lineHeight: 1.6 }}>{phase.mission}</div>
            </div>
          </div>

          {/* Systems status */}
          <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
            {Object.entries(phase.systemsStatus).map(([sys, status]) => (
              <div key={sys} style={{ background: "#0a0a0f", border: `1px solid ${phase.color}33`, borderRadius: 6, padding: "6px 10px", fontSize: 10 }}>
                <span style={{ color: phase.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>{sys}</span>
                <div style={{ color: "#a0a0c0", marginTop: 2 }}>{status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab navigation */}
        <div style={{ display: "flex", gap: 4, marginBottom: 20, borderBottom: "1px solid #1e1e2e", paddingBottom: 0, overflowX: "auto" }}>
          {[
            { id: "overview", label: "📋 Do's & Don'ts" },
            { id: "tracker", label: "✅ Tracker" },
            { id: "tips", label: "💡 Tips" },
            { id: "resources", label: "📚 Resources" },
            { id: "scenarios", label: "🎯 Scenarios" },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "8px 14px",
                background: "transparent",
                color: activeTab === tab.id ? phase.color : "#555",
                border: "none",
                borderBottom: activeTab === tab.id ? `2px solid ${phase.color}` : "2px solid transparent",
                cursor: "pointer",
                fontSize: 12,
                fontWeight: activeTab === tab.id ? 700 : 500,
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === "overview" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {/* Do's */}
            <div style={{ background: "#12121e", border: "1px solid #00C89633", borderRadius: 12, padding: 20 }}>
              <div style={{ color: "#00C896", fontWeight: 800, fontSize: 13, marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>✅ Do This</div>
              {phase.doList.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
                  <div style={{ width: 6, height: 6, background: "#00C896", borderRadius: "50%", marginTop: 5, flexShrink: 0 }} />
                  <div style={{ fontSize: 12, color: "#c0c0d8", lineHeight: 1.6 }}>{item}</div>
                </div>
              ))}
            </div>

            {/* Don'ts */}
            <div style={{ background: "#12121e", border: "1px solid #FF6B6B33", borderRadius: 12, padding: 20 }}>
              <div style={{ color: "#FF6B6B", fontWeight: 800, fontSize: 13, marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>🚫 Don't Do This</div>
              {phase.dontList.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
                  <div style={{ width: 6, height: 6, background: "#FF6B6B", borderRadius: "50%", marginTop: 5, flexShrink: 0 }} />
                  <div style={{ fontSize: 12, color: "#c0c0d8", lineHeight: 1.6 }}>{item}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "tracker" && (
          <div style={{ background: "#12121e", border: `1px solid ${phase.color}33`, borderRadius: 12, padding: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div style={{ color: phase.color, fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: 1 }}>Phase Tracker</div>
              <div style={{ fontSize: 12, color: "#666" }}>
                {getCheckedCount(phase.id, phase.tracker)} / {phase.tracker.length} complete
              </div>
            </div>
            <div style={{ background: "#0a0a0f", borderRadius: 6, height: 4, marginBottom: 16 }}>
              <div style={{ background: phase.color, height: "100%", borderRadius: 6, width: `${(getCheckedCount(phase.id, phase.tracker) / phase.tracker.length) * 100}%`, transition: "width 0.3s" }} />
            </div>
            {phase.tracker.map((item, i) => {
              const key = `${phase.id}-${i}`;
              const checked = checkedItems[key];
              const tagColors = { milestone: "#6C63FF", skill: "#00C896", income: "#FF9F43", language: "#4ECDC4", portfolio: "#A855F7" };
              return (
                <div
                  key={i}
                  onClick={() => toggleCheck(phase.id, i)}
                  style={{ display: "flex", gap: 12, marginBottom: 10, alignItems: "center", cursor: "pointer", padding: "10px 12px", borderRadius: 8, background: checked ? `${phase.color}11` : "#0a0a0f", border: `1px solid ${checked ? phase.color + "44" : "#1e1e2e"}`, transition: "all 0.2s" }}
                >
                  <div style={{ width: 20, height: 20, borderRadius: 5, border: `2px solid ${checked ? phase.color : "#333"}`, background: checked ? phase.color : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.2s" }}>
                    {checked && <span style={{ color: "#fff", fontSize: 11, fontWeight: 800 }}>✓</span>}
                  </div>
                  <div style={{ flex: 1, fontSize: 12, color: checked ? "#888" : "#c0c0d8", textDecoration: checked ? "line-through" : "none" }}>{item.task}</div>
                  <div style={{ background: `${tagColors[item.type]}22`, color: tagColors[item.type], fontSize: 9, padding: "2px 6px", borderRadius: 4, fontWeight: 700, textTransform: "uppercase", flexShrink: 0 }}>{item.type}</div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "tips" && (
          <div style={{ background: "#12121e", border: `1px solid ${phase.color}33`, borderRadius: 12, padding: 20 }}>
            <div style={{ color: phase.color, fontWeight: 800, fontSize: 13, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>💡 Insider Tips & Warnings</div>
            {phase.tips.map((tip, i) => (
              <div key={i} style={{ display: "flex", gap: 12, marginBottom: 14, padding: "12px 14px", background: "#0a0a0f", borderRadius: 8, border: `1px solid ${phase.color}22` }}>
                <div style={{ fontSize: 16, flexShrink: 0 }}>💡</div>
                <div style={{ fontSize: 12, color: "#c8c8e0", lineHeight: 1.7 }}>{tip}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "resources" && (
          <div style={{ background: "#12121e", border: `1px solid ${phase.color}33`, borderRadius: 12, padding: 20 }}>
            <div style={{ color: phase.color, fontWeight: 800, fontSize: 13, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>📚 Exact Resources — In Order</div>
            {phase.resources.map((r, i) => (
              <div key={i} style={{ display: "flex", gap: 12, marginBottom: 10, padding: "12px 14px", background: "#0a0a0f", borderRadius: 8, border: "1px solid #1e1e2e", alignItems: "center" }}>
                <div style={{ background: phase.color, color: "#fff", width: 24, height: 24, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800, flexShrink: 0 }}>{i + 1}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#e0e0f0" }}>{r.name}</div>
                  <div style={{ fontSize: 11, color: "#666", marginTop: 2 }}>{r.note}</div>
                </div>
                <div style={{ fontSize: 11, color: phase.color, fontFamily: "monospace" }}>{r.url.replace("https://", "")}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "scenarios" && (
          <div style={{ display: "grid", gap: 12 }}>
            <div style={{ background: "#12121e", border: "1px solid #00C89633", borderRadius: 12, padding: 20 }}>
              <div style={{ color: "#00C896", fontWeight: 800, fontSize: 12, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>🏆 Best Case</div>
              <div style={{ fontSize: 13, color: "#c0c0d8", lineHeight: 1.7 }}>{phase.scenario.best}</div>
            </div>
            <div style={{ background: "#12121e", border: "1px solid #FF9F4333", borderRadius: 12, padding: 20 }}>
              <div style={{ color: "#FF9F43", fontWeight: 800, fontSize: 12, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>⚠️ Worst Case</div>
              <div style={{ fontSize: 13, color: "#c0c0d8", lineHeight: 1.7 }}>{phase.scenario.worst}</div>
            </div>
            <div style={{ background: "#12121e", border: `1px solid ${phase.color}44`, borderRadius: 12, padding: 20 }}>
              <div style={{ color: phase.color, fontWeight: 800, fontSize: 12, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>🔑 The Key Insight</div>
              <div style={{ fontSize: 13, color: "#c0c0d8", lineHeight: 1.7 }}>{phase.scenario.key}</div>
            </div>
          </div>
        )}

        {/* Income trajectory chart */}
        <div style={{ background: "#12121e", border: "1px solid #1e1e2e", borderRadius: 12, padding: 20, marginTop: 24 }}>
          <div style={{ color: "#fff", fontWeight: 800, fontSize: 13, marginBottom: 4 }}>Income Trajectory — Expected Values (Not Best-Case)</div>
          <div style={{ color: "#555", fontSize: 11, marginBottom: 16 }}>These are the realistic midpoints. Optimistic cases can be 1.5–2x higher. Disaster cases can be zero for months. Plan for the middle.</div>
          <div style={{ display: "flex", gap: 4, alignItems: "flex-end", height: 120 }}>
            {INCOME_TRAJECTORY.map((item, i) => {
              const height = Math.max((item.income / maxIncome) * 100, 4);
              const isActive = activePhase === i || (activePhase === 8 && i === 8);
              const phaseColor = PHASES[Math.min(i, PHASES.length - 1)]?.color || "#6C63FF";
              return (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <div style={{ fontSize: 9, color: "#555", textAlign: "center" }}>{item.label}</div>
                  <div style={{ width: "100%", height: `${height}%`, background: isActive ? phaseColor : phaseColor + "55", borderRadius: "4px 4px 0 0", transition: "all 0.3s", minHeight: 4 }} />
                  <div style={{ fontSize: 8, color: "#444", textAlign: "center", lineHeight: 1.2 }}>{item.phase}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ITPEC FE Warning */}
        <div style={{ background: "#1a1020", border: "1px solid #A855F744", borderRadius: 12, padding: 20, marginTop: 16 }}>
          <div style={{ color: "#A855F7", fontWeight: 800, fontSize: 13, marginBottom: 8 }}>⚠️ Critical: The ITPEC FE Exam — Your Japan Visa Key</div>
          <div style={{ fontSize: 12, color: "#c0c0d8", lineHeight: 1.8 }}>
            If you do NOT complete a bachelor's degree, the <strong style={{ color: "#fff" }}>ITPEC Fundamental Information Technology Engineer (FE) Exam</strong> is the <em>only</em> legal mechanism to obtain a Japanese Engineer visa without 10 years of experience. Bangladesh pass rate: 9.2%–25.4%. It requires the same discipline as a 4-year degree. Register via BDITEC (bditec.gov.bd). Exams in April and October. First attempt: Year 2 (recon). Pass target: Year 3. Treat it like your life depends on it — because the Japan path does.
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
            <div style={{ background: "#0a0a0f", padding: "6px 12px", borderRadius: 6, fontSize: 11 }}>📋 Morning: 80 MCQ, 150min, 60% pass (discrete math, networks, strategy)</div>
            <div style={{ background: "#0a0a0f", padding: "6px 12px", borderRadius: 6, fontSize: 11 }}>💻 Afternoon: Practical scenarios, 150min, 60% pass (algorithms, SQL, pseudo-code)</div>
          </div>
        </div>

        {/* Income Reality — Confidence Levels */}
        <div style={{ background: "#12121e", border: "1px solid #FF9F4333", borderRadius: 12, padding: 20, marginTop: 16 }}>
          <div style={{ color: "#FF9F43", fontWeight: 800, fontSize: 13, marginBottom: 6 }}>📊 Income Reality — Three Scenarios Per Phase</div>
          <div style={{ color: "#888", fontSize: 11, marginBottom: 14 }}>Every income number in this plan has three faces. Plan for the middle. Hope for the top. Survive the bottom.</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 10 }}>
            {[
              { label: "🟢 Optimistic (20%)", color: "#00C896", desc: "Everything goes well. No burnout, no emergencies, no dry spells. Clients respond. Exams pass first try." },
              { label: "🟡 Expected (60%)", color: "#FF9F43", desc: "Some setbacks. Some delays. Average luck. A few months of zero income. One exam retake. This is the real planning number." },
              { label: "🔴 Disaster (20%)", color: "#FF6B6B", desc: "Failed exam. No clients for months. Family emergency. Illness. Market downturn. You keep going anyway." },
            ].map((s, i) => (
              <div key={i} style={{ background: "#0a0a0f", border: `1px solid ${s.color}33`, borderRadius: 8, padding: 12 }}>
                <div style={{ color: s.color, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>{s.label}</div>
                <div style={{ color: "#a0a0c0", fontSize: 10, lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 12, padding: "10px 14px", background: "#0a0a0f", borderRadius: 8, border: "1px solid #1e1e2e" }}>
            <div style={{ color: "#888", fontSize: 11, lineHeight: 1.6 }}>
              <strong style={{ color: "#fff" }}>Your rule:</strong> Take the lowest number in any range. Divide by 2. That's your planning income. If the plan still works at that number, it's robust. If it breaks, it was never a plan — it was a wish.
            </div>
          </div>
        </div>

        {/* Freelancing Reality Check */}
        <div style={{ background: "#12121e", border: "1px solid #EC489933", borderRadius: 12, padding: 20, marginTop: 16 }}>
          <div style={{ color: "#EC4899", fontWeight: 800, fontSize: 13, marginBottom: 6 }}>⚠️ Freelancing Reality Check — Skill Is Not Enough</div>
          <div style={{ fontSize: 12, color: "#c0c0d8", lineHeight: 1.8, marginBottom: 12 }}>
            The market rewards <strong style={{ color: "#fff" }}>skill × communication × reputation</strong> — not skill alone. If any one factor is zero, income is zero. You can study 1,000 hours and still have zero clients. Meanwhile someone with half your skill can get clients through communication, timing, networking, niche selection, and luck.
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10, marginBottom: 12 }}>
            <div style={{ background: "#0a0a0f", border: "1px solid #00C89633", borderRadius: 8, padding: 12 }}>
              <div style={{ color: "#00C896", fontWeight: 700, fontSize: 11, marginBottom: 4 }}>✅ Freelancing as Bonus Lane</div>
              <div style={{ color: "#a0a0c0", fontSize: 10, lineHeight: 1.5 }}>Great when it works. Builds portfolio + income. But unreliable as the only bridge to Japan.</div>
            </div>
            <div style={{ background: "#0a0a0f", border: "1px solid #6C63FF33", borderRadius: 8, padding: 12 }}>
              <div style={{ color: "#6C63FF", fontWeight: 700, fontSize: 11, marginBottom: 4 }}>✅ Junior Job → Experience → Japan (More Reliable)</div>
              <div style={{ color: "#a0a0c0", fontSize: 10, lineHeight: 1.5 }}>Junior job → 2–3 years experience → Japan application. Slower start, much higher probability. The market often produces this path more reliably than pure freelancing.</div>
            </div>
          </div>
          <div style={{ padding: "10px 14px", background: "#0a0a0f", borderRadius: 8, border: "1px solid #1e1e2e" }}>
            <div style={{ color: "#888", fontSize: 11, lineHeight: 1.6 }}>
              <strong style={{ color: "#fff" }}>By 2028–2029 probability:</strong> ৳20k/mo online — High. ৳50k/mo — Moderate. ৳70k/mo — Possible but far from guaranteed. ৳150k/mo — Low without specialization. Treat freelancing as a bonus lane, not the only bridge across the river. 🌉
            </div>
          </div>
        </div>

        {/* Japan Salary Reality */}
        <div style={{ background: "#12121e", border: "1px solid #4ECDC433", borderRadius: 12, padding: 20, marginTop: 16 }}>
          <div style={{ color: "#4ECDC4", fontWeight: 800, fontSize: 13, marginBottom: 6 }}>🇯🇵 Japan Salary Reality — First Job vs. Long-Term Destination</div>
          <div style={{ fontSize: 12, color: "#c0c0d8", lineHeight: 1.8, marginBottom: 12 }}>
            ¥10M–¥15M JPY is <strong style={{ color: "#FF6B6B" }}>not a normal first-job engineer salary</strong>. That range is typically senior engineer, staff engineer, SRE specialist, platform engineer, cloud architect, or engineering manager — often with 5–10+ years of experience. Not 3 years.
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10 }}>
            <div style={{ background: "#0a0a0f", border: "1px solid #00C89633", borderRadius: 8, padding: 12 }}>
              <div style={{ color: "#00C896", fontWeight: 700, fontSize: 11, marginBottom: 4 }}>First Japan Job (Realistic)</div>
              <div style={{ color: "#a0a0c0", fontSize: 10, lineHeight: 1.5 }}>¥4.5M–¥6M expected. ¥6M–¥7M optimistic. Achievable with FE cert + N2/N3 + 3yr portfolio.</div>
            </div>
            <div style={{ background: "#0a0a0f", border: "1px solid #FF9F4333", borderRadius: 8, padding: 12 }}>
              <div style={{ color: "#FF9F43", fontWeight: 700, fontSize: 11, marginBottom: 4 }}>Long-Term (8–12 Years)</div>
              <div style={{ color: "#a0a0c0", fontSize: 10, lineHeight: 1.5 }}>¥10M–¥15M+ after career growth into Senior SRE / Platform Engineer / Cloud Architect. This is the ceiling, not the floor.</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: 24, color: "#333", fontSize: 11 }}>
          Fusion of: Vison.md · Mission.md · Roadmap.md · Career Path to Japan · Final.md · Market Research 2026
        </div>
      </div>
    </div>
  );
}
