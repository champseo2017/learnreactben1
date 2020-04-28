import React from "react";
import { useCountRenders } from "./useCountRenders";
export const Square = React.memo(({ n, increment }) => {
  useCountRenders();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        increment(n);
      }}
    >
      {n}
    </button>
  );
});
