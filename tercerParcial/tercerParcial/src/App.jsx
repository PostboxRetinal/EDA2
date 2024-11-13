import React from 'react';
import { Provider } from 'react-redux';
import { RTKstore } from './store/RTKstore';
import store from './store/store';
import TodoApp from './components/TodoApp';
import { MultipleCustomHook } from './components/MultipleCustomHook';

const App = () => (
	<React.StrictMode>
		<Provider store={store}>
			<TodoApp />
		</Provider>
		<Provider store={RTKstore}>
			<MultipleCustomHook />
		</Provider>
	</React.StrictMode>
);

export default App;
