import React from "react";
import {AnswersType} from "./App";


type AnswerPropsType = {
    answers: AnswersType[]
    changeCurrentQuestion: (value: number) => void
    currentQuestion: number
    counterRightAnswers: number
    rightAnswers: (value: number) => void
}

export const Answer = (props: AnswerPropsType) => {

    const answer = props.answers.map((el, index) => {

        const changeQuestion = () => {
            if (el.isRight) {
                props.changeCurrentQuestion(props.currentQuestion + 1)
                props.rightAnswers(props.counterRightAnswers + 1)
            }
        }

        return <li key={index} onClick={changeQuestion}> {el.answer} </li>
    })

    return <div className={'answerContainer'}>
        <ul className={'answers'}>
            {answer}
        </ul>
    </div>
}