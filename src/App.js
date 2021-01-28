import React from 'react';
import logo from './logo.svg';
import './App.css';
import OneSignal from 'react-onesignal';

OneSignal.initialize('8a753e99-73aa-4f8f-8770-55e767c8e733', {
  safari_web_id: 'web.onesignal.auto.1a1cd43f-104c-4ac2-b069-e07775f1eeb9'
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
