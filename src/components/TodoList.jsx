import { useState, useEffect } from 'react';
import {
	collection,
	addDoc,
	updateDoc,
	deleteDoc,
	doc,
	getDocs,
} from 'firebase/firestore';
import { db } from '../firebase/config';

function TodoList() {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState('');
	const [editingId, setEditingId] = useState(null);
	const [editText, setEditText] = useState('');

	useEffect(() => {
		// Fetch tareas al cargar la página
		fetchTodos();
	}, []);

	// CRUD operations - READ
	const fetchTodos = async () => {
		try {
			const querySnapshot = await getDocs(collection(db, 'todos'));
			const todosData = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setTodos(todosData);
		} catch (error) {
			console.error('Error fetching todos:', error);
		}
	};

	// CRUD operations - CREATE
	const createTodo = async (e) => {
		e.preventDefault();
		if (!newTodo.trim()) return;

		try {
			await addDoc(collection(db, 'todos'), {
				text: newTodo,
				completed: false,
				createdAt: new Date().toISOString(),
			});
			setNewTodo('');
			fetchTodos();
		} catch (error) {
			console.error('Error agregando nueva tarea: ', error);
		}
	};

	// CRUD operations - UPDATE
	const updateTodo = async (id) => {
		if (!editText.trim()) return;

		try {
			const todoRef = doc(db, 'todos', id);
			await updateDoc(todoRef, {
				text: editText,
			});
			setEditingId(null);
			setEditText('');
			fetchTodos();
		} catch (error) {
			console.error('Error actualizando tarea: ', error);
		}
	};

	// CRUD operations - DELETE
	const deleteTodo = async (id) => {
		try {
			await deleteDoc(doc(db, 'todos', id));
			fetchTodos();
		} catch (error) {
			console.error('Error deleting todo:', error);
		}
	};

	return (
		<div className="max-w-lg mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Todo List</h1>
			<form onSubmit={createTodo} className="mb-6">
				<div className="flex gap-2">
					<input
						type="text"
						value={newTodo}
						onChange={(e) => setNewTodo(e.target.value)}
						placeholder="Nueva tarea"
						className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<button
						type="submit"
						className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
						Crear
					</button>
				</div>
			</form>

			<div className="space-y-3">
				{todos.map((todo) => (
					<div
						key={todo.id}
						className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
						{editingId === todo.id ? (
							<div className="flex gap-2 flex-1">
								<input
									type="text"
									value={editText}
									onChange={(e) => setEditText(e.target.value)}
									className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
								<button
									onClick={() => updateTodo(todo.id)}
									className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
									Guardar
								</button>
								<button
									onClick={() => {
										setEditingId(null);
										setEditText('');
									}}
									className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
									Cancelar
								</button>
							</div>
						) : (
							<>
								<span
									className={`text-lg ${
										todo.completed ? 'line-through text-gray-500' : ''
									}`}>
									{todo.text}
								</span>
								<div className="flex gap-2">
									<button
										onClick={() => {
											setEditingId(todo.id);
											setEditText(todo.text);
										}}
										className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
										Editar
									</button>
									<button
										onClick={() => deleteTodo(todo.id)}
										className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">
										Eliminar
									</button>
								</div>
							</>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default TodoList;
