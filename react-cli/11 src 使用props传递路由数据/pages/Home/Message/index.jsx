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
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* 声明接收params参数 后面的：表示用于接收的参数 
                路由之间传递的第一种方式 使用props的方式 对路由的数据进行传递
                使用这样的方式接受参数 使用this.props.match.params.xxx的方式来接收传递的参数
                */}
                <Route path="/home/message/detail/:id/:title" component={Detail} />
            </div>
        )
    }
}
