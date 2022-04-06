import React, { Component } from 'react'
import { Switch, Route,Redirect } from 'react-router-dom'
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
								{/* 
								Redirect 默认路由的选择 在路由配置那块 当没有匹配到一个路由的时候
								自动选择这个路由 相当于 if else中的else 
								比如 一开始什么都没有选择 就默认选择这个位置
								*/}
								
							<Switch>
								<Route path="/about" component={About}/>
								<Route path="/home" component={Home}/>
								<Redirect path='/home'/>
							</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


