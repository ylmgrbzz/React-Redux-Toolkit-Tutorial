import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset, incrementByAmount } from "./CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = React.useState("0");
  const addAmount = Number(incrementAmount) || 0;

  return (
    <section>
      <h2>Counter</h2>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment by 5
        </button>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(addAmount))}>
          Add Amount
        </button>
      </div>
    </section>
  );
};

export default Counter;
