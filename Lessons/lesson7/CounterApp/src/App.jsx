
import React, { useState } from 'react';

function App() {
  return (
    <>
      <h2>Welcome to the Counter App</h2>
      {/* Pass the title prop to Counter */}
      <Counter title="Simple Counter" />
    </>
  );
}

function Counter({ title }) {
  // State for the counter
  const [count, setCount] = useState(0);

  // Handler to increase count
  const handleIncrease = () => {
    setCount(count + 1);
  };

  // Handler to reset count
  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <h3>{title}</h3>
      <p>Count: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
