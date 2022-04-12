import React, { Component } from 'react'
export default class index extends Component {

    increment = () => {
        let num = parseInt(document.getElementById("selectValue").value)
        this.props.jia(num)
    }
    decrement = () => {
        let num = parseInt(document.getElementById("selectValue").value)
       this.props.jian(num)

    }
    incrementIfOdd = () => {

        if (this.props.state%2!==0) {
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
/**
 * 使用react-redux 对count案例进行修改
 * 原题图如图所示
 * 首先需要拥有一个GUI，用来展示页面，其中不包含任何的数据
 * 创建一个contain的界面，contain中包含了GUI，作为与redux交互的桥梁
 *      首先需要导入GUI 创建connect，并暴露
 *      redux的store由APP组件通过props的方式进行传入
 *      连接的方式为connect(mapStateToProps,mapDispatchToProps)(CountUI)
 *      第一个函数为传入的状态的值 第二个函数传入函数 
 *      最后将其暴露 就完成了一个contain界面
 * 这样的话，在GUI文档的界面就不会设计任何的redux 只会使用pros传入的方式
 *  
 */
