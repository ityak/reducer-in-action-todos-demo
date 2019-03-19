import React from 'react'
import { connect } from 'react-redux'
import {tsAction} from '../actions'

function Test(props) {
  return (
    <div>
      这是age: {props.myTest.age}
      <br />
      name: {props.myTest.name}
      <button onClick={()=>props.dispatch(tsAction({age:props.myTest.age + 1,name: `age_${props.myTest.age}`}))}>点击</button>
    </div>
  )
}

const mapStateToProps = (state, _ownProps) => ({
  myTest: state.ts,
})

export default connect(mapStateToProps)(Test)
