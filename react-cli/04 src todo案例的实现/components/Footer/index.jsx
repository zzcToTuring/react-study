import React, { Component } from 'react'
import "./index.css"

export default class Footer extends Component {
  //清楚已完成任务的回调
  handleClearAllDone=()=>{
    if(window.confirm("确定删除嘛")){
      this.props.clearAlldone()
    }
    
  }
  //全选框
  handleClearAll=(event)=>{
    this.props.checkAllTodo(event.target.checked)
  }

  render() {
    const {todos}=this.props
    const doneCount = this.props.todos.reduce((pre,todo)=>{
      return pre+(todo.done?1:0)
    },0)
    return (
        <div className="todo-footer">
            <label>
          <input type="checkbox" onChange={this.handleClearAll} checked={doneCount === todos.length && todos.length !== 0 ? true : false}/>
            </label>
            <span>
                <span>已完成{doneCount}</span> / 全部{todos.length}
            </span>
            <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
        </div>
    )
  }
}
