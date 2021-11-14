## Counter

### [source](https://codepen.io/Min11Benja/pen/poyzOvM)

There are 2 components in this application: *Counter* and *App*. The steps below will take you through modifying and adding components to change functionality and implementation.

1. Update the Counter component to take `onIncrement` and `onDecrement` callbacks as props and ensure they update the counter's values independently. Each callback should take a single, integer value as a parameter which is the amount to increment the counter's existing value by.
2. Move the global `data` array to the component state for the `App` component.
3. Render a fourth `Counter` component and ensure it's value is updated independently from the others.
4. Create a `Total` component, which should display below the `Counter` components and always display the running total of all the `Counter` values.
5. Make a copy of the `Counter` component, then do the following:
  1. remove `onIncrement` and `onDecrement` props from the new component
  2. add a single `onChange` callback prop that takes a single integer parameter
  3. ensure all `Counter` components still update and function independently after this change.