
import { useReducer } from 'react';

const initialState = {
  loading: false,
  error: null,
  fact: null,
};

function factReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { loading: true, error: null, fact: null };
    case 'FETCH_SUCCESS':
      return { loading: false, error: null, fact: action.payload };
    case 'FETCH_ERROR':
      return { loading: false, error: action.payload, fact: null };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(factReducer, initialState);

  const getCatFact = async () => {
    dispatch({ type: 'FETCH_START' });
    try {
      const response = await fetch('https://catfact.ninja/fact');
      if (!response.ok) {
        throw new Error('Failed to fetch cat fact');
      }
      const data = await response.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: data.fact });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Cat Fact Generator</h1>
      <button onClick={getCatFact}>Get Cat Fact</button>

      {/* Conditional Rendering */}
      {state.loading && <p>Loading...</p>}
      {state.fact && <p>{state.fact}</p>}
      {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
    </div>
  );
}

export default App;
