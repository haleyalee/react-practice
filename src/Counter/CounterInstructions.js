import React from 'react'

function CounterInstructions() {
  return (
    <div>
      <a href="https://codepen.io/Min11Benja/pen/poyzOvM">Source</a>
      <p>
        There are 2 components in this application: *Counter* and *App*. The steps below will take you 
        through modifying and adding components to change functionality and implementation.
      </p>
      <ol>
        <li>
          Update the Counter component to take `onIncrement` and `onDecrement` callbacks as props and ensure 
          they update the counter's values independently. Each callback should take a single, integer value 
          as a parameter which is the amount to increment the counter's existing value by.
        </li>
        <li>Move the global `data` array to the component state for the `App` component.</li>
        <li>Render a fourth `Counter` component and ensure it's value is updated independently from the others.</li>
        <li>
          Create a `Total` component, which should display below the `Counter` components and always display
          the running total of all the `Counter` values.
        </li>
        <li>
          Make a copy of the `Counter` component, then do the following:
          <ul>
            <li>remove `onIncrement` and `onDecrement` props from the new component</li>
            <li>add a single `onChange` callback prop that takes a single integer parameter</li>
            <li>ensure all `Counter` components still update and function independently after this change.</li>
          </ul>
        </li>
      </ol>
    </div>
  )
}

export default CounterInstructions
