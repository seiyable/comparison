import React from 'react';
import styles from './TodoListItem.module.css';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className={styles.todoListItem}>
        <span>{ this.props.todo }</span>
        <button
          type="button"
          onClick={() => this.props.removeTodo(this.props.index)}>
          DONE!
        </button>
      </li>
    );
  }
}
