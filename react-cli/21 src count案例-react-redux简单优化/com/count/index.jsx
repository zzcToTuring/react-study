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
 * 使用一些API对页面进行了优化
 *  1、使用了react官方的react-redux，之前数据发生变化，需要在index界面写一个更新操作store.subscribe
 *      但是使用了react官方的框架 在数据发生变化之后，不需要手动写操作 react会自动帮我们进行更新
 *  2、import { Provider } from "react-redux";
 *      ReactDOM.render( 
        <Provider store={store}>
            <App />
        </Provider>
        ,document.getElementById('root'))

        试想一下，要是有10多个组件，还每个组件都要手动传入已经写好的store 是不是显得有点麻烦呢？
        使用API Provider，直接放在index文件夹中，他的功能是让要使用到store的文件夹中使用到该文件
        要是没有使用到该文件，也对程序没有影响 使用方法如上，需要对其进行包装，在Provider中进行传递
        免去了后续的操作
        而在index中使用，在APP文件夹中能够去除传入store，更加简化了操作

 */