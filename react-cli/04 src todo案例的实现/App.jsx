import React from "react"
import Header from "../src/components/Header/index"
import List from "../src/components/List/index"
import Footer from "../src/components/Footer/index"
import "./App.css"

export default class App extends React.Component{
    //初始化状态
    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: true },
            { id: '003', name: '打代码', done: false },
        ]
    }
    //接收传入的一个obj，进行添加操作
    addTodo=(todoObj)=>{
        //新生成的obj，添加到其中去
        const newTodos=[todoObj,...this.state.todos]
        //更新状态
        this.setState({todos:newTodos})
        
    }
    // 用于更新一个todo对象
    //原理 传入一个要修改的id和要修改之后的状态，要是id相同的话，赋值函数中的状态，否则赋值原始状态
    updateTodo=(id,done)=>{
        const newTodos=this.state.todos.map((todoObj)=>{
            if (todoObj.id===id){
                return {...todoObj,done}
            }
            else{
                return todoObj
            }
        })
        this.setState({todos:newTodos})
    }

    //删除一个todo对象，使用过滤器函数clearAlldone
    deleteTodo=(id)=>{
        const newTodos=this.state.todos.filter((todoObj)=>{
            return todoObj.id!==id
        })
        this.setState({todos:newTodos})
    }
    //全选or全不选按钮
    checkAllTodo=(done)=>{
        const newTodos=this.state.todos.map((todoObj)=>{
            return {...todoObj,done}
        })
        this.setState({todos:newTodos})
    }
    //清楚所有已完成的按钮deleteTodo
    clearAlldone=()=>{
        const newTodos=this.state.todos.filter((todoObj)=>{
            return !todoObj.done
        })
        this.setState({todos:newTodos})
    }

    render(){
        return(
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} id={this.state.todos.length+1}/>
                    <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearAlldone={this.clearAlldone} />
                </div>
            </div>
            
        )
        
    }
}