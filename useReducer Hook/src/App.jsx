import React, { useReducer } from "react";
import "./App.css";

export default function App() {
  const initialState = { count: 0 };

  const INCREMENT = { type: "increment" };
  const DECREMENT = { type: "Decrement" };

  const reducer = (state, actions) => {
    if (actions.type == "increment") {
      return { count: state.count + 1 };
    } else {
      return { count: state.count - 1 };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <button onClick={() => dispatch(DECREMENT)}>-</button>
      <p>{state.count}</p>
      <button onClick={() => dispatch(INCREMENT)}>+</button>
    </>
  );
}
