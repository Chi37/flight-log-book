import React from 'react';
import PilotInfo from './PilotInfo'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Flight Logger
      </header>
      <div className="PilotInfo">
        Info
        <PilotInfo/>
      </div>
    </div>
  );
}

export default App;
