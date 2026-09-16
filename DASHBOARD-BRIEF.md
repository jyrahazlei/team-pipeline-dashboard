# Dashboard Brief

This file is the persistent project brief for the Team Pipeline Dashboard.
It does **not** auto-load the way a `CLAUDE.md` would — at the start of
every session, explicitly ask Claude to read this file first before doing
anything else.

## Project overview

A dashboard for a small exchange-program team's pipeline: leads →
contacted → applied → approved → realized, plus team-level KPIs and
individual member performance. The project owner leads the team and
currently collects updates from members over WhatsApp and maintains the
underlying data herself; this dashboard is for seeing the overall pipeline
picture in one place.

This is a **portfolio project** demonstrating business + tech + analytics
thinking — not a showcase of advanced engineering. Priority order for every
decision: **working > simple > useful > polished > complex.**

## Privacy rules (non-negotiable)

- No real names, phone numbers, emails, WhatsApp info, application/passport
  IDs, or any identifying information anywhere in this repo, ever.
- Public/demo data must be fully synthetic, using anonymous identifiers
  like "Member 01" and "EP 01".
- `.gitignore` must exclude any local real-data files.
- The README must state that demo data is synthetic/anonymized.
- Never reference specific universities, countries, organizations, or the
  project owner's personal future plans anywhere in this repo.

## Tech constraints

- React + Vite + JavaScript + CSS.
- LocalStorage or a simple local data file for now.
- A lightweight charting library later if needed.
- No backend, auth, cloud database, or API integrations unless a clear
  need for one is identified later.

## Commit conventions

Conventional commit messages: `type: short description` (e.g. `feat:`,
`fix:`, `chore:`, `docs:`, `refactor:`). One focused commit per session
covering that session's task.

## Daily cadence

This is a daily project. Short sessions (roughly 20–40 minutes of work),
Monday–Friday, over about 4 weeks. Each session is scoped to exactly one
small task — don't build ahead of the current day's milestone.

**Session workflow:**
1. Read this file (`DASHBOARD-BRIEF.md`) first.
2. Inspect current repo state and recent commit history — don't rebuild
   what already exists.
3. Pick the next smallest useful improvement from the plan below.
4. Build it, test it (run the app, verify it works).
5. Commit it with a conventional commit message.
6. Append a session summary below using the format at the end of this
   file.
7. Briefly explain what was built and why, in plain terms — the project
   owner needs to be able to explain this project in an interview.

## Week-by-week plan

Weekdays only, 5 sessions/week, no weekend work.

**Week 1:** dashboard shell → data model → KPI cards → pipeline stage
visual

**Week 2:** team performance table → conversion calculations → pipeline
chart → activity-over-time chart → basic filtering

**Week 3:** rule-based insights engine → targets/progress → responsive
polish → empty states → accessibility pass

**Week 4:** README rewrite for portfolio → privacy review → refactor pass
→ screenshots → retrospective / plan next phase

## Session log

Append one entry per session, in order, using this exact format:

```
**Session [N] — [Date]**
- Built: <what was added/changed, in plain terms>
- Files touched: <short list>
- Commit: `<type>: <message>` (<short hash>)
- Next up: <the next item on the plan>
```

**Session 1 — 2026-09-14**
- Built: Set up dev environment (installed Node.js via nvm and the GitHub
  CLI, since neither existed on this machine), scaffolded the React +
  Vite project, built a minimal dashboard shell (sidebar nav with
  Overview/Pipeline/Team Performance sections, header, placeholder
  content area), added a tiny synthetic demo-data stub, wrote the README
  and `.gitignore` (with real-data exclusions), created this brief file,
  and pushed the repo to GitHub.
- Files touched: `src/App.jsx`, `src/App.css`, `src/index.css`,
  `src/components/layout/Sidebar.jsx`, `src/components/layout/Sidebar.css`,
  `src/components/layout/Header.jsx`, `src/components/layout/Header.css`,
  `src/data/demoData.js`, `README.md`, `.gitignore`, `DASHBOARD-BRIEF.md`,
  `index.html`
- Commit: `feat: scaffold dashboard shell with layout and nav` (38f9d52)
- Next up: data model (define the shape of members/pipeline entries and
  wire the demo data stub into it)

**Session 2 — 2026-09-15**
- Built: Defined the data model — clear `Member` (`id`, `name`) and
  `PipelineEntry` (`id`, `label`, `memberId`, `stage`, `updatedAt`) shapes,
  plus small selector helpers (`getStageCounts`, `getMemberEntryCounts`,
  `getEntriesForMember`, `getEntriesForStage`, `getMemberById`). Wired the
  demo data into all three sections (Overview, Pipeline, Team Performance)
  as plain data-driven lists/counts, replacing the static placeholder
  text — proves the model end-to-end without building the KPI cards or
  pipeline visual yet (those stay scoped to their own sessions).
- Files touched: `src/data/demoData.js`, `src/App.jsx`, `src/App.css`
- Commit: `feat: define pipeline/member data model and wire it into the
  shell` (2e0ea81)
- Next up: KPI cards for the Overview section

**Session 3 — 2026-09-16**
- Built: Added KPI cards to the Overview page — Team Members, Leads,
  Contacted, Applications, Approvals, Realizations, and overall
  Conversion Rate. Added two selectors to the data model to support
  this: `getFunnelCounts` (cumulative counts — how many entries have
  reached each stage or beyond, assuming entries only move forward) and
  `getConversionRate` (realized entries ÷ total leads). Built a new
  `KpiCards` component (colocated `.jsx`/`.css`, matching the existing
  layout component pattern) and replaced the Overview section's plain
  stage-count list with it.
- Files touched: `src/data/demoData.js`, `src/App.jsx`,
  `src/components/kpi/KpiCards.jsx`, `src/components/kpi/KpiCards.css`
- Commit: `feat: add Overview KPI cards wired to the data model`
  (5d7986f)
- Next up: pipeline stage visual (Week 1's last item)
