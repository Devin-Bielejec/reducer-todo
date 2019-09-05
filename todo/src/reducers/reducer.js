import React from "react";

const initialState = {
    toDos: [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
    }]
  }

//Actions - Add, clear
const toDosReducer = (state = initialState, action) => {
    switch(action.type) {
        case "add":
            return { toDos: [...state.toDos, action.payload] };
        case "toggle":
            console.log("toggle");
            //state without the current toggled one
            let filteredToDos = state.toDos.filter( item => item.id !== action.payload.id);
            console.log(action.payload);
            action.payload.completed ? action.payload.completed = false : action.payload.completed = true;
            console.log(action.payload);
            return { toDos: [...filteredToDos, action.payload]}
    }
}

export { initialState, toDosReducer };