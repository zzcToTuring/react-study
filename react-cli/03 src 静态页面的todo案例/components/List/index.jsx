import React, { Component } from 'react'
import Item from "../Item/index"
import "./index.css"

export default class index extends Component {
    render() {
        return (
            <ul className="todo-main">
               <Item></Item>
            </ul>
        )
    }
}
