import React, {useState} from 'react';
import {Answer} from './Answer';
import './App.css';
import {Question} from './Question';
import {v1} from "uuid";

type QuestionType = {
    id: string
    title: string
}

export type AnswerType = {
    id: string,
    answer: string,
    isRight: boolean
}

export type StateType = {
    [key: string]: Array<AnswerType>
}

function App() {

    const firstQuestionID = v1()
    const secondQuestionID = v1()
    const thirdQuestionID = v1()



    const [currentQuestion, setCurrentQuestion] = useState(1)

    const [questions, setQuestions] = useState<Array<QuestionType>>([
        {id: firstQuestionID, title: 'Что такое React'  },
        {id: secondQuestionID, title: 'Почему мы используем React'},
        {id: thirdQuestionID, title: 'Что такое Virtual Dom'}
    ])

    const [state, setState] = useState<StateType>({
        [firstQuestionID]: [
            {
                id: firstQuestionID,
                answer: 'Это декларативная, эффективная и гибкая JavaScript библиотека для создания пользовательских интерфейсов.',
                isRight: true
            },
            {id: v1(), answer: 'Это полноценный фрейморк', isRight: false},
            {id: v1(), answer: 'Это вообще язык программирования ', isRight: false},
        ],
        [secondQuestionID]: [
            {
                id: v1(),
                answer: 'Так как нет других варинатов',
                isRight: false
            },
            {id:secondQuestionID, answer: 'Из-за скорости работы ,благодаря Virtual Dom', isRight: true},
            {id: v1(), answer: 'Больше платят и он на хайпе', isRight: false},
        ],
        [thirdQuestionID]: [
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
                answer: "это техника и набор библиотек / алгоритмов, которые позволяют нам улучшить производительность на клиентской стороне",
                isRight: true
            },
        ],

    })

    console.log(state[firstQuestionID])

    const titleForQuestion = questions.map(el => el.title)

    const changeAnswerAndQuestion = (questionID: string, answerID: string, isRight: boolean) => {
        debugger
        let question = state[questionID].find(f => f.id === answerID)
        if (question && question.isRight === isRight) {
            setQuestions([ {id: firstQuestionID, title: 'Почему мы используем React'},])
        }
    }

    return <div className={'wrapper'}>
        <div className={'container'}>
            <Question question={titleForQuestion[currentQuestion]}  />
            <Answer answer={state} questionID={firstQuestionID} changeAnswerAndQuestion={changeAnswerAndQuestion}/>
        </div>
    </div>

}

export default App;
