import React, { useContext } from "react";
import StateContext from "../contexts/StateContext";

const ToDoItemComponent = (props) => {
    const contextValue = useContext(StateContext);
    const toggleItem = () => {
        contextValue.dispatch({type: "toggle", payload: props.task})
    }

    return(
        <li style={props.task.completed ? {textDecoration: "line-through"} : {textDecoration: "none"}} key={props.task.id} onClick={toggleItem}>{props.task.item}</li>
    )
}

export default ToDoItemComponent;