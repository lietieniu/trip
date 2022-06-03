 import { Middleware } from "redux"

// export const actionLog: Middleware = (store) => (next) => (action) => {
//     // 打印之前的action和state值
//     console.log("state 当前", store.getState());
//     console.log("action", action);
//     // 将action分发给reducer
//     next(action)
//     console.log("state 更新", store.getState())
// }