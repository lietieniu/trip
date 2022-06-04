//Redux Toolkit简化redux
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface UserState {
    loading: boolean,
    error: string | null, //联合类型
    token: string | null
};

const initialState: UserState = {
    loading: false,
    error: null,
    token: null //jwt
}

export const signIn = createAsyncThunk(
    "user/signIn",
    async (paramaters:{
           email:string|object,
           password:string|object,
    }, thunkAPI) => {
        const { data } = await axios.post(`http://123.56.149.216:8080/api/touristRoutes`,{
            email:paramaters.email,
            password:paramaters.password
        });
        return data.token;
    }
)

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: { //1.reducers是reducer+action结合,2.reducers是一个对象
       loginOut:(state)=>{
          state.token=null;
          state.error=null;
          state.loading=false;
       }
    },
    extraReducers: {
        [signIn.pending.type]: (state) => {
            //return { ...state, loading: true }
            state.loading = true; //immer简化写法
        },
        [signIn.fulfilled.type]: (state, action) => {
            state.token = action.payload;
            state.loading = false;
            state.error = null;
        },
        [signIn.rejected.type]: (state, action) => {
            //let x=action.payload
            state.error = action.payload;
            state.loading = false;
        }
    }
}) 
