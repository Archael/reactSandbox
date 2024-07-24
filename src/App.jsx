import { useReducer } from 'react';

export function counterReducer(state, action) {
  if (action.type === 'INCREMENT') {
    const updatedCount = state.count;
    return { ...state, count: updatedCount + 1 };
  }
  if (action.type === 'DECREMENT') {
    const updatedCount = state.count;
    return { ...state, count: updatedCount - 1 };
  }
  if (action.type === 'RESET') {
    return { ...state, count: 0 };
  }
}

function App() {
  const [counterState, counterDispatch] = useReducer(counterReducer, {
    count: 0, // initial state
  });
  function CounterAction(action) {
    counterDispatch({ type: action });
  }
  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={() => CounterAction('INCREMENT')}>Increment</button>
        <button onClick={() => CounterAction('DECREMENT')}>Decrement</button>
        <button onClick={() => CounterAction('RESET')}>Reset</button>
      </p>
      <p id="counter">{counterState.count}</p>
    </div>
  );
}

export default App;
