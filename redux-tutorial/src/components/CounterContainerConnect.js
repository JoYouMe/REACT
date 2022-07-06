import React from 'react';

const CounterContainerConnect = ({ number, onIncrease, onDecrease }) => {
  return (
    <div>
      <h1>{number}</h1>
      <button type="button" onClick={onIncrease}>
        +1
      </button>
      <button type="button" onClick={onDecrease}>
        -1
      </button>
    </div>
  );
};

export default CounterContainerConnect;
