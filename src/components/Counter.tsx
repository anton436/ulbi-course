import React, {useState} from 'react';
import classes from './Counter.module.scss'

export const Counter = () => {
  const [counter, setCounter] = useState(1)
  return (
    <div className={classes.test}>
      <h1>{counter}</h1>
      <button>-</button>
      <button onClick={() => setCounter(counter +1)}>+</button>


    </div>
  );
};

