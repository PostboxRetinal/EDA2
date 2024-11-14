import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import useTODO from './hooks/useTodo';

function TodoItem({ todo, index, toggleTodo, deleteTodo }) {
	return (
		<div className="todo-item">
			<span
				onClick={() => toggleTodo(index)}
				style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
				{todo.text}
			</span>
			<button onClick={() => deleteTodo(index)}>Delete</button>
		</div>
	);
}

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
		<>
			<div align="center">
				<h1>
					Challenge 16
					<br /> useTodo custom hook
				</h1>
			</div>

			<div className="card" align="center">
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
		</>
	);
}

export default App;
