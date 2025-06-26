# Challenge 19 - Redux State Management

> Counter application implementing Redux for global state management with actions, reducers, and store configuration

## 🎯 Objective

Implement a complete Redux setup for state management, demonstrating actions, reducers, store configuration, and React-Redux integration with useSelector and useDispatch hooks.

## 📁 Files

- `src/App.jsx` - Main application component
- `src/main.jsx` - Redux store configuration and Provider setup
- `src/components/CounterComponent.jsx` - Component using Redux hooks
- `src/utils/counterAcTypes.js` - Action type constants
- `src/utils/counterActions.js` - Action creators
- `src/utils/counterReducer.js` - Counter reducer with state logic
- `src/utils/reducers.js` - Root reducer combining all reducers
- `package.json` - Dependencies including redux and react-redux

## 🔧 Implementation

**Redux Store Setup in main.jsx:**

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './utils/reducers'; 
import App from './App'; 

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

**Action Types:**

```javascript
export const DECREMENT = 'DECREMENT';
export const INCREMENT_BY = 'INCREMENT_BY';
```

**Action Creators:**

```javascript
import { DECREMENT, INCREMENT_BY } from './counterAcTypes';

export const decrement = () => ({
  type: DECREMENT,
});

export const incrementBy = (value) => ({
  type: INCREMENT_BY,
  payload: value,
});
```

**Counter Reducer:**

```javascript
const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case INCREMENT_BY:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
};
```

**Component using Redux:**

```jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, incrementBy } from '../utils/counterActions';

const CounterComponent = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(0);

  const handleIncrementBy = () => {
    dispatch(incrementBy(inputValue));
  };

  return (
    <div className="counter">
      <h1 className="count">{count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={handleIncrementBy}>Increment by {inputValue}</button>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
    </div>
  );
};
```

## 🚀 Usage

```bash
npm install
npm run dev
```

## 🎓 Concepts

- Redux store configuration with createStore
- React-Redux Provider for global state access
- useSelector hook for reading state
- useDispatch hook for dispatching actions
- Action creators and action types
- Reducers with immutable state updates
- combineReducers for organizing multiple reducers
- Pure functions and Redux principles
- Controlled inputs with Redux state

---

**Challenge 19** - Data Structures and Algorithms II
