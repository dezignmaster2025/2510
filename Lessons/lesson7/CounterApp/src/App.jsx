
import React, { useState } from 'react';

function App() {
  return (
    <>
      <h2>Welcome to the Counter App</h2>
      {

      }
      <Counter title="Simple Counter" />
    </>
  );
}

function Counter({ title }) {
  
  const [count, setCount] = useState(0);

  
  const handleIncrease = () => {
    setCount(count + 1);
  };
  
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
