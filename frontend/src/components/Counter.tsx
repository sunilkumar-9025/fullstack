import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import {
  increment,
  decrement,
  incrementByAmt,
  decrementByAmt,
  incrementAsync,
} from "../state/counter/reducer";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <button onClick={() => dispatch(incrementAsync(10))}>
          Increment 10
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(decrementByAmt(10))}>
          Decrement 10
        </button>
      </div>
    </div>
  );
};

export default Counter;
