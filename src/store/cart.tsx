import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Product[] = []

const cartSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
        state.push( { name: action.payload })
    },
    emptyCart: (state) => {
        return initialState
    },
  },
})
export const { addToCart, emptyCart } = cartSlice.actions

export default cartSlice.reducer