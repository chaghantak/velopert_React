import React, { useState } from "react";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }
}

function Counter(props) {
  const [number, dispatch] = useReducer(reducer, 0);

  const increase = () => {
    dispatch({ type: "INCREASE" });
  };

  const decrease = () => {
    dispatch({ type: "DECREASE" });
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => increase()}>+1</button>
      <button onClick={() => decrease()}>-1</button>
    </div>
  );
}

export default Counter;
