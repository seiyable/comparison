const {BrowserRouter, Switch, Route, Link} = window.ReactRouterDOM;

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const myName = 'Hi, I\'m at ' + this.props.location.pathname;
    return (
      <main className="index">
        <PageTitle title={myName} />
        <hr />
        <SiteTree currentPath={this.props.location.pathname} />
      </main>
    );
  }
}

class PageA extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const myName = 'Now at ' + this.props.location.pathname;
    return (
      <main className="page-a">
        <PageTitle title={myName} />
        <hr />
        <SiteTree currentPath={this.props.location.pathname} />
      </main>
    );
  }
}

class PageB extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const myName = 'This is ' + this.props.location.pathname;
    return (
      <main className="page-b">
        <PageTitle title={myName} />
        <hr />
        <SiteTree currentPath={this.props.location.pathname} />
      </main>
    );
  }
}

class PageTitle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1 className="page-title">
        { this.props.title }
      </h1>
    );
  }
}

class SiteTree extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="site-tree">
        <SiteTreeNode
          path="/index"
          currentPath={this.props.currentPath}
        />
        <SiteTreeNode
          path="/page-a"
          currentPath={this.props.currentPath}
          child
        />
        <SiteTreeNode
          path="/page-b"
          currentPath={this.props.currentPath}
          lastChild
        />
      </section>
    );
  }
}

class SiteTreeNode extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const isCurrentPath = this.props.path === this.props.currentPath;
    const childNodeBullet = this.props.child && <span>├</span>;
    const lastChildNodeBullet = this.props.lastChild && <span>└</span>;
    const disabledClass = isCurrentPath ? 'disabled' : '';

    return (
      <div className="site-tree-node">
        {childNodeBullet}
        {lastChildNodeBullet}
        <Link
          className={disabledClass}
          to={this.props.path}
        >
          {this.props.path}
        </Link>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/index" component={Index} />
        <Route path="/page-a" component={PageA} />
        <Route path="/page-b" component={PageB} />
      </Switch>
    );
  }
}

// render the app
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'),
);
