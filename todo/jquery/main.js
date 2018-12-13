var todos = [];
var $todoInputElement;
var $todoListElement;

// called when document is loaded
$(function() {
  // get DOM elements
  $todoInputElement = $('#add-todo-textinput');
  $todoListElement = $('#todo-list');

  // add onclick event listener to the button
  $('.add-todo-container button.add').click(onAddButtonClicked);
});

// called when ADD button is clicked
function onAddButtonClicked() {
  // get the todo text
  var todo = $todoInputElement.val();
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
  var $li = $('<li>', {
    class: 'todo-list-item',
    'data-index': $todoListElement.children().length
  });
  var $span = $('<span></span>').text(todo);
  var $button = $('<button></button', {
    class: 'done',
    type: 'button',
  }).text('DONE!');
  $button.click(onDoneButtonClicked);
  $li.append($span);
  $li.append($button);
  $todoListElement.append($li);

  // reset the text value
  $todoInputElement.val('');
}

// called when DONE! button is clicked
function onDoneButtonClicked(event) {
  // remove the todo item whose DONE! button is clicked
  var targetIndex = event.target.parentElement.dataset.index;
  var $targetElement = $todoListElement.find('li[data-index="' + targetIndex + '"]');
  $targetElement.remove();
}
