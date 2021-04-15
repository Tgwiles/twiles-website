import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import './index.css';
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"         component={Home} />
          <Route exact path="/about"    component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact"  component={Contact} />
        </Switch>
      </Router>
    )
  }
}

export default App;
