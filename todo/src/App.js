import React, { useReducer, useContext } from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import ListComponent from "./components/ListComponent";
import FormComponent from "./components/FormComponent";

//Context
import StateContext from "./contexts/StateContext";
import { initialState, toDosReducer } from "./reducers/reducer";

function App() {
  const [ state, dispatch ] = useReducer(toDosReducer, initialState);
  console.log("App", state);
  return (
    <StateContext.Provider value={{state, dispatch}}>
      <div className="App">
        <header className="App-header">
          <FormComponent />
          <ListComponent />
        </header>
      </div>
    </StateContext.Provider>
  );
}

export default App;
