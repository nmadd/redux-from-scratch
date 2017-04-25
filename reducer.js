function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      var newTodos = state.todos.slice();
      newTodos.push(action.data)
      return Object.assign({}, state, {todos: newTodos})
    default:
      return state
  }
}
