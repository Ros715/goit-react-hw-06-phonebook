///// step 2
import { createAction, createReducer } from "@reduxjs/toolkit";

//import { ADD_CONTACT, DELETE_CONTACT, CHANGE_FILTER } from "./actions-types";
const ADD_CONTACT = "ADD_CONTACT";
const DELETE_CONTACT = "DELETE_CONTACT";
const CHANGE_FILTER = "CHANGE_FILTER";

const INITIAL_STATE = {
  contacts: {
    items: [],
    filter: "",
  },
};

/*
///// step 1
export function addContact(contact) { //id, name, number
  return {
    type: ADD_CONTACT,
    payload: contact, //{ id, name, number },
  };
}

export function deleteContact(id) {
  return { type: DELETE_CONTACT, payload: id };
}

export function changeFilter(text) {
  return { type: CHANGE_FILTER, payload: text };
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, action.payload],
        },
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter((item) => {
            return item.id !== action.payload;
          }),
        },
      };
    case CHANGE_FILTER:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          filter: action.payload,
        },
      };
    default:
      return state;
  }
};
*/

///// step 2
//import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction(ADD_CONTACT);
export const deleteContact = createAction(DELETE_CONTACT);
export const changeFilter = createAction(CHANGE_FILTER);

export const reducer = createReducer(INITIAL_STATE, {
  ADD_CONTACT: (state, action) => {
    console.log(state, action);
    return {
      ...state,
      contacts: {
        ...state.contacts,
        items: [...state.contacts.items, action.payload],
      },
    };
  },
  //state.contacts.items.push(action.payload),
  DELETE_CONTACT: (state, action) => {
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
  CHANGE_FILTER: (state, action) => {
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
