# Unified Project Report: The Unbreakable Master Plan

**Project:** Dhaka → Global Engineer → Tokyo — An Interactive Career Roadmap
**Subject:** MD Yeasin Arafat Shehab, HSC Candidate 2026, North Badda, Dhaka
**Generated:** June 18, 2026
**Location:** `/media/yeasin/Storage/Claude/`

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Source Files & Their Roles](#2-source-files--their-roles)
3. [Phase 1 — Initial Synthesis: Building the Roadmap](#3-phase-1--initial-synthesis-building-the-roadmap)
4. [Phase 2 — Interactive UI: The final.jsx Application](#4-phase-2--interactive-ui-the-finaljsx-application)
5. [Phase 3 — The Feedback Loop: ChatGPT Review & Corrections](#5-phase-3--the-feedback-loop-chatgpt-review--corrections)
6. [Phase 4 — Applying the Feedback: Income Honesty Overhaul](#6-phase-4--applying-the-feedback-income-honesty-overhaul)
7. [Key Decisions & Why They Were Made](#7-key-decisions--why-they-were-made)
8. [What the Plan Gets Right](#8-what-the-plan-gets-right)
9. [What Was Corrected](#9-what-was-corrected)
10. [Remaining Risks & Honest Caveats](#10-remaining-risks--honest-caveats)
11. [File Inventory](#11-file-inventory)

---

## 1. Project Overview

This project is a comprehensive, interactive career roadmap for a Bangladeshi student (age 19 at time of writing) aiming to go from HSC candidate to a Japan-based AI/DevOps engineer earning ¥5M–7M JPY (first job), with a long-term ceiling of ¥10M–15M+ JPY after 8–12 years of career growth.

The plan covers 9 phases across 4–5 years:

| Phase | Label | Focus | Realistic Expected Income |
|-------|-------|-------|---------------------------|
| 0 | Now → HSC 2027 | Foundations: Python, Linux, Git, N5 Japanese | ৳0 |
| 1 | Post-HSC Month 3 | HTML/CSS/JS, first live projects, Upwork profile | ৳0–5,000 |
| 2 | Month 4–7 | TypeScript, Next.js, PostgreSQL, first clients | ৳5,000–15,000 |
| 3 | Month 8–11 | Security, Redis, Docker, Stripe, SaaS micro-product | ৳20,000–45,000 |
| 4 | Month 12–18 | AWS, Terraform, Nginx, Linux deep, SAA cert | ৳30,000–60,000 |
| 5 | Month 19–24 | CI/CD, GitHub Actions, Prometheus, Grafana, ITPEC FE | ৳40,000–80,000 |
| 6 | Month 25–30 | Kubernetes, Helm, Terraform advanced, N2, FE exam | ৳40,000–1,00,000 |
| 7 | Month 31–42 | FastAPI, RAG, AI agents, Ollama, fine-tuning, MLOps | ৳1,00,000–1,80,000 |
| 8 | Year 4–5 | Japan relocation: visa, job offer, move | ¥4.5M–6M JPY (first job) |

The final deliverable is a single-file React component (`final.jsx`) that renders an interactive dark-themed dashboard with phase navigation, tabbed content (Do's & Don'ts, Tracker, Tips, Resources, Scenarios), an income trajectory chart, and multiple reality-check callouts.

---

## 2. Source Files & Their Roles

### Core Planning Documents

| File | Role | Key Contribution |
|------|------|------------------|
| `Vison.md` | Original 5-phase technical roadmap (ground zero → AI engineer) | Phase structure, skill ordering, month-by-month execution plans, resource lists |
| `Mission.md` | Strategic overlay: systems thinking, Japan route, income philosophy | 5-subsystem model (Degree/Tech/Japanese/Income/Experience), honest income ranges, DevOps-first orientation |
| `Roadmap.md` | External research document on Japan tech market | Market data (¥5.5–10M dev salaries, ¥6–11M DevOps), visa rules, TokyoDev survey data, do's/don'ts |
| `Personalized Roadmap.md` | User-specific adaptation | Yeasin's context (Python projects, NAS interest, archival metadata), risk table, daily schedule template |
| `Career Path to Japan.docx` | Reference document (binary) | Japan career path reference material |

### Output & Review Files

| File | Role |
|------|------|
| `final.jsx` | The interactive React dashboard — the primary deliverable |
| `ChatGPT-Responce-01.md` | First external review: identified over-optimistic income, wrong Japan salary target, freelancing risk |
| `my-answre.md` | User's self-correction: "take the lowest number, divide by 2" — the reality tax |
| `ChatGPT-Responce-02.md` | Second external review: refined the correction into a 3-tier confidence model, warned against freelancing-only path |
| `results/personalized_roadmap_Yeasin.md` | Earlier generated personalized roadmap (superseded by Personalized Roadmap.md) |

---

## 3. Phase 1 — Initial Synthesis: Building the Roadmap

### What Happened

The project began by merging multiple planning documents into a single coherent narrative:

1. **Vision.md** provided the technical spine — a 5-phase progression from absolute beginner to AI engineer, with specific resources, month-by-month execution plans, and gate checks.

2. **Mission.md** added the strategic layer — the insight that the user is not learning skills but "building a compounding machine" with 5 subsystems (Degree, Tech Skills, Japanese, Income, Experience). It also established the DevOps-first orientation and the honest income ranges.

3. **Roadmap.md** brought external market research — Japan's tech salary data, visa requirements (bachelor's degree or 10+ years), TokyoDev survey data showing median ¥8.5M for international developers, and the critical insight that DevOps/cloud specialists earn ¥6–11M with leads exceeding ¥15M.

4. **Personalized Roadmap.md** grounded everything in the user's actual context — existing Python projects (EXPO-2-YTM, Song Archive Factory), planned 50–60 TB NAS, archival metadata expertise, and the reality of being an 19-year-old in North Badda with HSC coming up.

### Key Design Decisions

- **Skill ordering is non-negotiable:** Linux → Networking → Development → Docker → AWS → Terraform → CI/CD → Kubernetes. ChatGPT-01 confirmed this is "architecturally correct" — most people skip to Kubernetes without understanding Linux and drown.

- **Degree is not treated as knowledge:** The plan explicitly states that the market pays for solving problems, building systems, communication, and experience — not GPA. The degree mostly helps with visas, HR filters, and immigration paperwork.

- **Japanese runs in parallel from day one:** 30–60 minutes daily from Phase 0. This is identified as one of the biggest hidden advantages — most foreigners do tech first, Japanese later, then discover promotions are slower and fewer companies are available.

- **DevOps before AI:** A company can survive without AI. A company cannot survive if production is down. Infrastructure skills remain valuable.

### The 5 Subsystems Model

```
Degree ──────────── Visa eligibility, HR filters
Tech Skills ──────── Market value, problem-solving ability
Japanese ─────────── Social integration, company access, promotion speed
Income ───────────── Financial stability, reinvestment capacity
Experience ───────── Credibility, seniority, trust
```

Most people only build one or two. This plan builds all five in parallel.

---

## 4. Phase 2 — Interactive UI: The final.jsx Application

### Architecture

A single-file React component (~838 lines pre-feedback, ~916 lines post-feedback) with:

- **State management:** `useState` for active phase, active tab, and checked tracker items
- **Data layer:** `PHASES` array (9 phase objects), `INCOME_TRAJECTORY` array, `SYSTEMS` constant
- **Rendering:** Inline styles (no CSS framework), dark theme (`#0a0a0f` background), responsive layout

### Features

1. **Sticky header** with phase selector tabs (color-coded per phase)
2. **Phase hero** showing title, subtitle, period, income target, mission statement, and 5-subsystem status badges
3. **Tabbed content area** with 5 tabs:
   - **Do's & Don'ts** — two-column layout with green/red color coding
   - **Tracker** — interactive checkboxes with progress bar, tag-colored type badges
   - **Tips** — insider tips and warnings with phase-colored borders
   - **Resources** — numbered list with name, note, and URL
   - **Scenarios** — best case, worst case, and key insight
4. **Income trajectory chart** — bar chart showing income progression across all phases
5. **ITPEC FE Warning** — critical callout about the Japan visa key exam
6. **Footer** with source file attribution

### Design Choices

- **Dark theme:** Chosen for reduced eye strain during long study sessions
- **Color per phase:** Each phase has a distinct color that carries through its tab, hero, and UI elements
- **Responsive:** Uses `clamp()` for font sizes, `flex-wrap` for layouts, `minmax()` for grids
- **No external dependencies:** Only React's `useState` — runs anywhere React runs

---

## 5. Phase 3 — The Feedback Loop: ChatGPT Review & Corrections

### Review Round 1: ChatGPT-Responce-01.md

**What it got right (validated):**
- Skill ordering: 9/10 — "architecturally correct"
- Technical roadmap: 8.5/10
- Japan strategy: 8/10
- DevOps before AI: confirmed correct
- Japanese running in parallel: "excellent"
- Degree not treated as knowledge: "good"

**What it identified as problems:**

1. **Income estimates: 5/10 — too optimistic**
   - Phase 2 (৳10k–40k): "Possible? Yes. Likely? No." Realistic: ৳0 (high probability), ৳5k–15k (medium), ৳20k–40k (low)
   - Phase 3 (৳30k–80k): Many competent developers spend a year making ৳0 because they cannot sell. Income = skill × communication × reputation. If any factor is zero, income is zero.
   - Phase 6 (৳1L–2L): "This is where I think the roadmap becomes fantasy." Realistic: ৳40k–100k with upside higher. Many DevOps engineers never reach 2 lakh/month freelancing.

2. **Japan salary target: wrong**
   - ¥10M–15M is not a normal engineer salary. That's senior/staff level requiring 5–10+ years, not 3 years.
   - First Japan job realistic: ¥5M–7M
   - ¥10M–15M is a long-term destination after 8–12 years

3. **Freelancing is the biggest uncertainty**
   - Freelancing is not an exam. You can study 1,000 hours and still have zero clients.
   - Junior job → Experience → Japan is more reliable than Freelancing → Japan
   - Treat freelancing as a bonus lane, not the only bridge

4. **Probability assessment**
   - Probability of reaching Japan engineering job if followed consistently: roughly 60–75%
   - Probability of reaching ¥10M–15M as first Japan job: under 10%
   - Probability of reaching ¥10M–15M after 8–12 years of strong career growth: quite realistic

### User Response: my-answre.md

The user proposed a simple heuristic:

> "Pick the lowest amount, divide it into half. The result is my income!"

This is the "reality tax" — an instinctive correction mechanism for online career roadmaps.

### Review Round 2: ChatGPT-Responce-02.md

**Refinements to the user's formula:**

The "halving" formula is useful but can be too pessimistic. Example: if a roadmap says "DevOps Engineer in Japan: ¥6M/year," halving gives ¥3M, which is actually below many regular mid-career DevOps salaries in Japan.

**Better model: Confidence Levels**

| Scenario | Probability | Description |
|----------|-------------|-------------|
| Optimistic | 20% | Everything goes well. No burnout, no emergencies, no dry spells. |
| Expected | 60% | Some setbacks, some delays, average luck. This is the real planning number. |
| Disaster | 20% | Failed exam, no clients, delayed graduation, bad job market. You keep going anyway. |

**Applied to the plan:**

- Bangladesh freelancing (roadmap says ৳50k–70k): Disaster ৳0–20k, Expected ৳25k–45k, Optimistic ৳50k–70k+
- Japan first job (roadmap says ¥5.5M–7M): Disaster = no offer, Expected ¥4.5M–6M, Optimistic ¥6M–7M+

**Freelancing reality:**
- By 2028–2029: ৳20k/mo online — High probability. ৳50k/mo — Moderate. ৳70k/mo — Possible but far from guaranteed. ৳150k/mo — Low without specialization.
- Junior job path more reliable than pure freelancing path.

---

## 6. Phase 4 — Applying the Feedback: Income Honesty Overhaul

### Changes Made to final.jsx

#### 1. Income Reality Object (all 9 phases)

Each phase now has an `incomeReality` object with three fields:

```js
incomeReality: { optimistic: "৳20,000–৳40,000", expected: "৳5,000–৳15,000", disaster: "৳0–৳5,000 (long client drought)" }
```

#### 2. Japan Salary Split

- **Header badge:** Changed from single "Target ¥10M–15M JPY" to two badges:
  - "First Japan Job ¥5M–7M JPY"
  - "Long-term (8–12yr) ¥10M–15M+ JPY"
- **Phase 8 incomeTarget:** Changed to "¥5.5M–¥7M JPY (first Japan job)" with a `longTermNote` field
- **Phase 8 scenario.best:** Updated to reflect first-job range with note that ¥10M–15M+ comes after years of growth

#### 3. Income Trajectory Chart

Replaced optimistic numbers with expected values:

| Phase | Old (optimistic) | New (expected) |
|-------|------------------|----------------|
| Phase 1 | ৳7,500 | ৳2,500 |
| Phase 2 | ৳25,000 | ৳10,000 |
| Phase 3 | ৳55,000 | ৳32,000 |
| Phase 4 | ৳85,000 | ৳45,000 |
| Phase 5 | ৳1,15,000 | ৳60,000 |
| Phase 6 | ৳1,50,000 | ৳70,000 |
| Phase 7 | ৳2,25,000 | ৳1,40,000 |
| Japan | ৳3,50,000 | ৳2,50,000 |

#### 4. Three New Callout Panels

**Panel 1: Income Reality — Three Scenarios Per Phase (orange border)**
- Explains the Optimistic/Expected/Disaster model
- Includes the user's "halving" rule as a planning heuristic
- "If the plan still works at that number, it's robust. If it breaks, it was never a plan — it was a wish."

**Panel 2: Freelancing Reality Check (pink border)**
- Skill × communication × reputation formula
- Freelancing as bonus lane, not the only bridge
- Junior job → Experience → Japan as more reliable path
- Probability table for 2028–2029

**Panel 3: Japan Salary Reality (teal border)**
- First job vs long-term destination split
- ¥4.5M–6M expected first job
- ¥10M–15M+ after 8–12 years of career growth

#### 5. Scenario Adjustments

- Phase 7 scenario.best: softened from "৳2,50,000+" to "৳2,00,000–৳2,50,000+"
- Phase 8 scenario.best: updated to "¥5.5M–¥7M JPY (first-job range)" with explicit note about long-term growth

---

## 7. Key Decisions & Why They Were Made

### Why the 3-tier confidence model instead of just halving?

The user's "halving" rule is a good starting point but can be too pessimistic for some contexts (e.g., halving ¥6M gives ¥3M, which is below actual mid-career DevOps salaries in Japan). The 3-tier model preserves the user's intuition while adding nuance: plan for the middle (60%), hope for the top (20%), survive the bottom (20%).

### Why keep freelancing at all if it's so unreliable?

Because it's also the fastest path to real income for someone with no connections, no degree, and no local job market access. The plan now treats it as a "bonus lane" — pursue it aggressively but don't bet the entire Japan plan on it. The junior job path (local or remote) is the more reliable bridge.

### Why separate first-job vs long-term Japan salary?

Because the original ¥10M–15M target was doing psychological damage. It set an impossible bar for a first job, which could demotivate when reality hits. By splitting it — first job ¥5M–7M (achievable), long-term ¥10M–15M+ (realistic after 8–12 years) — the plan has both an honest near-term target and an aspirational long-term one.

### Why expected values in the income chart instead of optimistic?

Because the chart is the first thing people see, and it sets expectations. If the chart shows ৳2,50,000 at Phase 7 and the user earns ৳1,00,000, they feel like a failure. If the chart shows ৳1,40,000 and they earn ৳1,00,000, they're in the right ballpark. The optimistic numbers are still in the `incomeReality` object for each phase — they're just not the visual anchor.

---

## 8. What the Plan Gets Right

### 1. Skill Ordering Is Architecturally Correct

Linux → Networking → Development → Docker → AWS → Terraform → CI/CD → Kubernetes. This is not the order most people follow (most skip to Kubernetes and drown). ChatGPT-01 explicitly validated this: "Kubernetes without Linux is like trying to become a fighter pilot before learning how a steering wheel works."

### 2. The Hidden Engine

The plan's strongest feature is not the React, AWS, Kubernetes, or AI sections. It's the hidden engine underneath:

> HSC → Degree/FE → Japanese → Real Experience → Japan

That sequence is doing most of the heavy lifting. The technologies will change. That pipeline remains valuable even if today's tools are replaced tomorrow.

### 3. DevOps Before AI

A company can survive without AI. A company cannot survive if production is down. Infrastructure skills remain valuable. The plan correctly sequences DevOps (Phase 4–6) before AI (Phase 7).

### 4. Japanese Running in Parallel

Most foreigners do tech first, Japanese later. Then reach Japan and discover promotions are slower, fewer companies available, social integration harder. N2 gives a massive advantage. The plan starts Japanese from Phase 0.

### 5. The 5-Subsystem Model

Building all five subsystems (Degree, Tech Skills, Japanese, Income, Experience) in parallel means the user is never starting from zero in any dimension. Most people only build one or two.

### 6. Freelancing as Bonus Lane

The corrected plan explicitly frames freelancing as a bonus lane, not the only bridge. The junior job → experience → Japan path is more reliable. This is a critical psychological reframe.

---

## 9. What Was Corrected

### Income Estimates (all phases)

| Phase | Original (optimistic) | Corrected (expected) | Rationale |
|-------|----------------------|---------------------|-----------|
| Phase 1 | ৳0–15,000 | ৳0–5,000 | First income takes much longer than beginners expect |
| Phase 2 | ৳10,000–40,000 | ৳5,000–15,000 | Freelancing market is brutal; ৳0 is high probability |
| Phase 3 | ৳30,000–80,000 | ৳20,000–45,000 | Many competent devs spend a year making ৳0 |
| Phase 4 | ৳50,000–1,20,000 | ৳30,000–60,000 | Cloud skills take time to monetize |
| Phase 5 | ৳80,000–1,50,000 | ৳40,000–80,000 | CI/CD niche is real but narrow |
| Phase 6 | ৳1,00,000–2,00,000 | ৳40,000–1,00,000 | "Fantasy" — many DevOps engineers never reach ৳2L/mo freelancing |
| Phase 7 | ৳1,50,000–3,00,000+ | ৳1,00,000–1,80,000 | AI market is hot but volatile |
| Japan | ¥5.5M–10M | ¥4.5M–6M (first job) | ¥10M–15M is senior/staff level, not first job |

### Japan Salary Target

- **Before:** Single target of ¥10M–15M JPY
- **After:** First job ¥5M–7M (expected ¥4.5M–6M), long-term ¥10M–15M+ after 8–12 years

### Freelancing Framing

- **Before:** Implicitly treated as the primary income bridge
- **After:** Explicitly framed as a "bonus lane" with junior job path as more reliable alternative

### Income Chart

- **Before:** Showed optimistic numbers, creating unrealistic visual anchor
- **After:** Shows expected values; optimistic numbers available in `incomeReality` object

---

## 10. Remaining Risks & Honest Caveats

### 1. The Plan Is Not the Execution

The plan is solid. The question is always and only whether it will be executed. On the days it feels pointless. On the days nothing works. On the rainy Tuesday six months from now when there's ৳12,000 in the account and the next client hasn't replied.

### 2. Freelancing Is Not an Exam

You can study 1,000 hours and still have zero clients. Meanwhile someone with half your skill can get clients through communication, timing, networking, niche selection, and luck. If any one factor is zero, income is zero.

### 3. The ITPEC FE Exam Is Brutal

Bangladesh pass rate: 9.2%–25.4%. It requires the same discipline as a 4-year degree. The plan treats it as a backup for if the degree path becomes impossible, but it should be treated as a parallel track from Year 2.

### 4. Health Is the Foundation

Chronic sleep loss and stress will destroy any study plan. 72% of developers in Japan report a standard 40h workweek — excessive all-nighters are neither required nor efficient. If you collapse from exhaustion, no progress is possible.

### 5. The Dropout Zone Is Months 4–7

You can build things but they break in unpredictable ways. Clients are slow to respond. Income is low or zero. This is where most people quit. The compounding is happening invisibly.

### 6. ¥10M–15M Is Not a First Job

Even after the correction, there's a risk that the long-term ¥10M–15M+ target still feels like the "real" goal and the first-job ¥5M–7M feels like settling. It's not. It's the honest starting point. The long-term target is a career, not a job.

### 7. Technology Changes

The specific tools in this plan (Next.js 14, Prisma, Kubernetes, LangChain) may be replaced by better tools in 5 years. The underlying principles — Linux, networking, system design, automation, clear communication — will not.

---

## 11. File Inventory

```
/media/yeasin/Storage/Claude/
├── src/
│   ├── Vison.md                        # Original 5-phase technical roadmap
│   ├── Mission.md                      # Strategic overlay, systems thinking
│   ├── Roadmap.md                      # Japan market research
│   ├── Personalized Roadmap.md         # User-specific adaptation
│   ├── final.jsx                       # Interactive React dashboard (PRIMARY DELIVERABLE)
│   ├── ChatGPT-Responce-01.md          # First external review (income correction)
│   ├── my-answre.md                    # User's reality tax heuristic
│   ├── ChatGPT-Responce-02.md          # Second external review (3-tier model)
│   ├── Final.md                        # Merged planning document
│   ├── Career Path to Japan.docx       # Reference document (binary)
│   └── [9 other .md files]             # Supporting planning documents
├── results/
│   └── personalized_roadmap_Yeasin.md  # Earlier generated roadmap
├── pending/                            # Empty (no pending tasks)
└── Unified-report.md                   # This document
```

### File Sizes

| File | Lines | Size |
|------|-------|------|
| final.jsx (post-feedback) | 916 | 57,752 bytes |
| Vison.md | 484 | 24,838 bytes |
| Mission.md | 502 | 7,170 bytes |
| Roadmap.md | 132 | 11,419 bytes |
| Personalized Roadmap.md | 132 | 4,950 bytes |
| ChatGPT-Responce-01.md | 99 | 5,334 bytes |
| ChatGPT-Responce-02.md | 234 | 3,175 bytes |
| my-answre.md | 1 | 118 bytes |
| Final.md | 924 | 41,558 bytes |

---

## Appendix: The Feedback Loop in Detail

### Original Problem

The initial `final.jsx` had income numbers that were technically "possible" but not "likely." The Phase 6 income of ৳1L–2L/month was described by ChatGPT-01 as "fantasy." The Japan target of ¥10M–15M was "not a normal engineer salary" — it's senior/staff level requiring 5–10+ years.

### User's Insight

The user proposed a simple rule: "Pick the lowest amount, divide it by 2. The result is my income!" This is the reality tax — an instinctive correction that most people need but don't apply.

### Refinement

ChatGPT-02 refined this into a 3-tier confidence model:
- Optimistic (20%): Everything goes well
- Expected (60%): Some setbacks, average luck — the real planning number
- Disaster (20%): Failed exam, no clients, bad market — you keep going anyway

This preserves the user's intuition while adding nuance for cases where halving would be too pessimistic (e.g., Japan DevOps salaries).

### Final State

The updated `final.jsx` now has:
1. `incomeReality` objects on every phase with all three tiers
2. An Income Reality callout panel explaining the model
3. A Freelancing Reality callout panel with probability tables
4. A Japan Salary Reality callout panel splitting first-job vs long-term
5. Income trajectory chart showing expected values (not optimistic)
6. Header badges distinguishing first-job vs long-term Japan targets
7. All scenario.best/worst texts updated to match honest numbers

---

*This report was generated on June 18, 2026. It represents the complete state of the project after all feedback has been incorporated into final.jsx.*
