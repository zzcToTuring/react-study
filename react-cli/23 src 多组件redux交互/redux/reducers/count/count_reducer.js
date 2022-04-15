const initState = 0//初始状态
export default function countReducer(preState = initState, action) {
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