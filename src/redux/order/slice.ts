//Redux Toolkit简化redux
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {checkout} from '../shoppingCart/slice'

export interface OrderState{
    loading: boolean,
    error: string | null, //联合类型
    currentOrder:any
};

const initialState: OrderState = {
    loading: false,
    error: null,
    currentOrder: null
}

export const placeOrder = createAsyncThunk(
    "order/placeOrder",
    async (parameters:{jwt:string,orderId:string}, thunkAPI) => {
        const { data } = await axios.post(
            `http://123.56.149.216:8080/api/orders/${parameters.orderId}/placeOrder`,
            null,
            {
                headers:{
                    Authorization:`bearer ${parameters.jwt}`
                }
            }
        );
        return data;
    }
)

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: {
        [placeOrder.pending.type]: (state) => {
            //return { ...state, loading: true }
            state.loading = true; //immer简化写法
        },
        [placeOrder.fulfilled.type]: (state, action) => {
            state.currentOrder = action.payload;
            state.loading = false;
            state.error = null;
        },
        [placeOrder.rejected.type]: (state, action) => {
            //let x=action.payload
            state.error = action.payload;
            state.loading = false;
        },
        [checkout.pending.type]: (state) => {
            //return { ...state, loading: true }
            state.loading = true; //immer简化写法
        },
        [checkout.fulfilled.type]: (state, action) => {
            state.currentOrder = action.payload;
            state.loading = false;
            state.error = null;
        },
        [checkout.rejected.type]: (state, action) => {
            //let x=action.payload
            state.error = action.payload;
            state.loading = false;
        }
    }
}) 
