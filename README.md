# Challenge 08 - React Counter with Hooks

> Interactive counter application using React hooks and prop validation

## 🎯 Objective

Build a React counter component using useState hook for state management, props for initial values, and PropTypes for type validation with interactive buttons.

## 📁 Files

- `src/main.jsx` - Application entry point with props
- `src/components/FirstApp.jsx` - Counter component with hooks
- `package.json` - Dependencies and scripts
- `vite.config.js` - Vite configuration

## 🔧 Implementation

**FirstApp Counter Component:**

```jsx
export const FirstApp = ({value}) => {
    const [counter, setCounter] = useState(value)

    const handleAdd = () => setCounter(counter + 1)
    const handleSubstract = () => setCounter(counter - 1)
    const handleReset = () => setCounter(value)

    return (
        <>
            <h1>Challenge 8</h1>
            <span>{counter}</span>
            <button onClick={() => handleAdd()}> +1 </button>
            <button onClick={() => handleSubstract()}> -1 </button>
            <button onClick={() => handleReset()}> 0 </button>
        </>
    )
}
```

**Technologies Used:**

- React Hooks (useState)
- PropTypes for validation
- Event handling
- Component props

## 🚀 Usage

```bash
npm install
npm run dev
```

## 🎓 Concepts

- React useState hook
- Props and PropTypes validation
- Event handling in React
- State management
- Default props

---

**Challenge 08** - Data Structures and Algorithms II
