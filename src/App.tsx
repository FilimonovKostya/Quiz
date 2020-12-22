import React, {useState} from 'react';
import './App.css';
import {Question} from './Question';
import {Answer} from './Answer';
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


function App() {

    const firstQuestionID = v1()
    const secondQuestionID = v1()
    const thirdQuestionID = v1()

    const [currentValue, setCurrentValue] = useState<number>(0)
    const [countRightAnswers, setCountRightAnswers] = useState<number>(0)


    const [state, setState] = useState<InitialStateType[]>([
        {
            id: firstQuestionID, title: 'Что такое React',
            answers:  [
                {
                    id: firstQuestionID,
                    answer: 'Это декларативная, эффективная и гибкая JavaScript библиотека для создания пользовательских интерфейсов.',
                    isRight: true
                },
                {
                    id: v1(),
                    answer: 'Это полноценный фрейморк',
                    isRight: false
                },
                {
                    id: v1(), answer: 'Это вообще язык программирования ',
                    isRight: false
                }
            ]
        },
        {
            id: secondQuestionID, title: 'Почему мы используем React',
            answers: [
                {
                    id: v1(),
                    answer: 'Так как нет других варинатов',
                    isRight: false
                },
                {
                    id: secondQuestionID,
                    answer: 'Из-за скорости работы ,благодаря Virtual Dom',
                    isRight: true
                },
                {
                    id: v1(), answer: 'Больше платят и он на хайпе', isRight: false
                }
            ]
        },
        {
            id: thirdQuestionID,
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
                    id: thirdQuestionID,
                    answer: "это техника и набор библиотек  алгоритмов, которые позволяют нам улучшить производительность на клиентской стороне",
                    isRight: true
                }
            ]
        },

    ])

    const questions = state[currentValue].title
    const answers:AnswersType[] = state[currentValue].answers


    return <div className={'wrapper'}>
        <div className={'container'}>

            <React.Fragment>
                {
                    state.length <= currentValue
                        ? <h1>{countRightAnswers}</h1>
                        : <><Question question={questions} />
                            <Answer answers={answers} state={state}/></>
                }

            </React.Fragment>

        </div>
    </div>

}

export default App;
