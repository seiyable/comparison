import globalStyles from '../global.css';
import styles from './index.module.css';
import TodoAdder from '../components/TodoAdder';
import TodoList from '../components/TodoList';

export default class Index extends React.Component {
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
      <main className={styles.todoApp}>
        <section className={styles.topSection}>
          <h1 className={styles.title}>TODOS</h1>
          <TodoAdder addTodo={(newTodo) => this.addTodo(newTodo)}/>
        </section>
        <section>
          <TodoList
            todos={this.state.todos}
            removeTodo={(indexToRemove) => this.removeTodo(indexToRemove)}
          />
        </section>
      </main>
    );
  }
}
