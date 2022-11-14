// store
import { useCounterStore } from "@hooks/CounterStore";

export const Counter = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
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
