import React from "react";
import {AnswerType} from "./App";

type AnswerPropsType = {
    answer: Array<AnswerType>
}

export const Answer = (props: AnswerPropsType) => {
    return <div className={'answerContainer'}>
        <ul className={'answers'}>
            {
                props.answer.map((el, index) => {

                    return <li key={index} > {el.answer} </li>
                })
            }
        </ul>
    </div>
}