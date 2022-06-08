//Redux Toolkit简化redux
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface ProductSearchState {
    loading: boolean,
    error: string | null, //联合类型
    data: any,
    pagination: any;
};

const initialState: ProductSearchState = {
    loading: false,
    error: null,
    data: null,
    pagination: null //分页数据
}

export const searchProduct = createAsyncThunk(
    "productSearch/searchProduct",
    async (paramaters: {
        keywords: string,
        pageNumber: number | string,
        pageSize: number | string
    }, thunkAPI) => {
        let url = `http://123.56.149.216:8080/api/touristRoutes?pageNumber=${paramaters.pageNumber}&pageSize=${paramaters.pageSize}`
        if (paramaters.keywords) {
            url += `&keywords=${paramaters.keywords}`
        }
        let res = await axios.get(url, 
        {
            headers: {
                "x-icode": "FB80558A73FA658E"
            }
        });
        return {
            data: res.data,
            pagination: JSON.parse(res.headers["x-pagination"])
        }
    }
)

export const productSearchSlice = createSlice({
    name: "productSearch",
    initialState,
    reducers: { //1.reducers是reducer+action结合,2.reducers是一个对象

    },
    extraReducers: {
        [searchProduct.pending.type]: (state) => {
            //return { ...state, loading: true }
            state.loading = true; //immer简化写法
        },
        [searchProduct.fulfilled.type]: (state, action) => {
            state.data = action.payload.data;
            state.pagination = action.payload.pagination;
            state.loading = false;
            state.error = null;
        },
        [searchProduct.rejected.type]: (state, action) => {
            //let x=action.payload
            state.error = action.payload;
            state.loading = false;
        }
    }
}) 
