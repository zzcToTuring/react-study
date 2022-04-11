import React, { Component } from 'react'
import store from '../../redux/store.js'
import { createIncrementAction, createDecrementAction } from '../../redux/count_actions.js'
export default class index extends Component {

    increment = () => {
        let num = parseInt(document.getElementById("selectValue").value)
        store.dispatch(createIncrementAction(num))
    }
    decrement = () => {
        let num = parseInt(document.getElementById("selectValue").value)
        store.dispatch(createDecrementAction(num))

    }
    incrementIfOdd = () => {

        if (store.getState() !== 0) {
            let num = parseInt(document.getElementById("selectValue").value)
            store.dispatch(createIncrementAction(num))

        }

    }
    incrementAsync = () => {
        let num = parseInt(document.getElementById("selectValue").value)
        setTimeout(() => {
            store.dispatch(createIncrementAction(num))
        }, 1000)

    }
    render() {
        return (
            <div>
                <h2>现在的值为：{store.getState()}</h2>
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
/**
 * 分了几个文档 使得其结构更加完整
 * 多了两个文件
 *  1、count_reducer.js
 *        把一些逻辑写在此文件夹中 在store中导出 省的store文件夹过乱
 *  2、count_actions
 *      专门用于书写action的文件夹，例如
 *      export const createIncrementAction = data => ({ type: "increment", data })
 *      在index文件中直接调用store.dispatch(createIncrementAction(num))=dispatch({ type:"increment",data:num*1}) 
 *      action中的作用为封装好 type 我们只需要传入num就能完成操作
 */