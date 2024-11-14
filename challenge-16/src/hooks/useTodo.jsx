import { useState } from 'react';

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
