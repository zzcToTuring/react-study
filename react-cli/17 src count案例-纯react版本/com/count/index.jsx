import React, { Component } from 'react'

export default class index extends Component {
    state = {
        count: 0
    }
    increment = () => {
        let num = parseInt(document.getElementById("selectValue").value)
        this.setState({ count: num + this.state.count })
    }
    decrement = () => {
        let num = parseInt(document.getElementById("selectValue").value)
        this.setState({ count: this.state.count - num })

    }
    incrementIfOdd = () => {

        if (this.state.count % 2 != 0) {
            let num = parseInt(document.getElementById("selectValue").value)
            this.setState({ count: num + this.state.count })
        }

    }
    incrementAsync = () => {
        let num = parseInt(document.getElementById("selectValue").value)
        setTimeout(() => {
            this.setState({ count: num + this.state.count })
        }, 2000)

    }
    render() {
        return (
            <div>
                <h2>现在的值为：{this.state.count}</h2>
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
