function createStore() {
  var state = {};

  function hiddenFunction() {
    console.log('you found me')
  }

  function getState() {
    return state;
  }

  function dispatch() {

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

var store = createStore(); // {getState: function()}

// debugger;

console.log(store.getState());
