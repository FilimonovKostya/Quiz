import {Dispatch} from "redux";
import {getQuestions} from "../Api/api";

type ActionsType =
    | ReturnType<typeof setQuestionsAC>
    | ReturnType<typeof setLoadStatus>

export type ResponseType = {
    results: ResultsType[]
    totalCounter: number
    counterRightAnswers: number
    isLoading: boolean
}

type ResultsType = {
    category: string
    type: string
    difficulty: string
    question: string
    correct_answer: string
    incorrect_answers: string[]
}

const initialState: ResponseType = {
    results: [],
    counterRightAnswers: 0,
    isLoading: false,
    totalCounter: 0
}

export const quizReducer = (state = initialState, actions: ActionsType): ResponseType => {
    switch (actions.type) {
        case "SET-QUESTIONS":
            return {...state, results: actions.dataResponse}
        case "SET-LOADING-STATUS":
            return {...state, isLoading: actions.isLoading}
        default:
            return state
    }
}


export const setQuestionsAC = (dataResponse: ResultsType[]) => ({type: 'SET-QUESTIONS', dataResponse} as const)
export const setLoadStatus = (isLoading: boolean) => ({type: 'SET-LOADING-STATUS', isLoading} as const)

export const getQuestionTC = (dataResponse: ResultsType[]) => (dispatch: Dispatch<ActionsType>) => {
    getQuestions().getAPI()
        .then((res) => {
            console.log(res)
            dispatch(setQuestionsAC(dataResponse))
            dispatch(setLoadStatus(true))
        })
}