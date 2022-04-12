/*
用于存放专门暴露一个store对象 整个应用只有一个store对象
*/
import {createStore} from "redux"
import countReducer from "./count_reducer"

//引入 createStore创建redux,需要传入参数，参数来自于引入的reducer
export default createStore(countReducer)