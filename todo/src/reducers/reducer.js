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
    }
}

export { initialState, toDosReducer };