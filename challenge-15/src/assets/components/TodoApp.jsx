import { useReducer } from 'react';
import { TodoReducer } from './TodoReducer';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const initialState = [
	{
		id: new Date().getTime() - 4000,
		description: 'INO1 | Terminar Proyecto',
		done: true,
	},
	{
		id: new Date().getTime(),
		description: 'EDA2 | API testing con Postman',
		done: false,
	},
    {
		id: new Date().getTime() - 2500,
		description: 'OGE | Apoyar evento final',
		done: true,
	},
];

export const TodoApp = () => {
	const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

	const handleNewTodo = (newTodo) => {
		dispatchTodo({ type: 'add', payload: newTodo });
	};

	const handleDeleteTodo = (todoId) => {
		dispatchTodo({ type: 'delete', payload: todoId });
	};

	return (
		<>
        <div className=''>
			<h1>TodoApp</h1>
			<h2>
				Tareas pendientes: {todos.filter((todo) => !todo.done).length}{' '}<br/>
                Tareas completadas: {todos.filter((todo) => todo.done).length}{' '}
			</h2>{' '}
			<hr />
			<div className="row">
				<div className="col-7">
					<TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
				</div>

				<div className="col-5">
					<h4> Agregar nuevo pendiente </h4>
					<hr />
					<TodoAdd onNewTodo={handleNewTodo} />
				</div>
			</div>
        </div>
		</>
	);
};
