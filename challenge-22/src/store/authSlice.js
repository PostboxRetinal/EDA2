import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	loading: false,
	error: null,
	isInitialized: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
			state.loading = false;
			state.error = null;
			state.isInitialized = true;
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setError: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		},
		clearError: (state) => {
			state.error = null;
		},
		resetAuth: (state) => {
			state.user = null;
			state.loading = false;
			state.error = null;
		},
	},
});

export const { setUser, setLoading, setError, clearError, resetAuth } =
	authSlice.actions;

export default authSlice.reducer;
