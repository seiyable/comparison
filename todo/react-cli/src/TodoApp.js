import React from 'react';
import './TodoApp.css';
import TodoAdder from './components/TodoAdder/TodoAdder';
import TodoList from './components/TodoList/TodoList';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }
  addTodo(newTodo) {
    this.setState((state) => {
      return {
        todos: [...state.todos, newTodo],
      };
    });
  }
  removeTodo(indexToRemove) {
    this.setState((state) => {
      return {
        todos: this.state.todos.filter((todo, index) => {
          return index !== indexToRemove;
        }),
      };
    });
  }
  render() {
    return (
      <main id="todo-app">
        <section className="top">
          <h1 className="title">TODOS</h1>
          <TodoAdder addTodo={(newTodo) => this.addTodo(newTodo)}/>
        </section>
        <section className="bottom">
          <TodoList
            todos={this.state.todos}
            removeTodo={(indexToRemove) => this.removeTodo(indexToRemove)}/>
        </section>
      </main>
    );
  }
}
