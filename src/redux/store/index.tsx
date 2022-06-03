import { createStore, applyMiddleware } from "redux";

import { Language } from "../language/languageReducer";
import { recomProductReducer } from '../recommendProducts/recomProductsReducer'

// 引入thunk中间健函数
import thunk from 'redux-thunk';
// 自定义的中间函数
//import { actionLog } from "../middleware/actionLog";

import { productDetailSlice } from '../productDetail/slice';
import { productSearchSlice } from '../productSearch/slice'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import {actionLog} from '../middleware/actionLog'

export const rootReducer = combineReducers({
    Language,
    recomProductReducer,
    productDetail: productDetailSlice.reducer,
    productSearch: productSearchSlice.reducer
});

// export const store = createStore(rootReducer, applyMiddleware(thunk));
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
    devTools: true

})

export type RootState = ReturnType<typeof rootReducer>