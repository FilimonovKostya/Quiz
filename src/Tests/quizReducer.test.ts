import {setQuestionsAC, InitialStateType, quizReducer} from "../Redux/quizReducer";
import {v1} from "uuid";


let startState: InitialStateType[] = []

beforeEach(() => {
    startState = [
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
                }, {
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
})

test('Change question and answers', () => {

    const endState = quizReducer(startState, setQuestionsAC(1))

    expect(endState[0].title).toBe('Почему мы используем React')
    expect(endState[0].answers[0].answer).toBe('Так как нет других варинатов')
    expect(endState[0].answers[1].answer).toBe('Из-за скорости работы ,благодаря Virtual Dom')
    expect(endState[0].answers[2].answer).toBe('Больше платят и он на хайпе')

})