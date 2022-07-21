import { createStore } from "redux";
import { createAction, createReducer, configureStore, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({
        text: action.payload,
        id: Date.now(),
      });
    },
    remove: (state, action) => state.filter((toDo) => toDo.id !== action.payload),
  },
});

export const { add, remove } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });

// const ADD = "ADD";
// const DELETE = "DELETE";

// export const addTodo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// export const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id,
//   };
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD:
//       return [{ text: action.text, id: Date.now() }, ...state];
//     case DELETE:
//       return state.filter((toDo) => toDo.id !== action.id);
//     default:
//       return state;
//   }
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({
//       text: action.payload,
//       id: Date.now(),
//     });
//   },
//   [deleteToDo]: (state, action) => state.filter((toDo) => toDo.id !== action.payload),
// });
// const store = createStore(reducer);

// export const actionCreators = {
//   addToDo,
//   deleteToDo,
// };
