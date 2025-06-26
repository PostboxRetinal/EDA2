# Challenge 14 - React Memo and useCallback

> Performance optimization demonstration using React.memo and useCallback to prevent unnecessary re-renders

## 🎯 Objective

Demonstrate React performance optimization techniques by using React.memo to memoize child components and useCallback to optimize function references, preventing unnecessary re-renders.

## 📁 Files

- `src/App.jsx` - Main application entry point
- `src/components/Father.jsx` - Parent component with useCallback
- `src/components/Son.jsx` - Memoized child component
- `package.json` - Dependencies and scripts

## 🔧 Implementation

**Father Component with useCallback:**

```jsx
export const Father = () => {
  const list = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  const increment = useCallback((num) => {
    setValor(valor + num);
  }, []);

  return (
    <div>
      <h1>Father</h1>
      <p>Total: {valor}</p>
      <hr />
      {list.map((n, idx) => {
        return <Son key={idx} numero={n} increment={increment} />;
      })}
    </div>
  );
};
```

**Memoized Son Component:**

```jsx
export const Son = memo(({ numero, increment }) => {
  console.log("Cargado Nuevamente...");
  
  return (
    <button
      className="btn btn-secondary mr-3"
      onClick={() => {
        increment(numero);
      }}
    >
      {numero}
    </button>
  );
});
```

## 🚀 Usage

```bash
npm install
npm run dev
```

## 🎓 Concepts

- React.memo for component memoization
- useCallback for function memoization
- Performance optimization techniques
- Preventing unnecessary re-renders
- Parent-child component communication
- Console logging for render tracking

---

**Challenge 14** - Data Structures and Algorithms II
