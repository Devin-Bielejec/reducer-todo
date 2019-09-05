import React, { useContext } from "react";
import ToDoItemComponent from "./ToDoItemComponent";
import StateContext from "../contexts/StateContext";

const ListComponent = () => {
    const contextValue = useContext(StateContext);
    console.log("we are here", contextValue);
    return(
        <ul className="todo">
            {contextValue.state.toDos.map(task => <ToDoItemComponent task={task}/>)}
        </ul>
    )
}

export default ListComponent;