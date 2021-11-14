import React from 'react'

function Problem(props) {
  return (
    <div style={{padding: '1rem'}}>
      <h2>{props.name}</h2>
      {props.instructions}

      <h3>Implementation</h3>
      {props.implementation}
    </div>
  )
}

export default Problem;;
