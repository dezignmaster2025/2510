## Quick context

Small React + Vite teaching project (single-page). Purpose: demonstrate props, JSX, and useState via a simple Counter component. Keep changes minimal and non-invasive — this repo is a graded assignment with rubric markers in the source.

## Big-picture architecture (what to read first)
- Entry: `index.html` mounts `<div id="root">` and loads `src/main.jsx`.
- Mount: `src/main.jsx` uses React 18 `createRoot()` and wraps the app in `<React.StrictMode>`.
- Top-level: `src/App.jsx` (renders page heading and the `Counter` component).
- Main feature: `src/components/Counter.jsx` — holds local state, event handlers, and displays the UI.
- Styles: `src/assets/styles.css` (global/simple layout styles).
- Build config: `vite.config.js` and scripts in `package.json` (`dev`, `build`, `preview`).

## Project-specific conventions and patterns
- Rubric tags: The author marked critical lines with comments like `// REQUIREMENT #1` in `src/components/Counter.jsx` and similar tags referenced in `SUBMISSION_CHECKLIST.md`. Preserve these tags when editing — graders use them to locate implementations.
- Minimal dependency set: Only `react`, `react-dom`, `vite`, and `@vitejs/plugin-react` are used. Avoid adding libraries without explicit approval.
- State updates: `Counter.jsx` uses the functional form `setCount(c => c + 1)` — prefer this pattern when modifying increment logic.
- StrictMode: `src/main.jsx` wraps the app in `<React.StrictMode>`. Be aware effects and mounts may run in development twice; write idempotent dev-only checks accordingly.

## Common edit examples (exact file pointers)
- Change the app title: edit `src/App.jsx`, the `<Counter title="..." />` prop is passed there.
- Change initial counter value: edit `src/components/Counter.jsx` at the line `const [count, setCount] = useState(0)` (look for `// REQUIREMENT #1`).
- Modify button behavior: handlers `handleIncrement` and `handleReset` live in `src/components/Counter.jsx`.
- Update instructions / rubric notes: edit `README.md` and `SUBMISSION_CHECKLIST.md` when changing observed behaviors.

## Developer workflows (commands to run locally)
Use PowerShell on Windows (this repo assumes a Node toolchain):

```powershell
npm install
npm run dev
```

The dev server URL is printed by Vite (typically http://localhost:5173). For production build and local preview:

```powershell
npm run build
npm run preview
```

Notes: If you change React code, test in the browser and check the DevTools console for errors (the rubric checks for console errors).

## Integration points & external dependencies
- No external APIs or backend services are used. All state is local to the `Counter` component.
- Because the project is intentionally minimal and graded, do not introduce side-effectful services (networking, databases) without confirming with the repo owner.

## Editing rules for AI agents
- Preserve rubric tags (e.g., `// REQUIREMENT #3`) and nearby comments. If you must move or rename them, update `SUBMISSION_CHECKLIST.md` and mention the change in your PR description.
- Make focused, reversible changes: prefer small commits that are easy to review. Example commit message: `fix(counter): make increment use functional update (preserve REQUIREMENT tags)`.
- When changing behavior that affects grading (titles, initial values, visible text), update `README.md` and `SUBMISSION_CHECKLIST.md` accordingly so graders see the intended behavior.
- Avoid adding new dependencies. If a new package is required, explain why and get approval first.

## Quick troubleshooting tips
- If the app doesn't load, confirm `npm install` completed without errors and that `src/main.jsx` is present (Vite expects an ES module entry).
- If React appears to render twice in dev, it's due to `<React.StrictMode>` in `src/main.jsx` — this is expected.

## When you finish
- Run the dev server and verify the UI: click `+1` a few times and press `Reset`.
- Ensure `SUBMISSION_CHECKLIST.md` still matches the implementation (rubric tags present).
- Ask the repo owner before making structural changes (new folders, test frameworks, or CI).

If anything here is unclear or you need more examples from the code, tell me which area to expand (architecture, run steps, or editing rules) and I will update the instructions.
