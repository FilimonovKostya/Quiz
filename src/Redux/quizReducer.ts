import {v1} from "uuid";

export type AnswersType = {
    id: string
    answer: string
    isRight: boolean
}

export type InitialStateType = {
    id: string
    title: string
    answers: AnswersType[]
}

type ActionsType = ReturnType<typeof changeQuestionAC>

const initialState: InitialStateType[] = [
    {
        id: v1(), title: 'Что такое React',
        answers: [
            {
                id: v1(),
                answer: 'Это декларативная, эффективная и гибкая JavaScript библиотека для создания пользовательских интерфейсов.',
                isRight: true
            },
            {
                id: v1(),
                answer: 'Это полноценный фрейморк',
                isRight: false
            },
            {
                id: v1(),
                answer: 'Это вообще язык программирования ',
                isRight: false
            }
        ]
    },
    {
        id: v1(), title: 'Почему мы используем React',
        answers: [
            {
                id: v1(),
                answer: 'Так как нет других варинатов',
                isRight: false
            },
            {
                id: v1(),
                answer: 'Из-за скорости работы ,благодаря Virtual Dom',
                isRight: true
            },
            {
                id: v1(), answer: 'Больше платят и он на хайпе', isRight: false
            }
        ]
    },
    {
        id: v1(),
        title: 'Что такое Virtual Dom',
        answers: [
            {
                id: v1(),
                answer: 'Аналог на Shadow DOM',
                isRight: false
            },
            {
                id: v1(),
                answer: 'это браузерная технология, предназначенная в основном для определения области видимости переменных и CSS в веб-компонентах.',
                isRight: false
            },
            {
                id: v1(),
                answer: "это техника и набор библиотек  алгоритмов, которые позволяют нам улучшить производительность на клиентской стороне",
                isRight: true
            }
        ]
    },
]

export const quizReducer = (state = initialState, actions: ActionsType): InitialStateType[] => {

    switch (actions.type) {
        case "CHANGE-QUESTION":
            return [state[actions.counter]]
        default:
            return state
    }
}


//Actions
export const changeQuestionAC = (counter:number) => ({type: 'CHANGE-QUESTION',counter} as const)