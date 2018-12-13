var todos = [];
var todoInputElement;
var todoListElement;

// called when document is loaded
window.onload = function() {
  // get DOM elements
  todoInputElement = document.getElementById('add-todo-textinput');
  todoListElement = document.getElementById('todo-list');

  // add onclick event listener to the button
  var addButtonElement = document.querySelector('.add-todo-container button.add');
  addButtonElement.addEventListener('click', onAddButtonClicked);
};

// called when ADD button is clicked
function onAddButtonClicked() {
  // get the todo text
  var todo = todoInputElement.value;
  if (!todo) return;

  // add a list element with the todo text to the todo list.
  // The element is going to look like:
  // <li class="todo-list-item">
  //   <span>{{ todo }}</span>
  //   <button
  //     type="button"
  //     class="done"
  //     onclick="onDoneButtonClick">
  //     DONE!
  //   </button>
  // </li>
  var li = document.createElement('li');
  li.classList.add('todo-list-item');
  li.setAttribute('data-index', todoListElement.childElementCount);
  var span = document.createElement('span');
  span.innerHTML = todo;
  var button = document.createElement('button');
  button.classList.add('done');
  button.setAttribute('type', button);
  button.addEventListener('click', onDoneButtonClicked);
  button.innerHTML = 'DONE!';
  li.appendChild(span);
  li.appendChild(button);
  todoListElement.appendChild(li);

  // clear the text value
  todoInputElement.value = '';
}

// called when DONE! button is clicked
function onDoneButtonClicked(event) {
  // remove the todo item whose DONE! button is clicked
  var targetIndex = event.target.parentElement.dataset.index;
  var targetElement = todoListElement.querySelector('li[data-index="' + targetIndex + '"]');
  todoListElement.removeChild(targetElement);
}
