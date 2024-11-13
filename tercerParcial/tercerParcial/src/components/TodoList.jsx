import TodoItem from './TodoItem.jsx';

const TodoList = ({ todos = [], onDeleteTodo }) => {
	return (
		<ul className="list-group">
			{todos.map((todo, key) => {
				return <TodoItem key={key} todo={todo} onDeleteTodo={onDeleteTodo} />;
			})}
		</ul>
	);
};

export default TodoList;
