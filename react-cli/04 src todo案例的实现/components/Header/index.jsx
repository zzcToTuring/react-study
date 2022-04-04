import React, { Component } from 'react'
import "./index.css"

export default class Header extends Component {
    //当用户按下回车后 收集用户的数据,并进行添加的操作
    handKeyUp=(event)=>{
        if(event.keyCode !==13) return
        if (event.value===""){
            window.alert("输入不能为空")
            return
        }
        const todoObj={
            id: this.props.id,//id值根据APP组件所传入的length+1所生成，通过props传入
            name: event.target.value,
            done:false
        }
        this.props.addTodo(todoObj)
        event.target.value=""
    }

  render() {
      return (
          <div className="todo-header">
              <input  onKeyUp={this.handKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
          </div>
      )
  }
}
