import { combineReducers } from 'redux'
import { VisibilityFilters } from '../actions'

const initialState = {
  todos:[],
  visibilityFilter: VisibilityFilters.SHOW_ALL
}

let todoStates =  (state = initialState, action) => {
  if(typeof action.reducer === 'function') {
    return action.reducer(state,action)
  }
  return state;
}


export default combineReducers({
  todoStates
})
