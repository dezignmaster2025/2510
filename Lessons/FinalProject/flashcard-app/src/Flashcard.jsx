
// Step 3: Flip button functionality
import { useState } from 'react';

function Flashcard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flashcard">
      <p>{flipped ? answer : question}</p>
      <button onClick={() => setFlipped(!flipped)}>Flip</button>
    </div>
  );
}

export default Flashcard;
