import React, { useContext } from "react";
import StateContext from "../contexts/StateContext";

const ToDoItemComponent = (props) => {
    const contextValue = useContext(StateContext);

    const toggleItem = () => {
        contextValue.dispatch({type: "toggle", payload: {id: props.task.id, completed: true, task: props.task.item}})
    }
    return(
        <li key={props.task.id} onClick={toggleItem}>{props.task.item}</li>
    )
}

export default ToDoItemComponent;