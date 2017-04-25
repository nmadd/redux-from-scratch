function createStore(reducer) {
  var state = {todos: []};

  function hiddenFunction() {
    console.log('you found me')
  }

  function getState() {
    return state;
  }

  function dispatch(action) {
    // TODO: DO NOT MUTATE STATE!
    state = reducer(state, action)
  }

  function subscribe() {

  }

  // these are our public functions, aka our public API
  var publicAPI = {
    getState,
    dispatch
  }

  return publicAPI;
}

var store = createStore(reducer); // {getState: function()}

// debugger;

console.log('State before dispatch', store.getState());

store.dispatch(addTodo('this is a new todo test'));

console.log('State after dispatch', store.getState())
