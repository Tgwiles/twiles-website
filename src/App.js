import React, {Component} from 'react';
import './App.css';
import NavigationPane from './Navigation/NavigationPane';
import Image from './Image/Image';
import LinkedInLink from './Links/LinkedIn';

class App extends Component {
  render() {
    return (
    <div className="App-header">
      <NavigationPane></NavigationPane> 
      <Image></Image>
      <LinkedInLink></LinkedInLink>
    </div>)
  }
}

export default App;
