import React, { Component } from 'react'
import './index.css'
//创建context对象
const MyContext = React.createContext()

class A extends Component {
	state = { userName: "tom", age: 18 }
	render() {
		return (
			<div className='parent'>
				<h3>我是A组件</h3>
				<h4>我的用户名是：{this.state.userName}</h4>
				<MyContext.Provider value={{ userName: this.state.userName, age: this.state.age }}>
					<B />
				</MyContext.Provider>

			</div>
		)
	}
}
class B extends Component {
	render() {
		return (
			<div className="child">
				<h3>我是B组件</h3>
				<C />
			</div>
		)
	}

}
// class C extends Component {
// 	//谁使用 谁就要声明接收
// 	static contextType=MyContext
// 	render() {
// 		return (
// 			<div className="grand">
// 				<h3>我是C组件</h3>
// 				<h4>我从A组件接收到的用户名:{this.context.userName},年龄为:{this.context.age}</h4>
// 			</div>
// 		)
// 	}
// } 
function C() {
	return (
		<div className="grand">
			<h3>我是C组件</h3>
			<h4>我从A组件接收到的用户名:</h4>
				<MyContext.Consumer>
					{
					 value =>{
						 return `${value.userName},年龄是${value.age}`
					 }  
					}
					
			</MyContext.Consumer>
		</div>
	)
}
export default A
/**
 * context:> 一种组件间通信方式, 常用于【祖组件】与【后代组件】间通信
 * 1、创建组件 在所有组件能够接触的地方创建 const MyContext = React.createContext()
 * 2、传输数据 为了使后面组件都能接收 需要使用provide包装 注意 这个provide是MyContext创建之后才有的东西
 * 	  比如
 *				 <MyContext.Provider value={{ userName: this.state.userName, age: this.state.age }}>
					<B />
				</MyContext.Provider>
	3、class组件接受数据
		1、声明	static contextType=MyContext
		2、使用 {this.context.userName}
	4、function组件接受数据
		1、使用custom进行包装，同样为MyContext之后创建才有的
		2、使用
		3、案例展示
		<MyContext.Consumer>
					{
					 value =>{
						 return `${value.userName},年龄是${value.age}`
					 }  
					}
					
			</MyContext.Consumer>
	5、注意：在应用开发中一般不用context, 一般都它的封装react插件


 */