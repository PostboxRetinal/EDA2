# Challenge 16 - Custom useTodo Hook

> Todo application implementing a custom React hook for state management and todo operations

## 🎯 Objective

Create a reusable custom hook `useTodo` that encapsulates all todo-related state management and operations, demonstrating custom hook patterns and state logic separation.

## 📁 Files

- `src/App.jsx` - Main application with TodoItem component
- `src/hooks/useTodo.jsx` - Custom hook for todo state management
- `package.json` - Dependencies and scripts

## 🔧 Implementation

**useTodo Custom Hook:**

```jsx
export default function useTODO(initialTodos = []) {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (text) => {
    setTodos([...todos, { text, done: false }]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const countTodos = () => todos.length;

  const countPendingTodos = () => todos.filter((todo) => !todo.done).length;

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    countTodos,
    countPendingTodos,
  };
}
```

**App Component Using the Hook:**

```jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import useTODO from './hooks/useTodo';

function TodoItem({ todo, index, toggleTodo, deleteTodo }) {
  return (
    <div className="todo-item">
      <span
        onClick={() => toggleTodo(index)}
        style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

function App() {
  const {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    countTodos,
    countPendingTodos,
  } = useTODO([
    { text: 'Learn React', done: false },
    { text: 'Learn Vite', done: false },
  ]);

  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>useTodo custom hook</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <div>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
      <p>Total Todos: {countTodos()}</p>
      <p>Pending Todos: {countPendingTodos()}</p>
    </div>
  );
}
```

## 🚀 Usage

```bash
npm install
npm run dev
```

## 🎓 Concepts

- Custom React hooks for reusable logic
- State management encapsulation
- Hook composition and return patterns
- Array manipulation with immutable operations
- Component-hook separation of concerns
- Index-based todo operations
- State initialization with default values
- PropTypes for component type validation

---

**Challenge 16** - Data Structures and Algorithms II
