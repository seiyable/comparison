// define TodoAdder component
class TodoAdder extends React.Component {
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
    return <div className="add-todo-container">
      <input
        type="text"
        id="add-todo-textinput"
        value={this.state.newTodo}
        onChange={this.onInputChange}/>
      <button
        type="button"
        className="add"
        onClick={this.onAddButtonClicked}>
        ADD
      </button>
    </div>;
  }
}

// define TodoListItem component
class TodoListItem extends React.Component {
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

// define TodoList component
class TodoList extends React.Component {
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
      <div className="todo-list-container">
        <ul id="todo-list">
          {todoListItems}
        </ul>
      </div>
    );
  }
}

// define root component
class TodoApp extends React.Component {
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


// render the app
ReactDOM.render(
  <TodoApp/>,
  document.getElementById('react-container'),
);
