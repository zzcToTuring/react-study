import React, { Component,lazy,Suspense} from 'react'
import {NavLink,Route} from 'react-router-dom'
import Loading from './Loading'
const Home = lazy(()=> import('./Home') )
const About = lazy(()=> import('./About'))

export default class Demo extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header"><h2>React Router Demo</h2></div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
							<NavLink className="list-group-item" to="/about">About</NavLink>
							<NavLink className="list-group-item" to="/home">Home</NavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								<Suspense fallback={<Loading/>}>
									{/* 注册路由 */}
									<Route path="/about" component={About}/>
									<Route path="/home" component={Home}/>
								</Suspense>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
/**
 * 默认情况下 路由都是直接加载进入界面的,但是如果界面比较多的情况下，进入会显得太过于卡顿
 * 于是就有了懒加载方式 不用的时候不会进行加载 只有点击的时候才会进行加载 这样有利于提高效率
 * 
 * ps:<Suspense><Suspense/>标签中包含着路由注册路由 当注册路由不能正常的加载（网速-硬件等原因）
 * 可以加载在Suspense标签中的内容
 * 	使用方式如下
 * 			<Suspense fallback={<Loading/>}>
				<Route path="/about" component={About}/>
				<Route path="/home" component={Home}/>
			</Suspense >
 * 
 */