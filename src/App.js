import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'../profilepic.jpg'} width="750" height="750" alt="Profile Pic"/>
        <p>
          Initial creation of website using <code>create-react-app</code>
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/tgwiles/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn Profile
        </a>
      </header>
    </div>
  );
}

export default App;
