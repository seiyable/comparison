class Welcome extends React.Component {
  render() {
    return React.createElement(
      'h1',
      null,
      'Hello World',
    );
  }
}

// render the app
ReactDOM.render(
  React.createElement(Welcome, null, null),
  document.getElementById('todo-app'),
);
