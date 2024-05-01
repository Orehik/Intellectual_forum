import React, { useLayoutEffect, useState } from 'react';
import * as classes from "./Counter.module.scss"

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  useLayoutEffect(() => {
    if (count < 0) {
      setCount(0);
    }
  }, [count]);

  const increment = () => {
    setCount((prevState) => prevState + 1)
  }

  const decrement = () => {
    setCount((prevState) => prevState - 1)
  }

  return (
    <div className={classes.btn}>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
