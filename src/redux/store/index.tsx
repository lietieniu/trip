import { createStore, applyMiddleware } from "redux";

import { Language } from "../language/languageReducer";
import { recomProductReducer } from '../recommendProducts/recomProductsReducer'

// 引入thunk中间健函数
import thunk from 'redux-thunk';
// 自定义的中间函数
//import { actionLog } from "../middleware/actionLog";

import { productDetailSlice } from '../productDetail/slice';
import { productSearchSlice } from '../productSearch/slice'
import { userSlice } from '../user/slice';
import { shoppingCartSlice } from "../shoppingCart/slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { orderSlice } from "../order/slice";
// import {actionLog} from '../middleware/actionLog'

// redux-persist---数据持久化
import { persistStore } from 'redux-persist'//1.强化redcer和redux
import storage from 'redux-persist/lib/storage';//2.引入localstorage
import persistReducer from "redux-persist/es/persistReducer";

//3.配置persist持久化的数据信息
const persistConfig = {
    key: "root",//代表持久化的命名空间,数据的根目录
    storage, //存储用户数据信息的方式(以localstorage的方式存储)

    // 名单不写的话,默认全部持久化
    whitelist: ["user"],//白名单:选中将哪个数据持久化
    // blackList:[] 黑名单
};

export const rootReducer = combineReducers({
    Language,
    recomProductReducer,
    productDetail: productDetailSlice.reducer,
    productSearch: productSearchSlice.reducer,
    user: userSlice.reducer,
    shoppingCart:shoppingCartSlice.reducer,
    order:orderSlice.reducer
});

//4.配置持久化的reducer
const PersistReducer = persistReducer(persistConfig, rootReducer)


// export const store = createStore(rootReducer, applyMiddleware(thunk));
const store = configureStore({
    // reducer: PersistReducer,
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
    devTools: true

})
// 5.创建持久化的store并导出
const persistor=persistStore(store);

// export default {persistor,store}
export default store;

export type RootState = ReturnType<typeof rootReducer>