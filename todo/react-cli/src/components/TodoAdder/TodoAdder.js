import React from 'react';
import styles from './TodoAdder.module.css';

export default class TodoAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
    };
  }

  // called when value in the input element is changed
  onInputChange = (event) => {
    this.setState({
      newTodo: event.target.value,
    });
  };

  // called when ADD button is clicked
  // fire add-todo event with the new todo string for the parent component
  onAddButtonClicked = () => {
    if (!this.state.newTodo) return;
    this.props.addTodo(this.state.newTodo);
    this.setState({
      newTodo: '',
    });
  };

  render() {
    return <div className={styles.addTodoContainer}>
      <input
        type="text"
        id="add-todo-textinput"
        value={this.state.newTodo}
        onChange={this.onInputChange}/>
      <button
        type="button"
        onClick={this.onAddButtonClicked}>
        ADD
      </button>
    </div>;
  }
}
