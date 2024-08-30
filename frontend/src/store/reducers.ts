import { combineReducers } from "redux";
import LoginReducer from './auth/reducer'

const rootReducer = combineReducers({
    Login: LoginReducer
});

export default rootReducer;
