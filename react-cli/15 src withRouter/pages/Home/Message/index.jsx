import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from "./Detail/index"

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: '消息001' },
            { id: '02', title: '消息002' },
            { id: '03', title: '消息003' },
        ]
    }

    back=()=>{
        this.props.history.goBack()
    }
    forward=()=>{
        this.props.history.forward()
    }
    go=()=>{
        this.props.history.go(-2)
    }
    push=(id,title)=>{
       return()=>{
           this.props.history.push(`/home/message/detail/`,{id,title})
       }
    }
    replace=(id,title)=>{
        return()=>{
            this.props.history.replace(`/home/message/detail/`, { id, title })
        }

    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    <Link to={{pathname:"/home/message/detail",state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>                                  
                                    <button onClick={this.push(msgObj.id,msgObj.title)}>push查看</button>&nbsp;&nbsp;
                                <button onClick={this.replace(msgObj.id,msgObj.title)}>replace查看</button>
                                </li>

                            )
                        })
                    }
                </ul>
                <hr />
                <Route path="/home/message/detail" component={Detail} />

                <button onClick={this.back}>回退</button>&nbsp;
                <button onClick={this.forward}>前进</button>&nbsp;
                <button onClick={this.go}>go</button>
            </div>
        )
    }
}
/*
借助this.prosp.history对象上的API对操作路由跳转、前进、后退
							-this.prosp.history.push()
							-this.prosp.history.replace()
							-this.prosp.history.goBack()
							-this.prosp.history.goForward()
							-this.prosp.history.go()

使用不同的方法传递参数 有不同的写法
    拿replace跳转举例
        //replace跳转+携带params参数
		//this.props.history.replace(`/home/message/detail/${id}/${title}`)

		//replace跳转+携带search参数
		// this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

		//replace跳转+携带state参数
		this.props.history.replace(`/home/message/detail`,{id,title})
*/