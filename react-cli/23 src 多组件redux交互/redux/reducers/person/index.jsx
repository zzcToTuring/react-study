//初始状态
const initState=[{id:'001',name:"tom",age:18}]
export default function PersonReducer(preState=initState,action){
    switch (action.type) {
        case "add_person":
            return [action.data,...preState]
        default:
            return preState
    }
}