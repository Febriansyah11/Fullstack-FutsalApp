import {combineReducers} from "redux";
import rolesReducers from "../../role/reducer/reducer";
import userReducers from "./UserReducer";

export default combineReducers({rolesReducers, userReducers})
