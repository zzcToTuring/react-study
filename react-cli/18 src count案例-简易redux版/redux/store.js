/*
用于存放专门暴露一个store对象 整个应用只有一个store对象
*/
import {createStore} from "redux"
const initState = 0//初始状态
function countReducer(preState = initState, action) {
    switch (action.type) {
        case "increment":
            return preState + action.data
        case "decrement":
            return preState - action.data
        default:
            return preState
        //如果都不是的话 返回的就是初始状态的值
    }
}
//引入 createStore创建redux,需要传入参数，参数来自于引入的reducer
export default createStore(countReducer)