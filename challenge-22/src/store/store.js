import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ['auth/setUser'], // Ignorar estas acciones
				ignoredActionPaths: ['payload.user'], // Ignorar estas rutas en las acciones
				ignoredPaths: ['auth.user'], // Ignorar estas rutas en el estado
			},
		}),
});
