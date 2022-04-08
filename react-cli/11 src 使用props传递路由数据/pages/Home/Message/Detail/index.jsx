import React, { Component } from 'react'

export default class Detail extends Component {

  render() {
    const DetailData = [
      { id: '01', content: '你好，中国' },
      { id: '02', content: '你好，尚硅谷' },
      { id: '03', content: '你好，未来的自己' }
    ]

    const temp = DetailData.filter(obj => {
      return obj.id === this.props.match.params.id
    })


    return (
      <ul>
        <li>id:{this.props.match.params.id}</li>
        <li>title:{this.props.match.params.title}</li>
        <li>内容：{temp[0].content}</li>
      </ul>
    )
  }
}
