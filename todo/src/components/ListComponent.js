import React from "react";
import { initialState } from "../reducers/reducer";
import ToDoItemComponent from "./ToDoItemComponent";

const ListComponent = () => {
    console.log(initialState);
    return(
        <ul className="todo">
            {initialState.toDos.map(task => <ToDoItemComponent task={task}/>)}
        </ul>
    )
}

export default ListComponent;