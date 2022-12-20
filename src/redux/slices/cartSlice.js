import { createSlice } from "@reduxjs/toolkit";
import {  cartsExtraReducer } from "../thunks/cartThunk";

const initialState = {
    carts:  [],
    user: {
        username: 'vlad',
        balance: 1000
    }
}

const cartsSlice = createSlice({
    name: 'cartsSlice',
    initialState,
    reducers: {
        addProduct: (state, {payload}) => {
            state.carts.push(payload)
        },
        deleteProduct: (state, {payload}) => {
            state.carts = state.carts.filter(item => item.id !== payload)
        },
        changeBalance: (state, {payload}) => {
            state.user.balance = payload
        },
        clearCart: () => initialState
    },
    extraReducers: builder => {
        cartsExtraReducer(builder)
    }
}) 

export const { addProduct, deleteProduct, changeBalance, clearCart, cartsLength } = cartsSlice.actions

export const cartsSelector = state => state.cartsSlice.carts
export const balanceSelector = state => state.cartsSlice.user.balance

export default cartsSlice.reducer