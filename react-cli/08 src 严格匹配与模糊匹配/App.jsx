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
							<MyNavLink to="/home/222/222">Home</MyNavLink>
					
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								{/* 
								路由的模糊匹配：例如下饭的path="/home" 只要改变路由为/home/xx/xx/x/x都能进行匹配
								只要顺序满足即可，后面的内容可忽略 
								当开启了严格匹配之后 这就不再适用了
								关键字为exact 严格匹配 默认为false 一般也不开 不开的话叫模糊匹配 只要前面对的到就行
								*/}
							<Switch>
								<Route path="/about" component={About}/>
								<Route exact={true} path="/home" component={Home}/>
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


