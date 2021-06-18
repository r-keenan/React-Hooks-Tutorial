import React, { useState } from "react";

// function expensiveInitialState(){
//   return 10;
// }

function App() {
  //use arrow function with useState when you have an expensive function
  //causes the component to rerender just once.
  //const [count, setCount] = useState(() => expensiveInitialState());

  const [count, setCount] = useState(10);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <button onClick={incrementCount}>Click Me</button>
      <div>{count}</div>
    </div>
  );
}

export default App;
