import React, { useReducer, useContext }from "react";
import { initialState, toDosReducer } from "../reducers/reducer";
import StateContext from "../contexts/StateContext";

const FormComponent = () => {
    const contextValue = useContext(StateContext);
    console.log(contextValue);
    const handleSubmit = e => {
        e.preventDefault();
        console.log("hi");
        contextValue.dispatch({ type: "add", payload: {item: "Tacos", completed: false, id: Date.now()}})
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input type="text"/>
            <button type="submit">Add</button>
        </form>
    )
}

export default FormComponent;