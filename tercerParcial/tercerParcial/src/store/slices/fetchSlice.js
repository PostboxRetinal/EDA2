import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchQuotes = createAsyncThunk(
	'fetch/fetchQuotes',
	async (count) => {
		const response = await fetch(
			`https://api.breakingbadquotes.xyz/v1/quotes/${count}`
		);
		const data = await response.json();
		return data;
	}
);

const fetchSlice = createSlice({
	name: 'fetch',
	initialState: {
		data: null,
		isLoading: false,
		hasError: null,
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchQuotes.pending, (state) => {
				state.isLoading = true;
				state.hasError = null;
			})
			.addCase(fetchQuotes.fulfilled, (state, action) => {
				state.isLoading = false;
				state.data = action.payload;
			})
			.addCase(fetchQuotes.rejected, (state) => {
				state.isLoading = false;
				state.hasError = 'Error actualizando la información';
			});
	},
});

export default fetchSlice.reducer;
