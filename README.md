# Challenge 15 - Todo App with useReducer

> Todo application implementing useReducer hook for state management with add and delete functionality

## 🎯 Objective

Implement a complete Todo application using React's `useReducer` hook for state management, demonstrating complex state operations and component composition patterns.

## 📁 Files

- `src/App.jsx` - Main application entry point
- `src/assets/components/TodoApp.jsx` - Main todo app component with useReducer
- `src/assets/components/TodoReducer.jsx` - Reducer function for state management
- `src/assets/components/TodoAdd.jsx` - Component for adding new todos
- `src/assets/components/TodoList.jsx` - Todo list container component
- `src/assets/components/TodoItem.jsx` - Individual todo item component
- `package.json` - Dependencies and scripts

## 🔧 Implementation

**TodoApp with useReducer:**

```jsx
export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

  const handleNewTodo = (newTodo) => {
    dispatchTodo({ type: 'add', payload: newTodo });
  };

  const handleDeleteTodo = (todoId) => {
    dispatchTodo({ type: 'delete', payload: todoId });
  };

  return (
    <div>
      <h1>TodoApp</h1>
      <h2>
        Tareas pendientes: {todos.filter((todo) => !todo.done).length}
        <br/>
        Tareas completadas: {todos.filter((todo) => todo.done).length}
      </h2>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
        </div>
        <div className="col-5">
          <h4>Agregar nuevo pendiente</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </div>
  );
};
```

**TodoReducer for State Management:**

```jsx
export const TodoReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'delete':
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
```

**TodoAdd Component:**

```jsx
const TodoAdd = ({ onNewTodo }) => {
  const [description, setDescription] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.trim().length === 0) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    onNewTodo(newTodo);
    setDescription('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="¿Qué tienes en mente?"
        className="form-control"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};
```

## 🚀 Usage

```bash
npm install
npm run dev
```

## 🎓 Concepts

- useReducer hook for complex state management
- Reducer pattern with action types
- Component composition and props passing
- Form handling and controlled inputs
- State immutability and array operations
- Event handling and validation
- Component communication patterns

---

**Challenge 15** - Data Structures and Algorithms II
