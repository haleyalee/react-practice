import React, { useState, useEffect } from 'react'

import Counter from './Counter';

function CounterDashboard() {

  const data = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 }
  ];

  const [counters, setCounters] = useState(data);
  const [total, setTotal] = useState(0);

  useEffect(()=> {
    let sum = 0;
    counters.forEach((counter) => sum += counter.value);
    setTotal(sum);
  }, [counters])

  const addCounter = () => {
    const id = counters[counters.length-1].id + 1;
    setCounters([...counters, {id: id, value: 0}]);
  }

  return (
    <div style={{padding: '1rem'}}>

      <h2>Counter</h2>

      <button onClick={addCounter}>Add counter</button>
      { counters.map((counter, index) =>
        <Counter 
          key={counter.id} 
          value={counter.value} 
          onChange={(dir) => {
            const countersCopy = [...counters];
            if (dir === 'incr') countersCopy[index].value += 1;
            else countersCopy[index].value -= 1;
            setCounters(countersCopy);
          }}
          // onIncrement={() => {
          //   const countersCopy = [...counters];
          //   countersCopy[index].value += 1;
          //   setCounters(countersCopy);
          // }} 
          // onDecrement={() => {
          //   const countersCopy = [...counters];
          //   countersCopy[index].value -= 1;
          //   setCounters(countersCopy);
          // }} 
        />
      )}
      <div>Sum: {total}</div>
    </div>
  );
}

export default CounterDashboard;
