import { createSlice } from "@reduxjs/toolkit";
import { productsExtraReducer } from "../thunks/productThunks";

const initialState = {
    products: []
}

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        productsExtraReducer(builder)
    }
}) 


export const productsSelector = state => state.productsSlice.products

export default productsSlice.reducer