///// step 2
import { createAction } from "@reduxjs/toolkit";
import { types } from "./actions-types";

export const addContact = createAction(types.ADD_CONTACT);
export const deleteContact = createAction(types.DELETE_CONTACT);
export const changeFilter = createAction(types.CHANGE_FILTER);
