import React from "react";

const initialState = {
    toDos: [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
    }]
  }

//Actions - Add, clear
const toDosReducer = (state, action) => {
    switch(action.type) {
        case "add":
            return { toDos: [...initialState.toDos, action.payload] };
    }
}

export { initialState, toDosReducer };