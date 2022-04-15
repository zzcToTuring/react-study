import React, { Component } from 'react'
import Count from "./containers/count/index"
import Person from "./containers/person/index"
export default class App extends Component {
  render() {
    return (
      <div>
          {/* 给容器组件传递store */}     
          <Count></Count>
          <hr />
          <Person></Person>
      </div>
    )
  }
}
