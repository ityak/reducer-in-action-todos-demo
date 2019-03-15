let nextTodoId = 0
export const addTodo = text => ({
  type: 'add todo',
  id: nextTodoId++,
  text,
  reducer(state,action) {
    return {
      ...state,
      todos:[
        ...state.todos,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    }
  }
})

export const setVisibilityFilter = filter => ({
  type: 'set Visibility Filter',
  filter,
  reducer(state,action) {
    return {
      ...state,
      visibilityFilter: action.filter
    }
  }
})

export const toggleTodo = id => ({
  type: 'toggle Todo',
  id,
  reducer(state,action) {
    return {
      ...state,
      todos: state.todos.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    }
  }
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
