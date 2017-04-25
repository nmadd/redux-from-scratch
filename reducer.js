function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      var newTodos = state.todos.slice();
      newTodos.push(action.data)
      console.log('Added new todo!', state);
      return Object.assign({}, state, {todos: newTodos})
    default:
      return state
  }
}
