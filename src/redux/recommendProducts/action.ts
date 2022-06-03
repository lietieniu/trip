// 引入thunk类型
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import axios from 'axios';

export const FETCH_RECOMMEND_PRODUCTS_START =
    "FETCH_RECOMMEND_PRODUCTS_START"; // 正在调用推荐信息api
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS =
    "FETCH_RECOMMEND_PRODUCTS_SUCCESS"; // 推荐信息api调用成功
export const FETCH_RECOMMEND_PRODUCTS_FAIL =
    "FETCH_RECOMMEND_PRODUCTS_FAIL"; // 推荐信息api调用失败

//创建action指定接口类型(就是函数返回值)
interface FetchRecommendProductsStartAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_START
}
interface FetchRecommendProductsSuccessAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload: any
}
interface FetchRecommendProductsFailAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL
    error: any
}
//将action接口类型合并导出可用于Reducer函数中
export type RecommendProductAction =
    FetchRecommendProductsFailAction |
    FetchRecommendProductsStartAction |
    FetchRecommendProductsSuccessAction

// 1.启动的action
export const recommendStart = (): FetchRecommendProductsStartAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_START
    }
}
// 2.成功的action
export const recommendSuccess = (data: any): FetchRecommendProductsSuccessAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
        payload: data
    }
}
// 3.失败的action
export const recommendFail = (data: any): FetchRecommendProductsFailAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_FAIL,
        error: data
    }
}

// 4.thunk
export const giveMeData = (): ThunkAction<void, RootState, unknown, RecommendProductAction> =>
    async (dispatch, getState) => {
        dispatch(recommendStart());
        try {
            let { data } = await axios.get("http://123.56.149.216:8080/api/productCollections", {
                headers: {
                    "x-icode": "FB80558A73FA658E",
                }
            });
            dispatch(recommendSuccess(data))
        } catch (error: any) {
            dispatch(recommendFail(error.message))
        }
    }