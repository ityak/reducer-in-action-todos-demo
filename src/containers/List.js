import React from 'react'
import { connect } from 'react-redux'
import { actionOfList } from '../actions'

function List(props) {
  const { lists, showList } = props.myList;

  return (
    <div>
      <div>当前点击的是: {showList}</div>
      {lists.map((v,i)=>{
        return <div key={i} onClick={()=>props.handleClick(v)}>{v}</div>
      })}
    </div>
  )
}

const mapStateToProps = (state, _ownProps) => ({
  myList: state.list,
})

const mapDispatchProps = dispatch => ({
  handleClick: list => dispatch(actionOfList(list))
})

export default connect(mapStateToProps,mapDispatchProps)(List)
