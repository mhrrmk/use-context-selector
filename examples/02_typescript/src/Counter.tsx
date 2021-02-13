import React from 'react';

import { useMyContextSelector } from './state';

const Counter = () => {
  const count = useMyContextSelector((v) => v[0].count);
  const dispatch = useMyContextSelector((v) => v[1]);
  return (
    <div>
      {Math.random()}
      <div>
        <span>Count: {count}</span>
        <button type="button" onClick={() => dispatch({ type: 'increment' })}>+1</button>
        <button type="button" onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
