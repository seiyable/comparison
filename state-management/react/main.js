const {Component} = window.React;
const {Provider, connect} = window.ReactRedux;

// ResultDisplay component
class ResultDisplay extends Component {
  render() {
    return (
      <section className="result-display">
        <div className="number">
          { this.props.number }
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => ({number: state.number});
const ConnectedResultDisplay = connect(mapStateToProps)(ResultDisplay);

// Controls component
class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {checked: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleIncrementButtonClick = this.handleIncrementButtonClick.bind(this);
    this.handleDecrementButtonClick = this.handleDecrementButtonClick.bind(this);
  }
  handleChange(e) {
    this.setState({checked: e.target.value});
  }
  handleIncrementButtonClick(e) {
    this.state.checked
      ? this.props.delayedIncrement()
      : this.props.increment();
  }
  handleDecrementButtonClick(e) {
    this.state.checked
      ? this.props.delayedDecrement()
      : this.props.decrement();
  }
  render() {
    return (
      <section className="controls">
        <div className="top">
          <button onClick={this.handleIncrementButtonClick}>
            INCREMENT
          </button>
          <button onClick={this.handleDecrementButtonClick}>
            DECREMENT
          </button>
        </div>
        <div className="bottom">
          <label>
            <input
              value={this.state.checked}
              type="checkbox"
              onChange={this.handleChange}
            />
            DELAYED ACTION
          </label>
        </div>
      </section>
    );
  }
}
const ConnectedControls = connect(null, actionCreators)(Controls);

// App component
class App extends Component {
  render() {
    return (
      <main>
        <ConnectedResultDisplay />
        <ConnectedControls />
      </main>
    );
  }
}

// render DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
