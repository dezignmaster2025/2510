/**
 * Name: Gregory Hudgins
 * Course: 2510 React
 * Assignment: Chapter 7 – Counter (JSX / Props / useState)
 * Date: October 5, 2025
 */

// Counter.jsx
// A single-responsibility component that demonstrates React state and event handling.
// Requirements satisfied:
// 1) useState to store a number starting at 0
// 2) Display the current number in a <p>
// 3) On button click, increase the number by 1
// 4) Display a `title` prop in an <h2>
// 5) Bonus: A Reset button that sets the number back to 0

import React, { useState } from 'react'

// We accept a `title` prop from the parent (App). ES6 destructuring pulls it from props.
export default function Counter({ title }) {
  // REQUIREMENT #1: useState holds the number and starts at 0
  const [count, setCount] = useState(0)

  // REQUIREMENT #3: Event handler increases the number by 1
  // We use the functional update form setCount(c => c + 1)
  // so that React always uses the most recent state value.
  function handleIncrement() {
    setCount(c => c + 1)
  }

  // Event handler to reset the count back to 0.
  function handleReset() {
    setCount(0)
  }

  return (
    <section>
      {/* REQUIREMENT #4: Display the `title` prop in an <h2> */}
      <h2>{title}</h2>

      {/* REQUIREMENT #2: Display the current number in a <p> */}
      <p>
        Current number: <strong>{count}</strong>
      </p>

      {/* Buttons wire up event handlers via the onClick prop */}
      <div className="btn-row">
        {/* REQUIREMENT #3: Increment button */}
        <button onClick={handleIncrement}>+1</button>

        {/* REQUIREMENT #5 (Bonus): Reset button sets number back to 0 */}
        <button onClick={handleReset}>Reset</button>
      </div>
    </section>
  )
}
