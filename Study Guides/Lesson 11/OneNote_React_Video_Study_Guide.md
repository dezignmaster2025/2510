# React Video Study Guide — OneNote Paste
_Generated 2025-11-03_
> **Paste Tip:** In OneNote, paste sections below; links remain clickable.

## Objective 1 — useEffect for Side Effects
**Vocabulary**
- **useEffect** — Run logic after render to sync with external systems.
- **Cleanup Function** — Return from effect to stop timers, listeners, and in‑flight tasks.
- **AbortController** — Cancel fetch requests or other abortable tasks.
- **Fetch API** — Promise-based HTTP requests in the browser.
**Videos**
- [Full React Tutorial #24 – useEffect Cleanup (Net Ninja)](https://www.youtube.com/watch?v=aKOQtGLT-Yk)
- [React Hooks Tutorial – useEffect with cleanup (Codevolution)](https://www.youtube.com/watch?v=DTlmk6QeOHY)
- [Abort Fetch API Requests using AbortController (Colby Fayock)](https://www.youtube.com/watch?v=VdAlFWBUGV4)
- [React useEffect + AbortController = ❤️ (Jack Herrington)](https://www.youtube.com/watch?v=U6JkY_Zl0fk)

## Objective 2 — Dependency Arrays & Stale Closures
**Vocabulary**
- **Dependency Array** — Controls when an effect re-runs.
- **Stale Closure** — Effect captures outdated values due to missing deps.
- **exhaustive-deps** — ESLint rule enforcing correct deps for hooks.
**Videos**
- [useEffect Hook with Dependency Array (Thapa Technical)](https://www.youtube.com/watch?v=ivZ-SuX6TJ4)
- [Stale Closures Explained in 60s](https://www.youtube.com/watch?v=1oFP7hB4nBg)
- [Resolving useEffect Infinite Loop (vlogize)](https://www.youtube.com/watch?v=UoV0DfuQpOc)
- [Fix missing dependency warnings](https://www.youtube.com/watch?v=5yZinRF1jN0)

## Objective 3 — Client vs Server Search + Debounce
**Vocabulary**
- **Client-side Search** — Filter data in memory (e.g., array.filter).
- **Server-side Search** — Query an API, render results.
- **Debounce** — Delay calls until input stabilizes.
- **URLSearchParams** — Build/parse query strings.
**Videos**
- [React Debounce Search Input API Call (Dave Gray)](https://www.youtube.com/watch?v=MHm-2YmWEek)
- [How to use map() & filter() (JS array methods)](https://www.youtube.com/watch?v=PojpwEbOQJg)
- [Get URL Parameters in JavaScript | URLSearchParams](https://www.youtube.com/watch?v=CZP1iQFQjEY)

## Objective 4 — Async Ops & Error Handling
**Vocabulary**
- **Timeout** — Abort slow requests to keep UI responsive.
- **Retry with Backoff** — Repeat failed requests with increasing delay.
- **Idempotent Request** — Safe to retry without side effects.
**Videos**
- [Abort Long-running Fetch API Requests](https://www.youtube.com/watch?v=DBKKbTgpb3s)
- [Manage Fetch API Timeouts](https://www.youtube.com/watch?v=h1oOvrtpdKQ)
- [What is API Idempotency & Why It’s Important?](https://www.youtube.com/watch?v=I08syTslan8)

## Objective 5 — useCallback & React.memo
**Vocabulary**
- **useCallback** — Memoize a function identity until deps change.
- **React.memo** — Skip child re-render when props are shallowly equal.
- **useMemo** — Memoize computed values.
- **Reference Equality** — Same object/function instance across renders.
**Videos**
- [React.memo | useMemo | useCallback (Justin Kim)](https://www.youtube.com/watch?v=3cYtqrNUiVw)
- [When to use useCallback and React Memo?](https://www.youtube.com/watch?v=y_hUWWcySNk)
- [React.memo vs useMemo — Stop the Confusion!](https://www.youtube.com/watch?v=M0c9Inz307Q)

## Objective 6 — Automatic vs Explicit Fetching
**Vocabulary**
- **Automatic Fetching** — Load on mount/deps via effects.
- **Explicit Fetching** — Load via user action (onClick).
- **Event Handler** — Function bound to UI events.
**Videos**
- [Fetching Data with useEffect (Net Ninja)](https://www.youtube.com/watch?v=qdCHEUaFhBk)
- [Fetch & display API data on Button Click (vlogize)](https://www.youtube.com/watch?v=sFZYFJdt8NA)
- [Fetch API on Button Click without violating Hooks rules](https://www.youtube.com/watch?v=vq68nxBF7Hs)

## Objective 7 — useReducer
**Vocabulary**
- **Reducer** — Pure function (state, action) => nextState.
- **Action** — Describes a change (type, payload).
- **dispatch** — Send actions to the reducer.
- **Lazy Initialization** — Compute heavy initial state once with init().
**Videos**
- [Learn React Hooks: useReducer — Simply Explained!](https://www.youtube.com/watch?v=rgp_iCVS8ys)
- [Learn React useReducer Hook with Examples (Lama Dev)](https://www.youtube.com/watch?v=RZPAQV7JvNU)
- [React Hooks Tutorial — useReducer (Codevolution)](https://www.youtube.com/watch?v=IHJ-TO_1nME)

## Objective 8 — Conditional Rendering
**Vocabulary**
- **Ternary Operator** — condition ? A : B
- **Short-circuit (&&)** — Render B only if A is truthy.
- **Fallback UI** — Loading/empty placeholders.
- **Guard Clause** — Early return to keep JSX flat.
**Videos**
- [ReactJS Tutorial – Conditional Rendering (Codevolution)](https://www.youtube.com/watch?v=7o5FPaVA9m0)
- [Conditional Rendering Components in React (Sam Meech-Ward)](https://www.youtube.com/watch?v=xRKvjWDZlW8)
- [Short-Circuit Evaluation & Ternary Operator](https://www.youtube.com/watch?v=zZtxebG5o_A)

## Objective 9 — Fetch on Button Click
**Vocabulary**
- **Explicit Fetch** — User‑initiated request.
- **In‑flight Guard** — Disable UI while loading.
- **Toast/Notification** — Immediate success/error feedback.
- **Idempotent GET** — Safe to retry and cache.
**Videos**
- [How to Fetch and Display API Data on Button Click (vlogize)](https://www.youtube.com/watch?v=sFZYFJdt8NA)
- [Custom Hook on Button Click (Caleb Curry)](https://www.youtube.com/watch?v=M6vLKxaOWZw)
- [Fetch Data on Button Click Instead of Using componentDidMount](https://www.youtube.com/watch?v=PohWG7XCfGo)
