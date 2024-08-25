import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
