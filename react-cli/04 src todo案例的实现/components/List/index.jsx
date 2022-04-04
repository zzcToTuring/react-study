import React, { Component } from 'react'
import Item from "../Item/index"
import "./index.css"

export default class index extends Component {
    
    render() {
        //接受到APP父组件传入的数据，用于页面的展示
        const {todos} = this.props
        return (
            
            <ul className="todo-main">
                {/*这里的todos.map属于ES6的语法 需要使用{}*/}
            {
               
            todos.map(todo => {
                return <Item todo={todo} key={todo.id} updateTodo={this.props.updateTodo} deleteTodo={this.props.deleteTodo}></Item>
            })
            }
               
               
            </ul>
        )
    }
}
