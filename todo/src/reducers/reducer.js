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
            //Get index of toggled Item in current state
            let toggledItem = state.toDos.filter( item => item.id === action.payload.id)[0];

            action.payload.completed ? action.payload.completed = false : action.payload.completed = true;
            let newState = [...state.toDos];
            newState.splice(newState.indexOf(toggledItem), 1, action.payload);
            return { toDos: newState}
        case "clear":
            console.log([...state.toDos.filter( item => !item.completed)])
            return { toDos: [...state.toDos.filter( item => !item.completed)]}
    }
}

export { initialState, toDosReducer };