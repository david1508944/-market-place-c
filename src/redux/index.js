import { combineReducers } from "@reduxjs/toolkit";

import productsSlice from "./slices/productSlice";
import cartsSlice from "./slices/cartSlice";

export const rootReducer = combineReducers({
    productsSlice,
    cartsSlice
})

