import {createSlice} from "@reduxjs/toolkit";
import { LOGIN } from "../../constants";

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || {},
    authRoute: LOGIN,
}

const appSlice = createSlice(
    {
        name: 'appSlice',
        initialState,
     reducers: {
ChangeUser: (state , {payload})=> {
    state.user = payload
},
authRouteChanger: (state, {payload}) =>{
    state.authRoute= payload
}
    },
})
export const {ChangeUser, authRouteChanger} = appSlice.actions
export const userSelector= state=> state.appSlice.user
export const authRouteSelector = state=> state.appSlice.authRoute

export default appSlice.reducer;
