import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
    'products/get',
    async () => {
        return await fetch('http://localhost:3000/products')
            .then(res => res.json())
    }
)

const getProductsFulfilled = (state, {payload}) => {
    state.products = payload
}

export const productsExtraReducer = builder => {
    builder
        .addCase(getProducts.fulfilled, getProductsFulfilled)
}
