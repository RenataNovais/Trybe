import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link data-testid="link-home" to="/">Home</Link>
        <Link data-testid="link-about" to="/about">About Me </Link>
        <Link data-testid="link-projects" to="/projects">Projects</Link>
        <Link data-testid="link-contact" to="/contact">Contact</Link>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Project} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
