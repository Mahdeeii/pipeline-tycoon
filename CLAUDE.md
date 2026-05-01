# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Pipeline Tycoon is a CI/CD puzzle game built with Next.js 16 + TypeScript + Tailwind CSS.

## Commands

| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Production build | `npm run build` |
| Run production build | `npm start` |
| Lint | `npm run lint` |

## Architecture

```
src/
  app/
    page.tsx        ← landing page (route: /)
    layout.tsx      ← root layout, wraps all pages
    globals.css     ← global Tailwind styles
    play/
      page.tsx      ← game canvas (route: /play) — not created yet
```

Next.js App Router: file location = route. A file at `src/app/play/page.tsx` is automatically the `/play` URL — no router config needed.

**Note:** `AGENTS.md` at the root is a Next.js-generated file warning that Next.js 16 has breaking API changes from prior versions. Read it before touching Next.js internals.

---

## About Me (the Developer)

I'm a DevOps engineer with strong terminal/CLI/infra skills, learning frontend dev as a side project.

What this means for you:
- I think in pipelines, deployments, configs, environments, automation
- I understand: git, SSH, package managers, build systems, networking, services, YAML, env vars
- I do NOT need explanations of: variables, loops, functions, conditionals, basic CLI, JSON, REST
- I am a beginner at: React patterns, JSX, hooks, frontend state management, CSS/Tailwind

---

## How to Help Me — SPEED MODE

### Default behavior: SHIP, don't explain.
- Just write the code. Move fast. Don't ask if I understand.
- Don't ask for confirmation between steps unless something is irreversible.
- Don't explain general programming concepts (loops, arrays, .map(), basic React).
- Don't quiz me. Don't wait for approval. Just do the work.

### EXCEPTION: Explain ONLY when it's DevOps-relevant.
If a concept connects to DevOps/infra/automation, give me ONE compact paragraph (2-3 sentences max) AFTER the code, framed through a DevOps analogy:

Examples of WORTH explaining:
- Build process → "next build is your CI build step. Outputs go to .next/, like a Docker image artifact."
- Environment variables → "Next.js reads .env.local at build time, like Helm values."
- Server vs Client components → "Server components render once on the server, like SSR templates. Client components hydrate in the browser, like a SPA."
- Deployment pipelines, CDN behavior, caching, build artifacts, env separation
- Anything involving git, npm, build tools, deployments

Examples of NOT worth explaining:
- What .map() does
- What JSX is
- What a function/component is
- What a TypeScript type is
- HTML/CSS basics

### Code style:
- TypeScript with explicit types (no `any`)
- Functional components, named exports
- Brief comments for non-obvious lines only
- Skip the "what just happened" summaries unless I ask
- Skip "do you understand?" questions
- Skip multi-step confirmations

### When I say "do it" or "go" or "next":
- Just do it. No planning phase. No "let me check first."
- If something is destructive (delete files, rewrite many files, force-push), THEN ask.

### When you finish a task:
- Show me what changed in 1-2 lines max
- Tell me the next task
- Move on

### Things you must NEVER do without asking:
- Add new libraries/dependencies
- Refactor code I didn't ask you to touch
- Run destructive git commands (force push, reset --hard)
- Break working code while "improving" it

### Token efficiency rules:
- Don't repeat my prompts back to me
- Don't list what you're "about to do" then do it — just do it
- Don't summarize the conversation
- Don't add "let me know if you have questions" type filler
- Skip preamble. Get to the point. Ship code.

---

## Project Phase Tracking

Always read `docs/phase-tracker.md` at the start of every session to know where we are.
Always update it at the end of every session.

---

## My Learning Documents (Read These for Context)

- `docs/phase-tracker.md` — Current phase and roadmap
- `docs/decisions.md` — Past technical decisions
- `docs/learnings.md` — Concepts I've learned
- `docs/gotchas.md` — Bugs that bit me
