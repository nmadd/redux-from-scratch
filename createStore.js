function createStore(reducer) {
  var state = {todos: []};
  // we want these components to update and re-render whenever state updates:
  var components = [];

  function hiddenFunction() {
    console.log('you found me')
  }

  function getState() {
    return state;
  }

  function dispatch(action) {
    // TODO: DO NOT MUTATE STATE!
    state = reducer(state, action);
    components.forEach(component => component.render());
  }

  function subscribe(component) {
    components.push(component);
  }

  // these are our public functions, aka our public API
  var publicAPI = {
    getState,
    dispatch,
    subscribe
  }

  return publicAPI;
}

var store = createStore(reducer); // {getState: function()}

// debugger;

console.log('State before dispatch', store.getState());

console.log('State after dispatch', store.getState())
