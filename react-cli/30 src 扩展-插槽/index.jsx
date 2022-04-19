import React, { Component } from 'react'
import "./index.css"
export default class Parent extends Component {
	render() {
		return (
			<div className="parent">
				<h3>我是Parent组件</h3>
				<A render={(name) => <C name={name} />} />

			</div>
		)
	}
}
class A extends Component {
	state = { name: 'tom' }
	render() {
		const { name } = this.state
		return (
			<div className="a">
				<h3>我是A组件</h3>
				{this.props.render(name)}
			</div>
		)
	}
}

// 计算count的组件
class C extends Component {

	state = { count: 0 }
	add = () => {
		this.setState(state => ({ count: state.count + 1 }))
	}
	render() {
		return (
			<div>
				<h1>当前求和为：{this.state.count}</h1>
				<button onClick={this.add}>点我+1</button>
				<h3>接受到的值为：{this.props.name}</h3>
			</div>
		)
	}
}
/**
 * 
 * ## 7. render props

### 如何向组件内部动态传入带内容的结构(标签)?

	Vue中: 
		使用slot技术, 也就是通过组件标签体传入结构  <AA><BB/></AA>
	React中:
		使用children props: 通过组件标签体传入结构
		使用render props: 通过组件标签属性传入结构, 一般用render函数属性

### children props

	<A>
	  <B>xxxx</B>
	</A>
	{this.props.children}
	问题: 如果B组件需要A组件内的数据, ==> 做不到 

### render props

	<A render={(data) => <C data={data}></C>}></A>
	A组件: {this.props.render(内部state数据)}
	C组件: 读取A组件传入的数据显示 {this.props.data} 



<hr/>
 */