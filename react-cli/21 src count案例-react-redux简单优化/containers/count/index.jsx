//引入Count的UI组件
import CountUI from "../../com/count"
//连接UI组件与redux
import {connect} from "react-redux"
//引入action
import{
    createDecrementAction,
    createIncrementAction
}from "../../redux/count_actions"


/* 
    1.mapStateToProps函数返回的是一个对象；
    2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
    3.mapStateToProps用于传递状态
*/
function mapStateToProps(state){
    return {count:state}
}
/* 
    1.mapDispatchToProps函数返回的是一个对象；
    2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
    3.mapDispatchToProps用于传递操作状态的方法
*/
function mapDispatchToProps(dispatch){
    return{jia:(number)=>{
        //通知redux执行加法操作
        dispatch(createIncrementAction(number))
    },
    jian:(number)=>{
        dispatch(createDecrementAction(number))
    }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
