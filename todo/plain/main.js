var todos = [];
var todoInputElement;
var todoListElement;

window.onload = function() {
  // get DOM elements
  todoInputElement = document.getElementById('add-todo-textinput');
  todoListElement = document.getElementById('todo-list');

  // add onclick event listener to the button
  document.querySelector('.add-todo-container button').onclick = onButtonClicked;
};

function onButtonClicked() {
  // get the todo text
  var todo = todoInputElement.value;
  if (!todo) return;

  // add a list element with the todo text to the todo list
  var li = document.createElement('li');
  var text = document.createTextNode(todo);
  li.appendChild(text);
  todoListElement.appendChild(li);

  // reset the text value
  todoInputElement.value = '';
}
