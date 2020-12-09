import React from "react";
import {AnswerType} from "./App";

type AnswerPropsType = {
    answer: Array<AnswerType>
    questionID: string
    changeAnswerAndQuestion: (questionID: string, answerID: string, isRight: boolean) => void
}

export const Answer = (props: AnswerPropsType) => {
    return <div className={'answerContainer'}>
        <ul className={'answers'}>
            {
                props.answer.map((el, index) => {

                    return <li key={index} onClick={() => props.changeAnswerAndQuestion(props.questionID, el.id, el.isRight)}> {el.answer} </li>
                })
            }
        </ul>
    </div>
}