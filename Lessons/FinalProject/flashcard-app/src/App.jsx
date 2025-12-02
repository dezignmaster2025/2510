
// ==============================
// Step 1: Import React hooks
// ==============================
import { useState, useEffect } from 'react';
import Flashcard from './Flashcard';
import './App.css';

// ==============================
// Step 2: Main App Component
// ==============================
function App() {
  // Step 5: Loading state for indicator
  const [loading, setLoading] = useState(true);

  // Step 6: State for trivia data from API
  const [triviaData, setTriviaData] = useState([]);

  // ==============================
  // Step 6: Fetch trivia questions from API
  // ==============================
  useEffect(() => {
    async function fetchTrivia() {
      const response = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
      const data = await response.json();

      // Map API data to question-answer pairs
      setTriviaData(data.results.map(item => ({
        question: item.question,
        answer: item.correct_answer
      })));

      // Hide loading indicator
      setLoading(false);
    }

    fetchTrivia();
  }, []);

  // ==============================
  // Step 4 & 5: Render UI
  // ==============================
  return (
    <div>
      {/* Show loading or flashcards */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        triviaData.map((item, index) => (
          <Flashcard key={index} question={item.question} answer={item.answer} />
        ))
      )}
    </div>
  );
}

export default App;
