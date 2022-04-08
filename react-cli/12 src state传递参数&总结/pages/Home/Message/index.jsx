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
                                    {/* 向路由组件传递params参数 */}
                                    {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

                                    {/* 使用state传递参数 */}
                                    {/* 使用对象的形式 首先第一个括号是在标签中使用js语句 所要写的 第二个括号是写对象时，需要用括号包裹
                                    第三个括号指的是 state对象中 包含对象 因此括号的传递如下
                                    */}
                                    <Link to={{pathname:"/home/message/detail",state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>                                  
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
                {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

                {/* state参数无需声明接收，正常注册路由即可 */}
                <Route path="/home/message/detail" component={Detail} />
                
            </div>
        )
    }
}
/*
    路由链接(携带参数)：<Link to='/demo/test/tom/18'}>详情</Link>
	注册路由(声明接收)：<Route path="/demo/test/:name/:age" component={Test}/>
		接收参数：this.props.match.params
*/

/* 
    第二种方式为search <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
    <Route path="/home/message/detail" component={Detail}/>
    
    import qs from 'querystring'
    const {search} = this.props.location
	const {id,title} = qs.parse(search.slice(1))

    使用这种 ? &的方式进行传递 需要使用第三方库querystring进行处理 但好像这个库现在已经被弃用
    使用出来会报错 因此第二种方法舍弃
*/

/*
   3.state参数
		路由链接(携带参数)：<Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}>详情</Link>
		注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>
		接收参数：this.props.location.state
		备注：刷新也可以保留住参数
*/ 