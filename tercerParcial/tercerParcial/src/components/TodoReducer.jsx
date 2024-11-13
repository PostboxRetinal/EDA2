import { createStore } from 'redux';

// Define the initial state
const initialState = [];

// Define the reducer
export const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'delete':
            return state.filter((todo) => todo.id !== action.payload);
        default:
            return state;
    }
};

// Create the Redux store
export const store = createStore(TodoReducer);