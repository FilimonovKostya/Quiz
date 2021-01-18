import React from "react";

type QuestionPropsType = {
    questions:string
}

export const Question = (props:QuestionPropsType) => {
    return <div className={'questionContainer'}>
        <h1>Question</h1>
        <h2> {props.questions} </h2>
    </div>
}