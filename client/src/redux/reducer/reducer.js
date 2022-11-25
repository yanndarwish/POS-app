import { combineReducers } from "@reduxjs/toolkit";
import theme from "../features/theme";
import login from "../features/login";
import api from "../services/api";

const rootReducer = combineReducers({
    theme,
    login,
    [api.reducerPath]: api.reducer
})

export default rootReducer