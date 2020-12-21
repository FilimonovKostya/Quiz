import {combineReducers, createStore} from "redux";
import {quizReducer} from "./quizReducer";


const store = createStore(combineReducers({
    data: quizReducer

}))