class baseClass {
  render(DOMElement, target) {
    var newButton = document.createElement('button'); //DOMElement
    newButton.innerHTML = this.temporaryState;
    document.body.appendChild(newButton); //target
  }
}
