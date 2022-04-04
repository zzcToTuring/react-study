import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from "./compoents/Home/index"
import About from "./compoents/About/index"
import MyNavLink from './MyNavLink'

export default class App extends Component {
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
							<MyNavLink to="/about">About</MyNavLink>
							<MyNavLink to="/home">Home</MyNavLink>
					
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								{/* 一般而言 都是一个路径对应一个路由 几乎没有一个路径对应多个路由的情况
							所以当匹配到一个对应的的路由后，展示相应的界面，不应该在去后面查找看是否有对应的路径
							解决效率的问题
							因此 在对应的路由展示界面使用Switch包装，他在检测到一个对应路径都就不会在继续往下查找了
							*/}
							<Switch>
								<Route path="/about" component={About}/>
								<Route path="/home" component={Home}/>
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


