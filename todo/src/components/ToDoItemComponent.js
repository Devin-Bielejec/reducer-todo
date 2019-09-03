import React from "react";

const ToDoItemComponent = (props) => {
    return(
        <li key={props.task.id}>{props.task.item}</li>
    )
}

export default ToDoItemComponent;