import { combineReducers } from 'redux'
import { myReducer } from '../tools'


const list = myReducer({
  lists:['文字1','文字2','文字3','文字4','文字5'],
  showList: '',
})

const ts = myReducer({
  age: 18,
  name: 'testName'
})


export default combineReducers({
  list,
  ts
})
