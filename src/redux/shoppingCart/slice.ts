//Redux Toolkit简化redux
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface ShoppingCartState {
    loading: boolean,
    error: string | null, //联合类型
    items: any[]
};

const initialState: ShoppingCartState = {
    loading: false,
    error: null,
    items: [] //订单列表 
}

//1.获得购物车请求
export const getShoppingCart = createAsyncThunk(
    "shoppingCart/getShoppingCart",
    async (jwt, thunkAPI) => {
        const { data } = await axios.get(`http://123.56.149.216:8080/api/shoppiingCart`,
            {
                headers: {
                    Authorization: `bearer ${jwt}`
                }
            }
        );
        return data.shoppingCartItems;
    }
);

//2.添加购物车请求
export const addShoppingCart = createAsyncThunk(
    "shoppingCart/addShoppingCart",
    async (parameters: { jwt: string, touristRouteId: string }, thunkAPI) => {
        const { data } = await axios.post(`http://123.56.149.216:8080/api/shoppiingCart`,
            {
                touristRouteId: parameters.touristRouteId
            },
            {
                headers: {
                    Authorization: `bearer ${parameters.jwt}`
                }
            }
        );
        return data.shoppingCartItems;
    }
);
// 3.删除购物车请求
export const clearShoppingCart = createAsyncThunk(
    "shoppingCart/getShoppingCart",
    async (parameters: { jwt: string, itemIds: string[] }, thunkAPI) => {
        return await axios.delete(`http://123.56.149.216:8080/api/shoppiingCart/items/(${parameters.itemIds.join(',')})`,
            {
                headers: {
                    Authorization: `bearer ${parameters.jwt}`
                }
            }
        );
        // 没有返回内容
    }
);
// 4.下单支付请求
export const checkout = createAsyncThunk(
    "shoppingCart/checkout",
    async (jwt:string, thunkAPI) => {
        const { data } = await axios.post(`http://123.56.149.216:8080/api/checkout`,
            null,//body无内容,headers头部传递一个jwt即可
            {
                headers: {
                    Authorization: `bearer ${jwt}`
                }
            }
        );
        return data;//返回的订单数据
    }
);


export const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState,
    reducers: { //1.reducers是reducer+action结合,2.reducers是一个对象

    },
    extraReducers: {
        [getShoppingCart.pending.type]: (state) => {
            //return { ...state, loading: true }
            state.loading = true; //immer简化写法
        },
        [getShoppingCart.fulfilled.type]: (state, action) => {
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        },
        [getShoppingCart.rejected.type]: (state, action) => {
            //let x=action.payload
            state.error = action.payload;
            state.loading = false;
        },
        [addShoppingCart.pending.type]: (state) => {
            //return { ...state, loading: true }
            state.loading = true; //immer简化写法
        },
        [addShoppingCart.fulfilled.type]: (state, action) => {
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        },
        [addShoppingCart.rejected.type]: (state, action) => {
            //let x=action.payload
            state.error = action.payload;
            state.loading = false;
        },
        [clearShoppingCart.pending.type]: (state) => {
            //return { ...state, loading: true }
            state.loading = true; //immer简化写法
        },
        [clearShoppingCart.fulfilled.type]: (state, action) => {
            state.items = []; //清除订单列表,为空
            state.loading = false;
            state.error = null;
        },
        [clearShoppingCart.rejected.type]: (state, action) => {
            //let x=action.payload
            state.error = action.payload;
            state.loading = false;
        },
        //下单支付reducer
        [checkout.pending.type]: (state) => {
            //return { ...state, loading: true }
            state.loading = true; //immer简化写法
        },
        [checkout.fulfilled.type]: (state, action) => {
            state.items =[];//下单成功后，将购物车清空
            state.loading = false;
            state.error = null;
        },
        [checkout.rejected.type]: (state, action) => {
            //let x=action.payload
            state.error = action.payload;
            state.loading = false;
        },
    }
}) 
