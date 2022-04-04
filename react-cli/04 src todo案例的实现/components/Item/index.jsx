import React, { Component } from 'react'
import "./index.css"

export default class Item extends Component {
  //鼠标是否在Li标签上
  state={mouse: false}
  changeMouse=(flag)=>{
    return()=>{
      this.setState({mouse:flag})
    }
  }
  //勾选、取消勾选某一个todo的回调
  handleCheck=(id)=>{
    return(event)=>{
      this.props.updateTodo(id,event.target.checked)
    }
  }
  //删除一个todo的回调
  handleDelete = (id) => {
    return()=>{
      if (window.confirm('确定删除吗？')) {
        this.props.deleteTodo(id)
      }
    }
  }

  render() {
    return (
      <li style={{ backgroundColor: this.state.mouse ? '#ddd' : 'white' }} onMouseEnter={this.changeMouse(true)} onMouseLeave={this.changeMouse(false)}>
        <label>
          <input type="checkbox"  checked={this.props.todo.done} onChange={this.handleCheck(this.props.todo.id)}/>
          <span>{this.props.todo.name}</span>
        </label>
        <button className="btn btn-danger" onClick={this.handleDelete(this.props.todo.id)} style={{ display: this.state.mouse ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
