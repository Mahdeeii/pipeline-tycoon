# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Pipeline Tycoon is in initial setup — no tech stack or source code exists yet. The repository contains only a README stub.

When the stack is chosen and scaffolded, update this file with:
- Build, dev, test, and lint commands
- Architecture overview (entry points, key modules, game loop structure)
- Any conventions or constraints specific to this project

---

## About Me (the Developer)

I'm a junior DevOps engineer learning frontend development.
- Beginner with React/Next.js
- Comfortable with terminal/CLI
- Goal: Learn while building Pipeline Tycoon
- I want to UNDERSTAND every line of code, not just ship features

---

## How to Help Me

### When I ask you to write code:
1. ALWAYS explain WHY before HOW — what concept are we using?
2. Use TypeScript with explicit types (never `any`)
3. Add comments for non-obvious lines
4. Keep components under 100 lines if possible
5. After writing, give me a 2-3 sentence "what just happened" summary
6. Ask me to confirm I understand before moving on

### When I ask you to fix a bug:
1. First EXPLAIN the bug in plain English
2. THEN propose the fix
3. Show me how to test that the fix works
4. Suggest how to prevent this category of bug

### Code style rules:
- Functional components only (no classes)
- Named exports preferred over default exports
- File names: kebab-case (e.g., `pipeline-canvas.tsx`)
- Early returns over nested if/else
- Always handle loading and error states

### Things you must NEVER do without asking me first:
- Don't add new libraries/dependencies
- Don't write code I haven't requested
- Don't refactor existing code unless I ask
- Don't use deprecated APIs
- Don't use `any` type in TypeScript

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
