import React from "react";
import {StateType} from "./App";

type AnswerPropsType = {
    answer: StateType
    questionsID: string
    changeAnswerAndQuestion: (questionID: string, answerID: string) => void
    setRight: (value: string) => void
    setWrong: (value: string) => void
    right: string
    wrong: string
    setLoading:(boolean:boolean) => void
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
                            props.setLoading(true)

                        } else {
                            props.changeAnswerAndQuestion(props.questionsID, el.id)
                            props.setWrong('wrong')
                            props.setLoading(true)

                        }
                    }
                    return <li key={index} className={el.isRight ? props.right : ''} onClick={onClickHandler}> {el.answer}</li>
                })
            }
        </ul>
    </div>
}