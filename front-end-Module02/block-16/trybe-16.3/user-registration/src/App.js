import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Cadastro from './components/Cadastro'
import ClientesCadastrados from './components/ClientesCadastrados'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Home} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/clientes" component={ClientesCadastrados} />
        <Route path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
