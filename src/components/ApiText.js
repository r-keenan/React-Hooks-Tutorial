import useFetch from "../customHooks/useFetch";
import useMeasure from "../customHooks/useMeasure";

import React, { useState, useEffect, useRef } from "react";

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

  const [rect, divRef] = useMeasure([data]);

  return (
    <div style={containerStyle}>
      <div style={{ display: "flex", widthLeft: "auto", widthRight: "auto" }}>
        <div ref={divRef}>{!data ? "loading..." : data}</div>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <div>count: {count}</div>
      <button onClick={() => setCount((count) => count + 1)}>increment</button>
    </div>
  );
}
