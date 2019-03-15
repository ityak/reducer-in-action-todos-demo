import { connect } from 'react-redux'
import { toggleTodo,VisibilityFilters } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos,visibilityFilter) => {
  switch (visibilityFilter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + visibilityFilter)
  }
}

const mapStateToProps = ({todoStates}) => ({
  todos: getVisibleTodos(todoStates.todos, todoStates.visibilityFilter),
  myState: todoStates
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
