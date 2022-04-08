import React, { Component } from 'react'
import { Route,Switch,Redirect } from 'react-router-dom'
import News from "./News/index"
import Message from "./Message/index"
import MyNavLink from '../../compoents/MyNavLink/index'
export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              {/* 二级路由中的配置 */}
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          {/* 注册路由  所以不能随便开启严格模式 会让二级路由失效*/}
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/news" />
          </Switch>
        </div>
      </div>
    )
  }
}
