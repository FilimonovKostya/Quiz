import React, {useState} from 'react';
import {Answer} from './Answer';
import './App.css';
import {Question} from './Question';
import {v1} from "uuid";
import {CircularProgress, Paper} from "@material-ui/core";

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

    const [right, setRight] = useState('')
    const [wrong, setWrong] = useState('')
    const [loading, setLoading] = useState(false)

    const [currentQuestion, setCurrentQuestion] = useState(0)

    const [rightAnswer, setRightAnswer] = useState(0)



    const titleForQuestion = questions.map(el => el.title)
    const answersID = questions.map(el => el.id)

    const changeAnswerAndQuestion = (questionID: string, answerID: string) => {

        let question = state[questionID].find(f => f.id === answerID)
        setTimeout(() => {
            if (question && question.id === questionID) {
                setCurrentQuestion(currentQuestion + 1)
                setRightAnswer(rightAnswer + 1)
                setRight('')
                // setLoading(true)
            } else {
                setCurrentQuestion(currentQuestion + 1)
                setWrong('')
                // setLoading(true)
            }
            setLoading(false)

        }, 1000)

    }

    console.log(rightAnswer)

    return <div className={'wrapper'}>
        <div className={'container'}>
            {
                questions.length > currentQuestion
                    ? <React.Fragment>

                        <Question question={titleForQuestion[currentQuestion]}/>
                        {loading ?
                            <CircularProgress/>
                            : <Answer answer={state} questionsID={answersID[currentQuestion]}
                                      changeAnswerAndQuestion={changeAnswerAndQuestion}
                                      setRight={setRight} setWrong={setWrong}
                                      right={right} wrong={wrong}
                                      setLoading={setLoading}
                            />


                        }

                    </React.Fragment>
                    : <div>{rightAnswer}</div>
            }

        </div>
    </div>

}

export default App;
