import React from "react";
import { StateType} from "./App";

type AnswerPropsType = {
    answer: StateType
    questionsID: string
    changeAnswerAndQuestion: (questionID: string, answerID: string, isRight: boolean) => void
}

export const Answer = (props: AnswerPropsType) => {
    return <div className={'answerContainer'}>
        <ul className={'answers'}>
            {
                props.answer[props.questionsID].map((el, index) => {

                    return <li key={index} onClick={() => props.changeAnswerAndQuestion(props.questionsID, el.id, el.isRight)}> {el.answer} </li>
                })
            }
        </ul>
    </div>
}