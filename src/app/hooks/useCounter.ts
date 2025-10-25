"use client";

import React from "react";

type useCounterReturn = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  increment: (step?: number) => void;
  decrement: (step?: number) => void;
  reset: () => void;
};

const useCounter = (initialValue?: number): useCounterReturn => {
  const [count, setCount] = React.useState(initialValue ?? 0);

  const increment = (step = 1) => {
    setCount((x) => x + step);
  };

  const decrement = (step = 1) => {
    setCount((x) => x - step);
  };

  const reset = () => {
    setCount(initialValue ?? 0);
  };

  return { count, setCount, increment, decrement, reset };
};

export default useCounter;
