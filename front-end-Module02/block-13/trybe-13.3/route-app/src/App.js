// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users/:id">Users</Link>
        <Link to="/strict-access">Strict Access</Link>
        <Switch>
          <Route path="/about" component={About} />
          <Route 
            path="/users/:id"
            render={(props) => <Users {...props} greetingMessage="Good Morning" />}
            />
          <Route exact path="/" component={Home} />
          <Route path="/strict-access" render={(props) => <StrictAccess {...props} user={{username: 'joao', password: 1234}} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
