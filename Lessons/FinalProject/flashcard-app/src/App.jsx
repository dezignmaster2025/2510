
import { useState, useEffect } from "react";
import Flashcard from "./Flashcard";
import LoadingIndicator from "./LoadingIndicator";
import "./App.css";

function App() {
  const [fetching, setFetching] = useState(true);
  const [triviaData, setTriviaData] = useState([]);
  const [loadingStates, setLoadingStates] = useState([]);

  useEffect(() => {
    async function fetchTrivia() {
      setFetching(true);
      const response = await fetch("https://opentdb.com/api.php?amount=5&type=multiple");
      const data = await response.json();

      const mappedData = data.results.map(item => ({
        question: item.question,
        answer: item.correct_answer
      }));

      setTriviaData(mappedData);
      setFetching(false);

      setLoadingStates(new Array(mappedData.length).fill(true));

      mappedData.forEach((_, index) => {
        setTimeout(() => {
          setLoadingStates(prev => {
            const next = [...prev];
            next[index] = false;
            return next;
          });
        }, (index + 1) * 1500);
      });
    }

    fetchTrivia();
  }, []);

  if (fetching) {
    return (
      <div>
        <h1>Trivia Flashcards</h1>
        <LoadingIndicator label="Loading questions..." />
      </div>
    );
  }

  return (
    <div>
      <h1>Trivia Flashcards</h1>
      {triviaData.map((item, index) => (
        <div key={index} className="card-wrapper">
          {loadingStates[index] ? (
            <LoadingIndicator label={`Loading card ${index + 1}...`} />
          ) : (
            <Flashcard question={item.question} answer={item.answer} />
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
