import React, { Component,Fragment } from 'react'

export default class index extends Component {
  render() {
	return (
	  <Fragment>
		  <h1>test1</h1>
		  <h2>test2</h2>
	  </Fragment>
	)
  }
}
/**
 * 
 * 这操作我在vue中也见识过，需要使用框框柱return所返回的语句
 * 一般都是加一个div标签 但是加这个div标签的话 会影响项目的层次结构
 * 这样就能使用这个Fragment完成操作
 * 可以不用必须有一个真实的DOM根标签了
 * 也可以使用空<></> 但是使用Fragment能使用key
 * 
 */