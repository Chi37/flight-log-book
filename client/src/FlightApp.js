import React from 'react';
import logo from './plane-logo.svg';
import './App.css';
import PilotInfo from './PilotInfo';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Flight Logger
      </header>
      <div className="PilotInfo">
        <PilotInfo/>
      </div>
    </div>
  );
}

export default App;
