import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction('ADD');
const deleteTodo = createAction('DELETE');

/* const reducer = (state = [], action) => {
  switch(action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteTodo.type:
      return state.filter(toDo => toDo.id !== action.payload);
    default:
      return state;
  }
}; */

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteTodo]: (state, action) => state.filter(toDo => toDo.id !== action.payload)
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteTodo
};

export default store;