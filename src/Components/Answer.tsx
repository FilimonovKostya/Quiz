import React from "react";
import {useDispatch} from "react-redux";
import {changeTotalCounterAC, counterRightAnswerAC} from "../Redux/quizReducer";


type AnswerPropsType = {
    answers: string[]
    totalCounter: number
    counterRightAnswers: number
    rightAnswers: string
}

export const Answer = (props: AnswerPropsType) => {
    const dispatch = useDispatch()


    return <div className={'answerContainer'}>
        <ul className={'answers'}>
            {
                props.answers.map((el, index) => {
                    const onClickHandler = () => {
                        dispatch(changeTotalCounterAC(props.totalCounter + 1))

                        if (el === props.rightAnswers) {
                            dispatch(counterRightAnswerAC(props.counterRightAnswers + 1))
                        } else{
                            // dispatch(changeTotalCounterAC(props.totalCounter + 1))
                        }
                    }
                    return <li key={index} onClick={onClickHandler}> {el} </li>
                })
            }
        </ul>
    </div>
}