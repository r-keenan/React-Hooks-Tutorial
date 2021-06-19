import useFetch from "../customHooks/useFetch";

import React from "react";

export default function ApiText() {
  const { data, loading } = useFetch("http://numbersapi.com/43/trivia");
  return <div>{loading ? "loading..." : data}</div>;
}
