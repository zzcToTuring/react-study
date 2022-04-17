import React, { Component } from 'react'
import  ReactDOM, { render }  from "react-dom"
//  class index extends Component {
// 	state={count:0}
// 	myRef=React.createRef()
// 	add=()=>{
// 		this.setState(state=>({count:state.count+1}))
// 	}
// 	unmount = () => {
// 		ReactDOM.unmountComponentAtNode(document.getElementById('root'))
// 		clearInterval(this.timer)
// 	}
// 	show=()=>{
// 		console.log(this.myRef.current.value)
// 	}
// 	componentDidMount() {
// 		this.timer = setInterval(() => {
// 			this.setState(state => ({ count: state.count + 1 }))
// 		}, 1000)
// 	}

//   render() {
// 	  return (
// 		  <div>
// 			  <input type="text" ref={this.myRef} />
// 			  <h2>当前求和为{this.state.count}</h2>
// 			  <button onClick={this.add}>点我+1</button>
// 			  <button onClick={this.unmount}>卸载组件</button>
// 			  <button onClick={this.show}>点击提示数据</button>
// 		  </div>
// 	  )
//   }
// }
function Demo() {
	//类似于class式组件中的state
	//count表示值，setcount表示修改的方式，括号中的是默认值
	const [count, setCount] = React.useState(0)
	//ref方法，相当于createXXX
	const myRef = React.useRef()
	
	//生命周期钩子 1、创建时回调 2、改变时回调（在第二个参数中 为空表示不监视，不写表示监视所有的变化）
	// 3、即将要卸载时 return后的函数中的操作
	React.useEffect(() => {
		let timer = setInterval(() => {
			setCount(count => count + 1)
		}, 1000)
		return () => {
			clearInterval(timer)
		}
	}, [])

	//加的回调
	function add() {
		//setCount(count+1) //第一种写法
		setCount(count => count + 1)
	}

	//提示输入的回调
	function show() {
		alert(myRef.current.value)
	}

	//卸载组件的回调
	function unmount() {
		ReactDOM.unmountComponentAtNode(document.getElementById('root'))
	}

	return (
		<div>
			<input type="text" ref={myRef} />
			<h2>当前求和为：{count}</h2>
			<button onClick={add}>点我+1</button>
			<button onClick={unmount}>卸载组件</button>
			<button onClick={show}>点我提示数据</button>
		</div>
	)
}

export default Demo

/**
 * hook使得函数式的组件也能有相应的作用
 * 函数组件由于没有自己的this和生命周期 因此都不能进行很多的操作，使用hook能有相应的操作
 * (1). State Hook: React.useState()--->创建state
   (2). Effect Hook: React.useEffect()---->创建生命周期钩子
   (3). Ref Hook: React.useRef()---->创建ref（与createRef()方法类似）
 * 
 * 
 * 
 * 笔记
 1. React Hook/Hooks是什么?
(1). Hook是React 16.8.0版本增加的新特性/新语法
(2). 可以让你在函数组件中使用 state 以及其他的 React 特性


2. 三个常用的Hook


(1). State Hook: React.useState()
(2). Effect Hook: React.useEffect()
(3). Ref Hook: React.useRef()


1、State Hook


(1). State Hook让函数组件也可以有state状态, 并进行状态数据的读写操作
(2). 语法: const [xxx, setXxx] = React.useState(initValue)  
(3). useState()说明:
        参数: 第一次初始化指定的值在内部作缓存
        返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数
(4). setXxx()2种写法:
        setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
        setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值


2、Effect Hook


(1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
(2). React中的副作用操作:
        发ajax请求数据获取
        设置订阅 / 启动定时器
        手动更改真实DOM
(3). 语法和说明: 
        useEffect(() => { 
          // 在此可以执行任何带副作用操作
          return () => { // 在组件卸载前执行
            // 在此做一些收尾工作, 比如清除定时器/取消订阅等
          }
        }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
    
(4). 可以把 useEffect Hook 看做如下三个函数的组合
        componentDidMount()
        componentDidUpdate()
    	componentWillUnmount() 


3、 Ref Hook
(1). Ref Hook可以在函数组件中存储/查找组件内的标签或任意其它数据
(2). 语法: const refContainer = useRef()
(3). 作用:保存标签对象,功能与React.createRef()一样

 */
