import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/auth/AuthSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
})
