/**
 * Name: Gregory Hudgins
 * Course: 2510 React
 * Assignment: Chapter 7 – Counter (JSX / Props / useState)
 * Date: October 5, 2025
 */

// App.jsx
// The top-level component for this minimal assignment.
// Responsibilities:
// - Render a page heading
// - Render the Counter component and pass it a `title` prop

import React from 'react'
import Counter from './components/Counter.jsx'

export default function App() {
  return (
    // A simple container used for layout and spacing (see styles.css)
    <div className="container"> 
      {/* Page title to identify the assignment */}
      <h1>Chapter 7 – Counter Assignment</h1>

      {/* REQUIREMENT #4: Pass a `title` prop from App to Counter */}
      {/* Props let parent components configure child components. */}
      <Counter title="Counter Demo" />
    </div>
  )
}
