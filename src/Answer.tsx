import React, {useState} from "react";
import {StateType} from "./App";

type AnswerPropsType = {
    answer: StateType
    questionsID: string
    changeAnswerAndQuestion: (questionID: string, answerID: string) => void
    setRight: (value:string) => void
    setWrong: (value:string) => void
    right:string
    wrong:string
}

export const Answer = (props: AnswerPropsType) => {


    return <div className={'answerContainer'}>
        <ul className={'answers'}>
            {
                props.answer[props.questionsID].map((el, index) => {
                    const onClickHandler = () => {

                        if (el.isRight) {
                            props.changeAnswerAndQuestion(props.questionsID, el.id)
                            props.setRight('right')

                        } else {
                            props.changeAnswerAndQuestion(props.questionsID, el.id)
                            props.setWrong('wrong')
                        }
                    }
                    return <li key={index} className={el.isRight ? props.right : props.wrong} onClick={onClickHandler}> {el.answer} </li>
                })
            }
        </ul>
    </div>
}