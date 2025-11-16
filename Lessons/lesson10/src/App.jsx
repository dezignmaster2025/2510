// App.jsx — Implements Instructions 1–7 exactly.
//
// 1) Add an input and a Search button; clicking the button focuses the input (useRef).
// 2) Use inline event handlers for button clicks.
// 3) Fetch articles from 'https://hn.algolia.com/api/v1/search?query=react' using useEffect on mount.
// 4) Show "Loading..." while fetching and an error message if fetch fails.
// 5) Show list of articles with title and a "Dismiss" button for each item.
// 6) Clicking "Dismiss" removes the item using the reducer.
// 7) User can change the search term and fetch new results when the form is submitted.

import { useEffect, useRef, useReducer } from "react";

// Initial state for the reducer
const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  searchTerm: "react",
};

// Reducer to manage all state changes
function storiesReducer(state, action) {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "FETCH_SUCCESS":
      return { ...state, isLoading: false, data: action.payload };
    case "FETCH_FAILURE":
      return { ...state, isLoading: false, isError: true };
    case "REMOVE_ITEM":
      return {
        ...state,
        data: state.data.filter((item) => item.objectID !== action.payload),
      };
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
}

function App() {
  // 1) useRef for focusing the input when the Search button is clicked
  const inputRef = useRef(null);

  const [state, dispatch] = useReducer(storiesReducer, initialState);
  const { data, isLoading, isError, searchTerm } = state;

  // Helper to fetch by term
  async function fetchStories(term) {
    dispatch({ type: "FETCH_INIT" });
    try {
      const response = await fetch(
        `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(term)}`
      );
      if (!response.ok) throw new Error("Request failed");
      const result = await response.json();
      // API returns stories in result.hits
      dispatch({ type: "FETCH_SUCCESS", payload: result.hits });
    } catch {
      dispatch({ type: "FETCH_FAILURE" });
    }
  }

  // 3) Fetch once when the component mounts (default term "react")
  useEffect(() => {
    fetchStories(searchTerm);
  }, []);

  // 7) Form submit triggers a fetch for the current searchTerm
  function handleSubmit(e) {
    e.preventDefault();
    fetchStories(searchTerm);
  }

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "1rem" }}>
      <h1>My Articles</h1>

      {/* 1 + 2 + 7: input + inline click handler for focus + form submit fetch */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <label htmlFor="search" style={{ marginRight: "0.5rem" }}>
          Search:
        </label>

        <input
          id="search"
          type="text"
          ref={inputRef} // 1) attach the ref
          value={searchTerm} // 7) controlled input
          onChange={(e) =>
            dispatch({ type: "SET_SEARCH_TERM", payload: e.target.value })
          }
        />

        <button
          type="submit"
          onClick={() => inputRef.current && inputRef.current.focus()} // 1 + 2) inline focus
          style={{ marginLeft: "0.5rem" }}
        >
          Search
        </button>
      </form>

      {/* 4) loading and error messages */}
      {isError && (
        <p style={{ color: "red" }}>Something went wrong. Please try again.</p>
      )}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        // 5) list articles with title + "Dismiss" button
        <ul>
          {data.map((item) => (
            <li key={item.objectID} style={{ marginBottom: "0.5rem" }}>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.title || "(No Title)"}
              </a>
              {/* 6) inline handler removes an item via reducer */}
              <button
                style={{ marginLeft: "0.5rem" }}
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: item.objectID })
                }
              >
                Dismiss
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;