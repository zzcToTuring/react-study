import React, { Component } from 'react'
import store from '../../redux/store.js'
export default class index extends Component {

    increment = () => {
        let num = parseInt(document.getElementById("selectValue").value)
        store.dispatch({ type:"increment",data:num*1})
    }
    decrement = () => {
        let num = parseInt(document.getElementById("selectValue").value)
        store.dispatch({ type: "decrement", data: num * 1 })

    }
    incrementIfOdd = () => {

        if (store.getState() !== 0) {
            let num = parseInt(document.getElementById("selectValue").value)
            store.dispatch({ type: "increment", data: num * 1 })

        }

    }
    incrementAsync = () => {
        let num = parseInt(document.getElementById("selectValue").value)
        setTimeout(() => {
            store.dispatch({ type: "increment", data: num * 1 })
        }, 2000)

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
 * 这是一个简单的redux案例
 * 其中有关的API：
 * 首先引入  import store from '../../redux/store.js'
 *  1、创建一个redux createRedux(xxx) xxx为写好的store规则
 *  2、dispatch 使用redux()时  store.dispatch() 传入的值为对象
 *  3、他只是对数据状态进行改变 但没有对页面进行重新渲染 有两种方式
 *          1、在本index中，重新渲染 别人有diff算法不怕
 *          2、加一个生命周期钩子，在完成调用时使用 
 *              store.subscribe(()=>{
			this.setState({})
		})
        调用setState 注意原理 他会更新数据和调用render 虽然没有数据 但还是会帮我们调用render
        其中 store可以在不同的文件夹中写 方便操作，但比较小的时候就写在一个文件夹中即可
 */