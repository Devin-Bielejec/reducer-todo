import React, { useReducer, useContext, useState }from "react";
import { initialState, toDosReducer } from "../reducers/reducer";
import StateContext from "../contexts/StateContext";

const FormComponent = () => {
    const contextValue = useContext(StateContext);
    console.log(contextValue);
    const handleSubmit = e => {
        e.preventDefault();
        contextValue.dispatch({ type: "add", payload: {item: inputValue, completed: false, id: Date.now()}})
        setInputValue("");
    }

    const [ inputValue, setInputValue ] = useState("");
    
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange}/>
            <button type="submit" >Add</button>
        </form>
    )
}

export default FormComponent;