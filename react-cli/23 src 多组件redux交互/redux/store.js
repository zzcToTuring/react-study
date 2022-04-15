/*
用于存放专门暴露一个store对象 整个应用只有一个store对象
*/
import { createStore, combineReducers } from "redux"
import countReducer from "../redux/reducers/count/count_reducer"
import personReducer from "../redux/reducers/person/index"

//汇总所有的reducer
const All=combineReducers({
    count: countReducer,
    person: personReducer
})

export default createStore(All)