import useFetch from "../customHooks/useFetch";

import React, { useState } from "react";

const containerStyle = {
  marginTop: "20px",
  textAlign: "center",
};

export default function ApiText() {
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  return (
    <div style={containerStyle}>
      <div>{!data ? "loading..." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount((count) => count + 1)}>increment</button>
    </div>
  );
}
