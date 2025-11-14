import { useState } from 'react';
import axios from 'axios';

function App() {
  const [fact, setFact] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('https://catfact.ninja/fact');
      setFact(response.data.fact);
      setError(null);
    } catch (err) {
      // Log the caught error for debugging and to avoid the "defined but never used" lint warning
      console.error(err);
      setError('Failed to fetch cat fact. Please try again.');
      setFact('');
    }
  };

  return (
    <div>
      <h1>Cat Fact Finder</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Get Cat Fact</button>
      </form>
      {fact && <p>{fact}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;