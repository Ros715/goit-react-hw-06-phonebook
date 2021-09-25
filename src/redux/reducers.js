import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, changeFilter } from "./actions";

const contacts = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
});

const filter = createReducer("", {
  [changeFilter]: (state, action) => action.payload,
});

const rootReducer = combineReducers({
  contacts,
  filter,
});

export default rootReducer;
