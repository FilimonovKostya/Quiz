import React, {useState} from "react";
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
    const [inputAnswer,setInputAnswer] = useState('')

    const callBackClickHandler = () => {
        dispatch(changeTotalCounterAC(props.totalCounter + 1))
        if(inputAnswer === props.rightAnswers){
            dispatch(counterRightAnswerAC(props.counterRightAnswers + 1))
        }
    }

    return <>
        {
            props.answers.map((el, index) => {
                const callBackInputValue = () => {
                        setInputAnswer(el)
                }
                return <label key={index} onClick={callBackInputValue} className="quiz-form__ans">
                    <input type="radio" value={el} name={'q1'}/>
                    <span className="design"/>
                    <span className="text">{el}</span>
                </label>
            })}
        <div className="submit" onClick={callBackClickHandler} > SUBMIT </div>
    </>

}
