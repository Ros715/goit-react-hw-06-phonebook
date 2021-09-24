/*
///// step 1
import { createStore } from "redux";
import { reducer } from "./reducer";

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//export default store;
*/

///// step 2
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./actions";

const rootReducer = combineReducers({
  reducer: reducer,
});

export const store = configureStore({
  reducer: reducer, //rootReducer,
  devTools: process.env.NODE_ENV === "development",
});

//export default store;
