import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '../store'

export interface HomeState {
  coins: Array<any> //TODO: define coin interface
}

const initialState: HomeState = {
  coins: [],
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setCoins(state, action: PayloadAction<Array<any>>) {
      state.coins = action.payload
    },
  },
})

export const { setCoins } = homeSlice.actions

export const getCoins = (state: AppState) => state.home.coins

export default homeSlice.reducer
