import React from "react";


type AnswerPropsType = {
    answers:string[]
    setCounter:(value:number) => void
    counter:number
}

export const Answer = (props: AnswerPropsType) => {

    const onClickHandler = () => {
        props.setCounter( props.counter + 1)
    }

    return <div className={'answerContainer'}>
        <ul className={'answers'}>
            {props.answers.map((el, index) => <li key={index} onClick={onClickHandler}>{el}</li>)}
        </ul>
    </div>
}