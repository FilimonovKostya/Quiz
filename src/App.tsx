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

    const [currentValue, setCurrentValue] = useState<number>(0)
    const [countRightAnswers, setCountRightAnswers] = useState<number>(0)


    const [state, setState] = useState<InitialStateType[]>([
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

    ])




    return <div className={'wrapper'}>
        <div className={'container'}>

            <React.Fragment>
                {
                    state.length > currentValue
                        ? <><Question question={state[currentValue].title}/>
                            <Answer answers={state[currentValue].answers}
                                    currentQuestion={currentValue}
                                    changeCurrentQuestion={setCurrentValue}
                                    rightAnswers={setCountRightAnswers}
                                    counterRightAnswers={countRightAnswers}

                            /></>
                        : <h1> Правильных ответов  {countRightAnswers} из {state.length}  </h1>


                }

            </React.Fragment>

        </div>
    </div>

}

export default App;
