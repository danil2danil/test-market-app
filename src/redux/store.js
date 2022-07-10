import { configureStore } from "@reduxjs/toolkit";
import counterReduser from './counterSliсe'
import cartReduser from './cartSlise'

export const store = configureStore({
    reducer: {
      count: counterReduser,
      cart: cartReduser,
    },
  })