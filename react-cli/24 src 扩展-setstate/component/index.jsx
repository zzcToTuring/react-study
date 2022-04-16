import React, { Component } from 'react'

export default class index extends Component {
    state = { count: 0 }
    add = () => {
        this.setState({count:this.state.count+1},()=>{
            console.log("回调函数-----",this.state.count)
        })
        console.log("setState执行完成之后------",this.state.count)

        //this.setState(state=>({conut:state.conut+1}))    
       
    }

render() {
    return (
        <div>
            <h1>当前求和为：{this.state.count}</h1>
            <button onClick={this.add}>点我+1</button>
        </div>
    )
}
}
/**
 * setState的用法：
 *  1、他是一个异步函数，如果要在使用完setstate后立即用值，可以在后面跟着函数
 *  2、他不仅仅能写成对象的形式，也能写成函数的形式
 *      对象 this.setState({count:this.state.count+1})
 *      函数 this.setState(state=>({conut:state.conut+1}))//这里的state已经传进来了
 * 
 * 总结：对象式的setState是函数式的setState的简写方式(语法糖)
		使用原则：
				(1).如果新状态不依赖于原状态 ===> 使用对象方式
				(2).如果新状态依赖于原状态 ===> 使用函数方式
				(3).如果需要在setState()执行后获取最新的状态数据, 
					要在第二个callback函数中读取
 * 
 */