import { combineReducers } from "redux";
import todos from "./todo"

var todoApp = combineReducers({
    todos
})

export default todoApp;