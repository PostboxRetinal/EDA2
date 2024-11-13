import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import fetchReducer from './slices/fetchSlice';

export const RTKstore = configureStore({
  reducer: {
    counter: counterReducer,
    fetch: fetchReducer,
  },
});