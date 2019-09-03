import React from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import ListComponent from "./components/ListComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ListComponent />
      </header>
    </div>
  );
}

export default App;
