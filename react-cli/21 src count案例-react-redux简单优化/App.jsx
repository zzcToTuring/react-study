import React, { Component } from 'react'
import Count from "./containers/count/index"
export default class App extends Component {
  render() {
    return (
      <div>
          {/* 给容器组件传递store */}     
          <Count></Count>
      </div>
    )
  }
}
