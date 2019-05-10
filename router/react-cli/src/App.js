import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Index from './pages/Index';
import PageA from './pages/PageA';
import PageB from './pages/PageB';

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/index" component={Index} />
        <Route path="/page-a" component={PageA} />
        <Route path="/page-b" component={PageB} />
      </Switch>
    );
  }
}
