class Button {
  constructor(buttonText) {
    this.buttonText = buttonText;
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    store.dispatch(addTodo());
  }

  render(DOMElement, target) {
    var newButton = document.createElement('button'); //DOMElement\
    newButton.addEventListener('click', this.clickHandler);
    newButton.innerHTML = this.buttonText;
    document.querySelector('.buttons-container').appendChild(newButton); //target
  }
}

var button = new Button('Hello');
var button2 = new Button('Goodbye');
button.render();
button2.render();
