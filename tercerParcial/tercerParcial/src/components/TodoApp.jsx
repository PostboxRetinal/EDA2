import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const TodoApp = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const addTodo = (todo) => {
        dispatch({ type: 'add', payload: todo });
    };

    const deleteTodo = (id) => {
        dispatch({ type: 'delete', payload: id });
    };

    return (
        <>
		<hr/>
		<div className=''>
			<h1>TodoApp + Redux</h1>
			<h2>
				Tareas pendientes: {todos.filter((todo) => !todo.done).length}{' '}<br/>
				Tareas completadas: {todos.filter((todo) => todo.done).length}{' '}
			</h2>{' '}
			<hr />
			<div className="row">
				<div className="col-7">
					<TodoList todos={todos} onDeleteTodo={deleteTodo} />
				</div>

				<div className="col-5">
					<h4> Agregar nuevo pendiente </h4>
					<hr />
					<TodoAdd onNewTodo={addTodo} />
				</div>
			</div>
		</div>
		<hr/>
        </>
    );
};

export default TodoApp;