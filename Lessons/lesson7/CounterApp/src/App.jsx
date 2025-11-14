import React, { useState } from 'react';
function App() { 

 return ( 

   <div> 

     <h1>Welcome to the Counter App</h1> 

     <Counter /> 

   </div> 

 ); 

} 

 

function Counter() { 

 // You'll need to add state and props here 
 const [count, setCount] = useState(0);
 const title = "Simple Counter";


 const handleIncrease = () => {
   setCount(count + 1);
 }; 

 

 return ( 

   <div> 

     <h2>{title}</h2> 

     <p>Count: {count}</p> 

     <button onClick={handleIncrease}>Increase</button> 

   </div> 

 ); 

} 

 

export default App; 