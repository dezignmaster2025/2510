
import { useState } from "react";

function Flashcard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flashcard">
      {/* Show question or answer based on flipped state */}
      <p dangerouslySetInnerHTML={{ __html: flipped ? answer : question }} />

      {/* Button toggles flipped state */}
      <button onClick={() => setFlipped(!flipped)}>
        {flipped ? "Show Question" : "Show Answer"}
      </button>
    </div>
  );
}

export default Flashcard;
