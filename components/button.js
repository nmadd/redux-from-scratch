class Button {
  constructor(temporaryState) {
    this.temporaryState = temporaryState;
  }
  // state (get state from store)
  // HTML/DOM componenets to render (instead of JSX)

  // render method
  render() {
    var newButton = document.createElement('button');
    newButton.innerHTML = this.temporaryState;
    document.body.appendChild(newButton);
  }
}

var button = new Button('Hello');
var button2 = new Button('Goodbye');
button.render();
button2.render();
