export const myActions = ({type = String(Date.now()), el={}}) => {

  if(typeof el === 'string') {
      return element => ({
        type,
        reducer(state) {
          if(state.hasOwnProperty(el)){
            return {
              ...state,
              [el]: element
            }
          }
          return {
            ...state
          }
        }
      })
  } else if(el instanceof Object && el.constructor !== Array){
    return element => ({
      type,
      reducer(state) {
        if(state.hasOwnProperty(Object.keys(element)[0])){
          return {
            ...state,
            ...element
          }
        }
        return {
          ...state
        }
      }
    })
  } else {
    throw new Error('el 类型错误');
  }
}


export const myReducer = (initialState={}) => {
  return (state={
    ...initialState
   }, action) => {
     if(typeof action.reducer === 'function') {
       return action.reducer(state);
     }
     return state;
   }
 }
