//Redux Toolkit简化redux
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface ProductDetailState {
    loading: boolean,
    error: string | null, //联合类型
    data: any
};

const initialState: ProductDetailState = {
    loading: false,
    error: null,
    data: null
}

export const getProductDetail = createAsyncThunk(
    "productDetail/getProductDetail",
    async (orderDetailId: string, thunkAPI) => {
        const { data } = await axios.get(`http://123.56.149.216:8080/api/touristRoutes/${orderDetailId}`,
         {
            headers: {
                "x-icode": "FB80558A73FA658E"
            }
        }
        );
        return data;
    }
)

export const productDetailSlice = createSlice({
    name: "productDetail",
    initialState,
    reducers: { //1.reducers是reducer+action结合,2.reducers是一个对象

    },
    extraReducers: {
        [getProductDetail.pending.type]: (state) => {
            //return { ...state, loading: true }
            state.loading = true; //immer简化写法
        },
        [getProductDetail.fulfilled.type]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        [getProductDetail.rejected.type]: (state, action) => {
            //let x=action.payload
            state.error = action.payload;
            state.loading = false;
        }
    }
}) 
