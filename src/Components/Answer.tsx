import React from "react";


type AnswerPropsType = {
    allAnswers: string[]
    changeData: (value: number) => void
    totalCounter: number
}

export const Answer = (props: AnswerPropsType) => {

    const onClickHandler = () => {
        props.changeData(props.totalCounter + 1)
    }

    return <div className={'answerContainer'}>
        <ul className={'answers'}>
            {props.allAnswers.map((el, index) => <li key={index} onClick={onClickHandler}> {el} </li>)}
        </ul>
    </div>
}