import React from "react";
import {AnswersType, InitialStateType} from "./App";


type AnswerPropsType = {
    answers: AnswersType[]
    state: InitialStateType[]
}

export const Answer = (props: AnswerPropsType) => {

    const answer = props.answers.map((el, index) => {

        const cheClick = () => {


            if (el.isRight) {
                alert('Right')
            } else {
                alert('not right')
            }
        }

        return <li key={index} onClick={cheClick}> {el.answer} </li>
    })

    return <div className={'answerContainer'}>
        <ul className={'answers'}>
            {answer}
        </ul>
    </div>
}