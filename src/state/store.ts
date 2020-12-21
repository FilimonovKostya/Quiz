import {combineReducers, createStore} from "redux";
import {quizReducer} from "./quizReducer";


export const rootReducer = combineReducers({
    data: quizReducer

})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>