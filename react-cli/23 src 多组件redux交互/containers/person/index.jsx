import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPerson } from "../../redux/action/person"
import { nanoid } from "nanoid"

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = { id: nanoid(), name, age }
    this.props.add_person(personObj)
    this.nameNode.value = ''
    this.ageNode.value = ''


  }
  render() {
    return (
      <div>
        <h2>这是person组件....上方组件求和为{this.props.count}</h2>
        <input ref={c => this.nameNode = c} type="text" placeholder="输入名字" />
        <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄" />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.personArr.map(person => {
              return <li key={person.id}>{person.name}---{person.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { personArr: state.person ,count:state.count}
}
function mapDispatchToProps(dispatch) {
  return {
    add_person: (personObj) => {
      dispatch(addPerson(personObj))
    },
    
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Person)

/**
 
export default connect(
  ?????
	{jiaYiRen:createAddPersonAction}//映射操作状态的方法
)(Person)
 
*/