import React from 'react';

const Counter = (props) => {

  let {value, onChange} = props;

  return(
    <div className="counter">
      <b>{value}</b>
      <div className="counter-controls">
        <button className="button is-danger is-small" onClick={() => (value>0) ? onChange('decr') : null}>-</button>
        <button className="button is-success is-small" onClick={() => onChange('incr')}>+</button>
      </div>
    </div>
  )
}

export default Counter;