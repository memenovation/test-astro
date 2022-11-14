// store
import { useCounterStore } from "@hooks/CounterStore";
import shallow from "zustand/shallow";

export const Counter = () => {
  const { count, increment } = useCounterStore(
    (state) => ({ count: state.count, increment: state.increment }),
    shallow
  );
  return (
    <div>
      <h3>Counter</h3>
      <p>Count: {count}</p>
      <button className="bg-red-100 p-2 rounded-sm" onClick={increment}>
        Add
      </button>
    </div>
  );
};
