import React, { Component } from 'react'
import { connect } from "react-redux"
import {
    createDecrementAction,
    createIncrementAction
} from "../../redux/count_actions"
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
                <h2>现在的值为：{this.props.count}</h2>
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
    return { count: state }
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



