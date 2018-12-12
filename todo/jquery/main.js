var todos = [];
var $todoInputElement;
var $todoListElement;

$(function() {
  // get DOM elements
  $todoInputElement = $('#add-todo-textinput');
  $todoListElement = $('#todo-list');

  // add onclick event listener to the button
  $('.add-todo-container button').click(onButtonClicked);
});

function onButtonClicked() {
  // get the todo text
  var todo = $todoInputElement.val();
  if (!todo) return;

  // add a list element with the todo text to the todo list
  var li = $('<li></li>').text(todo);
  $todoListElement.append(li);

  // reset the text value
  $todoInputElement.val('');
}
