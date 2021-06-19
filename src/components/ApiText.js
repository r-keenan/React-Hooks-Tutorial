import useFetch from "../customHooks/useFetch";

import React, { useState, useEffect } from "react";

const containerStyle = {
  marginTop: "20px",
  textAlign: "center",
};

export default function ApiText() {
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div style={containerStyle}>
      <div>{!data ? "loading..." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount((count) => count + 1)}>increment</button>
    </div>
  );
}
