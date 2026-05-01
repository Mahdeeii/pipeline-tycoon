# Phase Tracker — Where Am I?

This file tracks project progress. Claude reads this at the start of every session.

## 🎯 Overall MVP Goal
Ship Pipeline Tycoon Lite in 6 weeks: a CI/CD puzzle game on a live URL.

## 📍 Current Phase
**Phase 8: Launch**
Status: 🔴 Not Started

## ✅ Completed Phases
- Phase 1: Foundation ✅
- Phase 2: Canvas Setup ✅
- Phase 3: First Block ✅
- Phase 4: All 4 Blocks ✅
- Phase 5: Connections ✅
- Phase 6: Game Logic ✅
- Phase 7: Animations & Polish ✅

## 🛣️ All Phases (Roadmap)

### Phase 1: Foundation 🏗️ ✅
- [x] Install Node, VS Code, Claude Code extension
- [x] Create Next.js project
- [x] Set up GitHub with SSH separation
- [x] Set up CLAUDE.md and docs folder
- [x] Build landing page (static)
- [x] Deploy to Vercel
- [x] Verify live URL works — https://pipeline-tycoon.vercel.app

### Phase 2: Canvas Setup 🎨 ✅
- [x] Install react-flow library
- [x] Create empty canvas page at `/play` route
- [x] Apply dark theme styling
- [x] Test canvas renders without errors

### Phase 3: First Block 📦
- [x] Create custom node component for Source block
- [x] Add Source block to canvas
- [x] Make block draggable
- [x] Style block with game design colors (blue for Source)

### Phase 4: All 4 Blocks 🧱 ✅
- [x] Add Build block (orange, hammer icon)
- [x] Add Test block (purple, test tube icon)
- [x] Add Deploy block (green, rocket icon)
- [x] Sidebar palette to drag blocks from
- [x] Drag from sidebar → drop on canvas works

### Phase 5: Connections 🔗 ✅
- [x] Each block has input/output handles
- [x] User can draw lines between blocks
- [x] Lines have styled appearance
- [x] Source can only have output, Deploy can only have input

### Phase 6: Game Logic 🎮 ✅
- [x] Add "Deploy 🚀" button
- [x] Validate pipeline order (Source → Build → Test → Deploy)
- [x] Show success/failure with funny messages
- [x] Track score in state

### Phase 7: Animations & Polish ✨ ✅
- [ ] Animate code package moving through pipeline (skipped — complex, post-MVP)
- [x] Confetti on success
- [x] Explosion animation on failure (shake)
- [x] Title progression (Intern → Junior → Senior → 10x)
- [ ] Sound effects (skipped — post-MVP)
- [x] Persist score in localStorage

### Phase 8: Launch 🚀
- [ ] Polish landing page
- [ ] Add share button
- [ ] Test on mobile
- [ ] Add basic analytics
- [ ] Post on Twitter/Reddit/LinkedIn/HN

## 📝 Session Log

### 2026-05-01 — Session 1
- Scaffolded Next.js 16 + TypeScript + Tailwind
- Built dark-themed landing page with pipeline block preview
- Deployed to https://pipeline-tycoon.vercel.app
- Phase 1 complete → moving to Phase 2: Canvas Setup
