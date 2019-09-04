import React from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import ListComponent from "./components/ListComponent";
import FormComponent from "./components/FormComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormComponent />
        <ListComponent />
      </header>
    </div>
  );
}

export default App;
