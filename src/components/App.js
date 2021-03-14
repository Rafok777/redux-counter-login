import React from "react";
import { increment, decrement, login } from "../actions";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(1))}>+1</button>
      <button onClick={() => dispatch(decrement(1))}>-1</button>
      <br></br>
      <button onClick={() => dispatch(increment(3))}>+3</button>
      <button onClick={() => dispatch(decrement(3))}>-3</button>
      <br></br>
      <button onClick={() => dispatch(increment(7))}>+7</button>
      <button onClick={() => dispatch(decrement(7))}>-7</button>

      <br></br>
      <button onClick={() => dispatch(login())}>LOGIN</button>
      {isLogged && <p>Confidential information for users only</p>}
    </div>
  );
}
