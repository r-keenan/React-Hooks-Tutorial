import useFetch from "../customHooks/useFetch";

import React from "react";

const containerStyle = {
  marginTop: "20px",
  textAlign: "center",
};

export default function ApiText() {
  const { data, loading } = useFetch("http://numbersapi.com/43/trivia");
  return <div style={containerStyle}>{loading ? "loading..." : data}</div>;
}
