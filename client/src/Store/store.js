import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './cardReducer'
import productReducer from './ProductDetail'
export const store = configureStore({
  reducer: {
    cardReducer,
    productReducer
  },
})