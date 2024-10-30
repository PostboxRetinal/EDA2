import React from 'react';
import useCounter from './hooks/useCounter';

const App = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={{ margin: '5px', padding: '10px' }}>Increment</button>
      <button onClick={decrement} style={{ margin: '5px', padding: '10px' }}>Decrement</button>
      <button onClick={reset} style={{ margin: '5px', padding: '10px' }}>Reset</button>
    </div>
  );
};

export default App;
