// 引入constants常量
import {
    FETCH_RECOMMEND_PRODUCTS_START,
    FETCH_RECOMMEND_PRODUCTS_FAIL,
    FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    RecommendProductAction //合并和的action的联合类型
} from './action'


//state规范接口类型
export interface recomProductState {
    productList: any[],
    loading: boolean,
    error: string | null
};
// 创建初始state状态
const initialState: recomProductState = {
    productList: [],
    loading: false,
    error: null
}

export const recomProductReducer = (state = initialState, action: RecommendProductAction) => {
    switch (action.type) {
        case FETCH_RECOMMEND_PRODUCTS_START:
            return {
                ...state, loading: true
            }
        case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
            return {
                ...state, loading: false, productList: action.payload
            }
        case FETCH_RECOMMEND_PRODUCTS_FAIL:
            return {
                ...state, loading: false, error: action.error
            }
        default:
            return state
    }
}