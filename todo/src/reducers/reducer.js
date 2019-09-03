import React from "react";

const initialState = {
    toDos: [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
    }]
  }

//Actions - Add, clear
const reducer = (state, action) => {
    switch(action.type) {
        case "add":
            return {  }
    }
    return state;
}

export { initialState, reducer };