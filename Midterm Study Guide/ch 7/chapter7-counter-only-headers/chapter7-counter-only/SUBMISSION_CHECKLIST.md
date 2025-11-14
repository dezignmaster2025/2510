# Submission Checklist – Chapter 7 (App + Counter)

Use this checklist to verify your project meets the rubric **before submitting**.

## Project & Run Instructions
- [ ] Project builds and runs locally with Vite
  - Run: `npm install` then `npm run dev`
  - Open the printed URL (usually http://localhost:5173)
- [ ] No console errors in the browser DevTools
- [ ] You have not added extra libraries beyond React/Vite (unless allowed)

## Rubric Requirements (All must be satisfied)
- [ ] **REQUIREMENT #1 – useState starts at 0**
  - File: `src/components/Counter.jsx`
  - Look for: `// REQUIREMENT #1` above `const [count, setCount] = useState(0)`
- [ ] **REQUIREMENT #2 – Display current number in a <p>**
  - File: `src/components/Counter.jsx`
  - Look for: `{{/* REQUIREMENT #2 */}}` above the `<p>` that shows `count`
- [ ] **REQUIREMENT #3 – Increment on click**
  - File: `src/components/Counter.jsx`
  - Look for: `// REQUIREMENT #3` above `handleIncrement` and `{{/* REQUIREMENT #3 */}}` near the `+1` button
  - Behavior: Clicking `+1` increases the number by exactly 1 each time
- [ ] **REQUIREMENT #4 – Pass & display title prop**
  - File: `src/App.jsx` (prop is passed) and `src/components/Counter.jsx` (title is displayed)
  - Look for: `{{/* REQUIREMENT #4 */}}` in both files
- [ ] **REQUIREMENT #5 (Bonus) – Reset to 0**
  - File: `src/components/Counter.jsx`
  - Look for: `{{/* REQUIREMENT #5 (Bonus) */}}` near the `Reset` button
  - Behavior: Clicking `Reset` sets number back to `0`

## Code Quality
- [ ] Files are named as instructed: `App.jsx`, `Counter.jsx`
- [ ] Clear, concise comments are present (teaching-style + rubric tags)
- [ ] Code is formatted (VS Code: save with Prettier if installed)

## What to Submit
- [ ] A **.zip** of your project folder (or a **GitHub repo link**)
- [ ] Include your **name** in the README heading (if required by your class)
- [ ] Optional: Add a screenshot of the running app to README

## Optional Self‑Checks
- [ ] Try a few increments (e.g., 0 → 3) and then press **Reset** to confirm it returns to 0
- [ ] Change the title prop in `App.jsx` to verify it updates in the UI

---
### TA/Grader Notes (optional)
> Use the `REQUIREMENT #` tags to jump to each assessed line quickly. All rubric items are adjacent to their implementation.
