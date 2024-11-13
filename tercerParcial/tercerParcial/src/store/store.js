import { configureStore } from '@reduxjs/toolkit';
import { TodoReducer } from '../components/TodoReducer';

const store = configureStore({
    reducer: {
        todos: TodoReducer
    }
});

export default store;