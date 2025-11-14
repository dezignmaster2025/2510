/**
 * Name: Gregory Hudgins
 * Course: 2510 React
 * Assignment: Chapter 7 – Counter (JSX / Props / useState)
 * Date: October 5, 2025
 */

// Entry file for the React application.
// - Imports React and the root-level <App /> component.
// - Uses React 18's createRoot() API to mount the app into the #root element.
// - Wraps <App /> with <React.StrictMode> which enables extra checks in development.

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles.css'

// Find the <div id="root"> in index.html and create a React root bound to it
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode runs extra checks and may invoke some lifecycle methods twice in dev
  <React.StrictMode>
    {/* The root component of our app */}
    <App />
  </React.StrictMode>
)
