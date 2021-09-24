import { ADD_CONTACT, DELETE_CONTACT, CHANGE_FILTER } from "./actions-types";

export function addContact(id, name, number) {
  return {
    type: ADD_CONTACT,
    payload: { id, name, number },
  };
}

export function deleteContact(id) {
  return { type: DELETE_CONTACT, payload: id };
}

export function changeFilter(text) {
  return { type: CHANGE_FILTER, payload: text };
}
