
import { useState } from "react";

function Flashcard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flashcard">
      {

      }
      <p dangerouslySetInnerHTML={{ __html: flipped ? answer : question }} />

      {
        
      }
      <button onClick={() => setFlipped(!flipped)}>
        {flipped ? "Show Question" : "Show Answer"}
      </button>
    </div>
  );
}

export default Flashcard;
