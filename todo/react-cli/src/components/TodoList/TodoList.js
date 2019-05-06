import React from 'react';
import styles from './TodoList.module.css';
import TodoListItem from '../TodoListItem/TodoListItem';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const todos = this.props.todos;
    const todoListItems = todos.map((todo, index) => {
      return (
        <TodoListItem
          key={index}
          todo={todo}
          index={index}
          removeTodo={this.props.removeTodo}/>
      );
    });

    return (
      <div className={styles.todoListContainer}>
        <ul id="todo-list">
          {todoListItems}
        </ul>
      </div>
    );
  }
}
