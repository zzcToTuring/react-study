import React, { Component, PureComponent } from 'react'
import "./index.css"
export default class index extends Component {
	state = { carName: "奔驰", stus: ["张三", "李四", "王五"] }
	addStu = () => {
		const { stus } = this.state
		this.setState({ stus: ['小刘', ...stus] })
	}
	changeCar = () => {
		this.setState({carName:'迈巴赫'})
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log(this.props, this.state); //目前的props和state
		console.log(nextProps, nextState); //接下要变化的目标props，目标state
		return this.state.carName === nextState.carName
	}
	render() {
		console.log("我是父组件 我调用了render")
		return(
			
			<div className="parent">
				<h3>我是Parent组件</h3>
				{this.state.stus}&nbsp;
				<span>我的车名字是：{this.state.carName}</span><br />
				<button onClick={this.changeCar}>点我换车</button>
				<button onClick={this.addStu}>添加一个小刘</button>
			
				<Child carName={this.state.carName}/>
			</div>
		) 
			
	}
}
class Child extends PureComponent{
	
	render(){
		console.log("我是子组件 我调用render了")
		return(
			<div className="child">
				<h3>我是Child组件</h3>
				<span>我接到的车是：{this.props.carName}</span>
			</div>
		)
	}
}
/**
 * Component的2个问题
 * 1. 只要执行setState(),即使不改变状态数据, 组件也会重新render()
   2. 只当前组件重新render(), 就会自动重新render子组件 ==> 效率低

   方式一：
   重写shouldComponentUpdate()方法
		比较新旧state或props数据, 如果有变化才返回true, 如果没有返回false
	方式二：
		class xxx extends PureComponent
		PureComponent重写了shouldComponentUpdate(), 只有state或props数据有变化才返回true
		同时要是子类没有接受到相关的数据（数据更新）的话，也不需要调用子类组件
	
  */