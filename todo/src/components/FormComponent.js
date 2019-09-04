import React, { useReducer }from "react";
import { initialState, toDosReducer } from "../reducers/reducer";

const FormComponent = () => {
    const [state, dispatch ] = useReducer(toDosReducer, initialState);
    const handleSubmit = e => {
        e.preventDefault();
        console.log("hi");
        dispatch({ type: "add", payload: {item: "Tacos", completed: false, id: Date.now()}})
        console.log(state);
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input type="text"/>
            <button type="submit">Add</button>
        </form>
    )
}

export default FormComponent;