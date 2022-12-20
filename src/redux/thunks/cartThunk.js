import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCarts = createAsyncThunk(
    'cart/get',
    async () => {
        return await fetch('http://localhost:3000/cart')
            .then(res => res.json())
    }
)

const getCartsFulfilled = (state, {payload}) => {
    state.carts = payload
}

export const cartsExtraReducer = builder => {
    builder
        .addCase(getCarts.fulfilled, getCartsFulfilled)
}
