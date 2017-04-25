function createStore() {
  var state = {score: 0};

  function hiddenFunction() {
    console.log('you found me')
  }

  function getState() {
    return state;
  }

  // these are our public functions, aka our public API
  var publicAPI = {
    getState: getState
  }

  return publicAPI;
}

var store = createStore(); // {getState: function()}

// debugger;

console.log(store.getState());
