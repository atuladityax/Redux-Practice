import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addnumber,
  decrement,
  increment,
  reset,
} from "../Redux/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const [number, setNumber] = useState("");

  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <input
        type="number"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      <button onClick={() => dispatch(addnumber(number))}>
        Upadate Number
      </button>
    </div>
  );
};

export default Counter;