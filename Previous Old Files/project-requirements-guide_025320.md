# Project Requirements Guide: Dhaka → Global Engineer → Tokyo

**Project:** Interactive Career Roadmap Dashboard (`final.jsx`)
**Generated:** June 18, 2026
**Location:** `/media/yeasin/Storage/Claude/`

---

## Table of Contents

1. [Project Summary](#1-project-summary)
2. [Source Materials (Input Files)](#2-source-materials-input-files)
3. [Primary Deliverable](#3-primary-deliverable)
4. [External Review & Correction Files](#4-external-review--correction-files)
5. [Runtime & Technical Dependencies](#5-runtime--technical-dependencies)
6. [Data Layer Requirements](#6-data-layer-requirements)
7. [UI/UX Requirements](#7-uiux-requirements)
8. [External Services & URLs Referenced](#8-external-services--urls-referenced)
9. [Certification & Exam Dependencies](#9-certification--exam-dependencies)
10. [Financial Data Embedded in the App](#10-financial-data-embedded-in-the-app)
11. [Build & Run Instructions](#11-build--run-instructions)
12. [Optional Enhancements (Not Required)](#12-optional-enhancements-not-required)

---

## 1. Project Summary

A single-file React component that renders an interactive, dark-themed career roadmap dashboard for a Bangladeshi student aiming to become a Japan-based AI/DevOps engineer. The app covers 9 phases across 4–5 years, with income reality checks, a tracker, tips, resources, and scenarios per phase.

**No build tools. No CSS framework. No backend. Just React + `useState`.**

---

## 2. Source Materials (Input Files)

These files feed into `final.jsx` and must exist in `src/` for the project context to be complete. The app does not import them at runtime — they are reference material that shaped the data inside `final.jsx`.

| File | Path | Role | Required? |
|------|------|------|-----------|
| `Vison.md` | `src/Vison.md` | Original 5-phase technical roadmap; phase structure, skill ordering, month-by-month execution plans | Yes — source of phase structure |
| `Mission.md` | `src/Mission.md` | Strategic overlay: 5-subsystem model, DevOps-first orientation, honest income philosophy | Yes — source of systems thinking |
| `Roadmap.md` | `src/Roadmap.md` | Japan market research: salary data, visa rules, TokyoDev survey | Yes — source of Japan salary data |
| `Personalized Roadmap.md` | `src/Personalized Roadmap.md` | User-specific context: existing Python projects, NAS interest, daily schedule template | Yes — source of personalization |
| `Career Path to Japan.docx` | `src/Career Path to Japan.docx` | Binary reference document on Japan career path | Informational only |
| `Final.md` | `src/Final.md` | Merged planning document combining all above | Informational only |

---

## 3. Primary Deliverable

### `src/final.jsx` — The Interactive Dashboard

- **Type:** Single-file React component (default export)
- **Language:** JSX (JavaScript XML)
- **Lines:** 916
- **Size:** ~57,752 bytes
- **Export:** `export default function MasterPlan()`
- **Runtime dependencies:** React with `useState` hook only

The file contains three top-level data structures:

| Structure | Type | Purpose |
|-----------|------|---------|
| `PHASES` | Array of 9 objects | All phase data (0–8) |
| `INCOME_TRAJECTORY` | Array of 9 objects | Bar chart data points |
| `SYSTEMS` | Array of 5 strings | Subsystem labels |

Each `PHASES` entry contains these fields:

```
id, label, title, subtitle, period, incomeTarget, incomeReality
  {optimistic, expected, disaster}, color, lightColor, icon,
mission, systemsStatus {degree, tech, japanese, income, experience},
doList[], dontList[], tips[], tracker[{task, type}],
resources[{name, url, note}], scenario{best, worst, key}
```

---

## 4. External Review & Correction Files

These files document the feedback loop that shaped the income numbers and reality checks in `final.jsx`. They are not imported at runtime but are essential project context.

| File | Path | Role |
|------|------|------|
| `ChatGPT-Responce-01.md` | `src/ChatGPT-Responce-01.md` | First external review — identified over-optimistic income, wrong Japan salary target, freelancing risk |
| `my-answre.md` | `src/my-answre.md` | User's self-correction: "take the lowest number, divide by 2" — the reality tax |
| `ChatGPT-Responce-02.md` | `src/ChatGPT-Responce-02.md` | Second external review — refined into 3-tier confidence model (Optimistic/Expected/Disaster) |
| `personalized_roadmap_Yeasin.md` | `results/personalized_roadmap_Yeasin.md` | Earlier generated personalized roadmap (superseded) |

---

## 5. Runtime & Technical Dependencies

### Required

| Dependency | Version | Purpose | Install |
|------------|---------|---------|---------|
| `react` | ^17.0.0 or ^18.0.0 | Core React library | `npm install react` |
| `react-dom` | ^17.0.0 or ^18.0.0 | DOM rendering | `npm install react-dom` |

### Bundler (pick one)

| Tool | Purpose | Notes |
|------|---------|-------|
| Vite | Dev server + build | Recommended — fast, zero-config for React |
| Create React App | Dev server + build | Heavier, but works |
| Parcel | Dev server + build | Zero-config |
| Or: plain HTML + CDN | No build step | Load React via `<script>` tags from unpkg |

### Not Required

- No CSS framework (all inline styles)
- No state management library (only `useState`)
- No routing library (single page)
- No charting library (bar chart built with raw CSS flexbox)
- No testing library (no tests)
- No TypeScript (plain JSX)
- No backend / API / database
- No deployment service (can run locally or be deployed anywhere static)

---

## 6. Data Layer Requirements

All data is hardcoded inline in `final.jsx`. There is no data fetching, no API calls, no external data sources at runtime.

### PHASES Array (9 phases)

| Phase ID | Label | Time Period | Income Target |
|----------|-------|-------------|---------------|
| 0 | Right Now → HSC 2027 | Now → Mid-2027 | ৳0 |
| 1 | Frontend Foundations | Post-HSC → Month 3 | ৳0–৳15,000 |
| 2 | Modern Full-Stack | Month 4–7 | ৳10,000–৳40,000 |
| 3 | Professional SWE | Month 8–11 | ৳30,000–৳80,000 |
| 4 | Cloud Foundation | Month 12–18 | ৳50,000–৳1,20,000 |
| 5 | Containers + CI/CD | Month 19–24 | ৳80,000–৳1,50,000 |
| 6 | IaC + Kubernetes | Month 25–30 | ৳1,00,000–৳2,00,000 |
| 7 | AI & System Design | Month 31–42 | ৳1,50,000–৳3,00,000+ |
| 8 | Japan Strike → Relocation | Year 4–5 (2030–2031) | ¥5.5M–¥7M JPY |

### INCOME_TRAJECTORY Array (expected values for bar chart)

| Phase | Expected Value (BDT) | Label |
|-------|---------------------|-------|
| Phase 0 | 0 | ৳0 |
| Phase 1 | 2,500 | ৳0–5K |
| Phase 2 | 10,000 | ৳5–15K |
| Phase 3 | 32,000 | ৳20–45K |
| Phase 4 | 45,000 | ৳30–60K |
| Phase 5 | 60,000 | ৳40–80K |
| Phase 6 | 70,000 | ৳40–100K |
| Phase 7 | 140,000 | ৳100–180K |
| Japan | 250,000 | ¥4.5–6M |

### Tracker Item Types (tag colors)

| Type | Color | Hex |
|------|-------|-----|
| milestone | Purple | `#6C63FF` |
| skill | Green | `#00C896` |
| income | Orange | `#FF9F43` |
| language | Teal | `#4ECDC4` |
| portfolio | Violet | `#A855F7` |

---

## 7. UI/UX Requirements

### Layout

- **Max width:** 1100px, centered
- **Background:** `#0a0a0f` (near-black)
- **Text color:** `#e8e8f0`
- **Font:** `'Inter', system-ui, sans-serif`
- **Responsive:** Uses `clamp()` for font sizes, `flex-wrap` for layouts, `minmax()` for grids

### Components

1. **Sticky Header**
   - Subtitle: "The Unbreakable Master Plan"
   - Title: "Dhaka → Global Engineer → Tokyo" (gradient text)
   - Three info badges: First Japan Job (¥5M–7M), Long-term (¥10M–15M+), Timeline (4–5 Years)
   - Phase selector tabs (9 buttons, color-coded per phase)

2. **Phase Hero**
   - Icon, title, subtitle, period, income target
   - Mission statement (dark overlay box)
   - 5-subsystem status badges (Degree, Tech Skills, Japanese, Income, Experience)

3. **Tabbed Content Area** (5 tabs)
   - **Do's & Don'ts** — two-column grid, green dots for Do, red dots for Don't
   - **Tracker** — interactive checkboxes with progress bar, colored type tags
   - **Tips** — cards with phase-colored borders
   - **Resources** — numbered list with name, note, URL
   - **Scenarios** — Best Case (green), Worst Case (orange), Key Insight (phase color)

4. **Income Trajectory Chart**
   - CSS flexbox bar chart (no charting library)
   - Height mapped to `maxIncome = 350000`
   - Active phase highlighted in full color, inactive in 55% opacity

5. **ITPEC FE Warning Callout**
   - Purple border, explains the exam's role as Japan visa key
   - Morning session: 80 MCQ, 150min, 60% pass
   - Afternoon session: practical scenarios, 150min, 60% pass

6. **Income Reality Panel** (orange border)
   - Three scenarios: Optimistic (20%), Expected (60%), Disaster (20%)
   - User's "halving rule" callout

7. **Freelancing Reality Check** (pink border)
   - Skill × communication × reputation formula
   - Freelancing as bonus lane vs junior job path
   - 2028–2029 probability table

8. **Japan Salary Reality** (teal border)
   - First job: ¥4.5M–¥6M expected
   - Long-term (8–12yr): ¥10M–¥15M+

9. **Footer**
   - Source file attribution line

### Color Palette (per phase)

| Phase | Color | Hex |
|-------|-------|-----|
| 0 | Purple | `#6C63FF` |
| 1 | Red | `#FF6B6B` |
| 2 | Green | `#00C896` |
| 3 | Orange | `#FF9F43` |
| 4 | Teal | `#4ECDC4` |
| 5 | Violet | `#A855F7` |
| 6 | Deep Orange | `#F97316` |
| 7 | Cyan | `#06B6D4` |
| 8 | Pink | `#EC4899` |

---

## 8. External Services & URLs Referenced

The app displays these URLs in the Resources tab. They are not fetched — just shown as text.

### Phase 0 Resources
| Name | URL |
|------|-----|
| Automate the Boring Stuff with Python | https://automatetheboringstuff.com |
| Crash Course Computer Science | https://youtube.com |
| Linux Journey | https://linuxjourney.com |
| Git & GitHub — freeCodeCamp | https://youtube.com |
| MDN HTTP Guide | https://developer.mozilla.org |

### Phase 1 Resources
| Name | URL |
|------|-----|
| The Odin Project | https://theodinproject.com |
| Kevin Powell CSS — YouTube | https://youtube.com |
| JavaScript.info | https://javascript.info |
| MDN Web Docs | https://developer.mozilla.org |
| Netlify | https://netlify.com |

### Phase 2 Resources
| Name | URL |
|------|-----|
| Next.js Official Learn | https://nextjs.org/learn |
| TypeScript Handbook | https://typescriptlang.org/docs |
| Prisma Docs | https://prisma.io/docs |
| Tailwind CSS Docs | https://tailwindcss.com/docs |
| Railway.app | https://railway.app |

### Phase 3 Resources
| Name | URL |
|------|-----|
| OWASP Top 10 | https://owasp.org/Top10 |
| Redis Crash Course — Traversy Media | https://youtube.com |
| Stripe Official Docs | https://stripe.com/docs |
| Docker for Web Developers — Bret Fisher | https://udemy.com |
| Web Dev Simplified — JWT Auth | https://youtube.com |

### Phase 4 Resources
| Name | URL |
|------|-----|
| Adrian Cantrill AWS SAA | https://learn.cantrill.io |
| KodeKloud | https://kodekloud.com |
| Terraform: Up & Running | https://amazon.com |
| Linux Command Line — William Shotts | https://linuxcommand.org |
| BDITEC — IP Exam Resources | https://bditec.gov.bd |

### Phase 5 Resources
| Name | URL |
|------|-----|
| TechWorld with Nana — YouTube | https://youtube.com |
| GitHub Actions Docs | https://docs.github.com/actions |
| BDITEC Past Exam Papers | https://bditec.gov.bd |
| ITPEC Learning Materials | https://itpec.org/about/learning-materials.html |
| Lightworks e-learning | https://itpec.org |

### Phase 6 Resources
| Name | URL |
|------|-----|
| Kubernetes Official Docs Tutorial | https://kubernetes.io/docs |
| KodeKloud K8s Labs | https://kodekloud.com |
| Helm Official Docs | https://helm.sh/docs |
| BDITEC FE Past Papers | https://bditec.gov.bd/past-exam-questions |

### Phase 7 Resources
| Name | URL |
|------|-----|
| Karpathy — Neural Networks: Zero to Hero | https://youtube.com |
| FastAPI Official Tutorial | https://fastapi.tiangolo.com/tutorial |
| Hugging Face Course | https://huggingface.co/learn |
| LangChain Docs | https://python.langchain.com/docs |
| Google Colab Pro | https://colab.research.google.com |

### Phase 8 Resources
| Name | URL |
|------|-----|
| TokyoDev | https://tokyodev.com |
| Japan Dev | https://japan-dev.com |
| Mercari Careers | https://careers.mercari.com/en/work-in-japan |
| PayPay SRE Role | https://tokyodev.com/companies/paypay |
| HENNGE | https://hennge.com/global/recruit |

---

## 9. Certification & Exam Dependencies

These are real-world exams referenced in the app with specific details. They are not part of the codebase but are critical to the plan the app presents.

### JLPT (Japanese Language Proficiency Test)

| Level | When Targeted | Where |
|-------|--------------|-------|
| N5 | Phase 0 | Foundational Japanese |
| N4 | Phase 1 | Basic Japanese |
| N3 | Phase 2–3 | Intermediate Japanese |
| N2 | Phase 5–6 | Advanced Japanese — opens mid-sized Japanese tech companies |
| N1 | Not in plan | Required only by legacy Japanese firms |

### ITPEC (Information Technology Engineers Examination)

| Exam | Full Name | Role in Plan | Pass Rate (BDT) | Exam Sittings |
|------|-----------|--------------|-----------------|--------------|
| IP | IT Passport Exam (Level 1) | Primer for FE exam | — | October |
| FE | Fundamental Information Technology Engineer | **Japan visa key** — legal mechanism to obtain Engineer visa without bachelor's degree | 9.2%–25.4% | April + October |

**FE Exam Structure:**
- Morning Session: 80 MCQ, 150 minutes, 60% to pass (discrete math, networks, business strategy)
- Afternoon Session: Practical scenarios, 150 minutes, 60% to pass (algorithms, data structures, SQL, pseudo-code)

### AWS Certification

| Cert | Full Name | Role | Cost |
|------|-----------|------|------|
| SAA-C03 | AWS Solutions Architect Associate | Makes CV credible to Japanese recruiters; globally recognized in Japan | ~৳16,000 |

---

## 10. Financial Data Embedded in the App

### Income Reality Per Phase (3-Tier Model)

| Phase | Optimistic | Expected | Disaster |
|-------|-----------|----------|----------|
| Phase 0 | ৳0 | ৳0 | ৳0 |
| Phase 1 | ৳5,000–৳15,000 | ৳0–৳5,000 | ৳0 (no clients yet) |
| Phase 2 | ৳20,000–৳40,000 | ৳5,000–৳15,000 | ৳0–৳5,000 (long client drought) |
| Phase 3 | ৳50,000–৳80,000 | ৳20,000–৳45,000 | ৳0–৳20,000 (no clients for months) |
| Phase 4 | ৳80,000–৳1,20,000 | ৳30,000–৳60,000 | ৳10,000–৳30,000 (slow months) |
| Phase 5 | ৳1,20,000–৳1,50,000 | ৳40,000–৳80,000 | ৳15,000–৳40,000 (client gaps) |
| Phase 6 | ৳1,50,000–৳2,00,000 | ৳40,000–৳1,00,000 | ৳20,000–৳50,000 (market dry spells) |
| Phase 7 | ৳2,50,000–৳3,00,000+ | ৳1,00,000–৳1,80,000 | ৳50,000–৳1,00,000 (AI market shifts) |
| Phase 8 | ¥6M–¥7M JPY | ¥4.5M–¥6M JPY | No offer — remote income continues |

### Freelancing Income Probability (2028–2029)

| Monthly Income | Probability |
|----------------|-------------|
| ৳20,000 | High |
| ৳50,000 | Moderate |
| ৳70,000 | Possible but far from guaranteed |
| ৳150,000 | Low without specialization |

### Japan Salary Data

| Milestone | Amount | Type |
|-----------|--------|------|
| First Japan Job (expected) | ¥4.5M–¥6M JPY | First-job realistic |
| First Japan Job (optimistic) | ¥6M–¥7M JPY | First-job optimistic |
| Long-term (8–12 years) | ¥10M–¥15M+ JPY | Senior SRE / Platform Engineer / Cloud Architect |

---

## 11. Build & Run Instructions

### Option A: Vite (Recommended)

```bash
cd /media/yeasin/Storage/Claude
npm create vite@latest . -- --template react
npm install
# Replace src/App.jsx with final.jsx content (or rename final.jsx to App.jsx)
npm run dev
```

### Option B: Plain HTML + CDN (No Build Step)

Create an `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dhaka → Global Engineer → Tokyo</title>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel" src="src/final.jsx"></script>
</body>
</html>
```

Then open `index.html` in a browser. No install step.

### Option C: Create React App

```bash
npx create-react-app .
# Replace src/App.jsx with the contents of final.jsx
npm start
```

---

## 12. Optional Enhancements (Not Required)

These are not part of the current project scope but are natural next steps:

- **LocalStorage persistence** for checked tracker items (currently resets on reload)
- **Export/Import** progress as JSON
- **Print-friendly** stylesheet for PDF generation
- **i18n** for Bengali / Japanese language toggle
- **PWA** manifest for offline access on mobile
- **Deployment** to Vercel / Netlify / GitHub Pages (the app is fully static)
- **Testing** with React Testing Library + Jest
- **TypeScript** conversion (rename to `final.tsx`, add types to PHASES/INCOME_TRAJECTORY)

---

*This guide was generated on June 18, 2026. It covers every material, tool, dependency, and file required to understand, run, and extend the `final.jsx` project.*
