import { createStore, combineReducers } from "redux";
import {taskReducer} from "./taskReducer";
import { loadState } from "../localStorage";

const persistedState = loadState();

const rootReducer = combineReducers({
    tasks: taskReducer,
})

export const store = createStore(
                                rootReducer,
                                persistedState,                                 
                                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                                );
                                