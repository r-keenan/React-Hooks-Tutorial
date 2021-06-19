import React, { useState } from "react";

import LoginForm from "./components/LoginForm";
import ApiText from "./components/ApiText";
// function expensiveInitialState(){
//   return 10;
// }

function App() {
  //use arrow function with useState when you have an expensive function
  //causes the component to rerender just once.
  //const [count, setCount] = useState(() => expensiveInitialState());

  const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });

  return (
    <div className="App">
      <button
        onClick={() =>
          setCount((currentState) => ({
            ...currentState,
            count: currentState.count + 1,
          }))
        }
      >
        Click Me
      </button>
      <div>count 1: {count}</div>
      <div>count 2: {count2}</div>
      <div>
        <ApiText />
      </div>

      <LoginForm />
    </div>
  );
}

export default App;
