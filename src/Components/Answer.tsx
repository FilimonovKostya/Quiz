import React from "react";
import {AnswersType} from "../Redux/quizReducer";


type AnswerPropsType = {
    answers: AnswersType[]
}

export const Answer = (props: AnswerPropsType) => {

    const answers = props.answers.map(el => <li>{el.answer}</li>)

    // useEffect(() => {
    //     setTimeout(() => {
    //         props.setTimer(props.timer - 1)
    //     }, 1000)
    // }, [props.timer])

    // const answer = props.answers.map((el, index) => {
    //
    //     const changeQuestion = () => {
    //         if (el.isRight) {
    //             props.changeCurrentQuestion(props.currentQuestion + 1)
    //             props.rightAnswers(props.counterRightAnswers + 1)
    //
    //         } else {
    //             props.changeCurrentQuestion(props.currentQuestion + 1)
    //         }
    //     }
    //
    //     return <li key={index} className={el.isRight ? right : wrong} onClick={changeQuestion}> {el.answer} </li>
    // })

    return <div className={'answerContainer'}>
        <ul className={'answers'}>
            {answers}
        </ul>
    </div>
}