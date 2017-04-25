class List {
  constructor() {
    this.listItems = ['hello', 'goodbye'];
  }

  createNewListItem(listItemText) {
    var newListItem = document.createElement('li');
    var newTextNode = document.createTextNode(listItemText);
    newListItem.appendChild(newTextNode);
    return newListItem;
  }

  addListItem(newListItem) {
    this.listItems.push(newListItem);
  }

  render() {
    var newList = document.createElement('ul');
    this.listItems.forEach(item => newList.appendChild(this.createNewListItem(item)));
    document.body.appendChild(newList);
  }
}

var list1 = new List();
list1.render();
