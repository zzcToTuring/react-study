import React, { Component } from 'react'
import { connect } from "react-redux"
import {
    createDecrementAction,
    createIncrementAction
} from "../../redux/action/count"
class Count extends Component {
    increment = () => {
        let num = parseInt(document.getElementById("selectValue").value)
        this.props.jia(num)
    }
    decrement = () => {
        let num = parseInt(document.getElementById("selectValue").value)
        this.props.jian(num)
    }
    incrementIfOdd = () => {
        if (this.props.state % 2 !== 0) {
            let num = parseInt(document.getElementById("selectValue").value)
            this.props.jia(num)
        }
    }
    incrementAsync = () => {
        let num = parseInt(document.getElementById("selectValue").value)
        setTimeout(() => {
            this.props.jia(num)
        }, 1000)

    }
    render() {
        return (
            <div>
                <h2>现在的值为：{this.props.count}，下方组件列表的个数为：{this.props.personArr.length}</h2>
                <select id="selectValue">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { count: state.count ,personArr: state.person}
}
function mapDispatchToProps(dispatch) {
    return {
        jia: (number) => {
            //通知redux执行加法操作
            dispatch(createIncrementAction(number))
        },
        jian: (number) => {
            dispatch(createDecrementAction(number))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Count)


/**
 * 多个组件之间的操作
 *  1、按照单组件的形式，完成常规的编码
 *  2、store创建的时候，要将两个创建Reducer进行整合，整合的方式参考如下：
 *      const All=combineReducers({//combineReducers由于redux分别暴露产生
            count: countReducer,
            person: personReducer
            })
        export default createStore(All)
    3、当只有一个参数的时候 redux中的数据能直接放入，因此我们也能直接调用
       但是当有多个数据的时候，那调用的方式由于直接放入改为了参照数组的形式进行放入
       取值的时候也从this.props.xxx  ----->this.props.count.xxx进行拿去数据
 * 
 */