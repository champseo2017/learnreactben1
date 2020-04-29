import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
const App = () => {
  // http://numbersapi.com/43/trivia
  const localStorCount = JSON.parse(localStorage.getItem("count")); // refresh pages
  const [count, setCount] = useState(() =>
    localStorCount ? localStorCount : 0
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    if (count) {
      localStorage.setItem("count", JSON.stringify(count)); // set refresh pages
    }
  }, [count]); // Change count

  return (
    <div>
      <div>{loading ? "loading..." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
    </div>
  );
};
export default App;