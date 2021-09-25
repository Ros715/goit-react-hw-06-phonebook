//import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, changeFilter } from "./actions";

const INITIAL_STATE = {
  contacts: {
    items: [],
    filter: "",
  },
};

const contactsReducer = createReducer(INITIAL_STATE, {
  [addContact]: (state, action) => {
    return {
      ...state,
      contacts: {
        ...state.contacts,
        items: [...state.contacts.items, action.payload],
      },
    };
  },
  //state.contacts.items.push(action.payload),
  [deleteContact]: (state, action) => {
    return {
      ...state,
      contacts: {
        ...state.contacts,
        items: state.contacts.items.filter((item) => {
          return item.id !== action.payload;
        }),
      },
    };
  },
  //(state.contacts.items = state.contacts.items.filter(
  //  (item) => item.id !== action.payload
  //)),
  [changeFilter]: (state, action) => {
    return {
      ...state,
      contacts: {
        ...state.contacts,
        filter: action.payload,
      },
    };
  },
  //(state.contacts.filter = action.payload),
});

//export const rootReducer = combineReducers({
//  contactsReducer,
//});
//ERROR: this rootReducer in definition of store does not work !!!

export const rootReducer = contactsReducer; //this works
