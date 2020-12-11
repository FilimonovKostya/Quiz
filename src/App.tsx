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


    const [right, setRight] = useState('')
    const [wrong, setWrong] = useState('')

    const [currentQuestion, setCurrentQuestion] = useState(0)

    const [rightAnswer, setRightAnswer] = useState(0)

    const [questions, setQuestions] = useState<Array<QuestionType>>([
        {id: firstQuestionID, title: 'Что такое React'},
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
            {id: secondQuestionID, answer: 'Из-за скорости работы ,благодаря Virtual Dom', isRight: true},
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


    const titleForQuestion = questions.map(el => el.title)
    const answersID = questions.map(el => el.id)

    const changeAnswerAndQuestion = (questionID: string, answerID: string) => {

        let question = state[questionID].find(f => f.id === answerID)
        setTimeout(() => {
            if (question && question.id === questionID) {
                setCurrentQuestion(currentQuestion + 1)
                setRightAnswer(rightAnswer + 1)
            } else {
                setCurrentQuestion(currentQuestion + 1)
            }
            setRight('')
            setWrong('')
        }, 1500)

    }

    console.log(rightAnswer)

    return <div className={'wrapper'}>
        <div className={'container'}>
            {
                questions.length > currentQuestion
                    ? <React.Fragment>
                        <Question question={titleForQuestion[currentQuestion]}/>
                        <Answer answer={state} questionsID={answersID[currentQuestion]}
                                changeAnswerAndQuestion={changeAnswerAndQuestion}
                                setRight={setRight} setWrong={setWrong}
                                right={right} wrong={wrong}
                        />
                    </React.Fragment>
                    : <div>{rightAnswer}</div>
            }


        </div>
    </div>

}

export default App;
