class List {
  constructor() {
    this.listItems = store.getState().todos;
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
    this.listItems = store.getState().todos;
    var newList = document.createElement('ul');
    newList.className = 'main-list'
    this.listItems.forEach(item => newList.appendChild(this.createNewListItem(item)));
    document.body.replaceChild(newList, document.querySelector('.main-list'));
  }
}

var list1 = new List();

store.subscribe(list1);
