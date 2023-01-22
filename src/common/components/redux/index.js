import appSlice from './slices/appSlice'
import productsSlice from "./slices/productSlice";
import cartsSlice from "./slices/cartSlice";




import { combineReducers } from '@reduxjs/toolkit'


export const rootReducer = combineReducers ({
    appSlice,
    cartsSlice,
    productsSlice

})