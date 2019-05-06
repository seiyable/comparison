import React from 'react';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="todo-list-item">
        <span>{ this.props.todo }</span>
        <button
          type="button"
          className="done"
          onClick={() => this.props.removeTodo(this.props.index)}>
          DONE!
        </button>
      </li>
    );
  }
}
