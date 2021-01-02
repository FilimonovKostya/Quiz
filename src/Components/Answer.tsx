import React from "react";
import {AnswersType, changeQuestionAC} from "../Redux/quizReducer";
import {useDispatch} from "react-redux";


type AnswerPropsType = {
    answers: AnswersType[]
    counter: number
    setCounter: (value: number) => void
}

export const Answer = (props: AnswerPropsType) => {
    debugger
    const onClickHandler = () => {
        dispatch(changeQuestionAC(props.counter))
        props.setCounter(props.counter + 1)
    }

  const answers = props.answers.map(el => {
      debugger
      return <li onClick={onClickHandler}> {el.answer} </li>
  })


    const dispatch = useDispatch()


    return <div className={'answerContainer'}>
        <ul className={'answers'}>
            {answers}
        </ul>
    </div>
}