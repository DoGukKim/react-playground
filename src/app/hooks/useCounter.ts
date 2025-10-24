import React from "react";
import { FlatObject } from "../utils/types/shared";

type State = {
  count: number;
};
type Action = {
  setCount: React.Dispatch<React.SetStateAction<State["count"]>>;
  increment: (step: State["count"]) => void;
  decrement: (step: State["count"]) => void;
  reset: () => void;
};
type Return = FlatObject<State & Action>;

const useCounter = (initialValue?: State["count"]): Return => {
  const [count, setCount] = React.useState<State["count"]>(initialValue ?? 0);

  const increment: Action["increment"] = (step = 1) => {
    setCount((x) => x + step);
  };

  const decrement: Action["decrement"] = (step = 1) => {
    setCount((x) => x - step);
  };

  const reset: Action["reset"] = () => {
    setCount(initialValue ?? 0);
  };

  return { count, setCount, increment, decrement, reset };
};

export default useCounter;
