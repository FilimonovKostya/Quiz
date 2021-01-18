import {applyMiddleware, combineReducers, createStore} from "redux";
import {quizReducer} from "./quizReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    quiz: quizReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStoreType = ReturnType<typeof rootReducer>