import { configureStore } from '@reduxjs/toolkit'
import { homeSlice } from './features/homeSlice'

export const store = configureStore({
  reducer: {
    [homeSlice.name]: homeSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
