# Challenge 11 - Custom React Hook

> Counter application using a custom React hook for reusable state logic

## 🎯 Objective

Create a custom React hook (`useCounter`) to encapsulate counter logic and demonstrate how to build reusable stateful logic that can be shared across components.

## 📁 Files

- `src/App.jsx` - Main application using the custom hook
- `src/hooks/useCounter.jsx` - Custom hook implementation
- `package.json` - Dependencies and scripts

## 🔧 Implementation

**Custom useCounter Hook:**

```jsx
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return { count, increment, decrement, reset };
};
```

**Using the Hook in App:**

```jsx
const App = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
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

- Custom React hooks
- Hook composition and reusability
- Stateful logic extraction
- Functional updates with setState
- Hook naming conventions (use prefix)
- Clean component architecture

---

**Challenge 11** - Data Structures and Algorithms II
