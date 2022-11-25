import { combineReducers } from "@reduxjs/toolkit";
import theme from "../features/theme";
import login from "../features/login";

const rootReducer = combineReducers({
    theme,
    login
})

export default rootReducer