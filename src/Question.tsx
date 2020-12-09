import React from "react";

type QuestionPropsType = {
    question: string
    questionID:string
}

export const Question = (props:QuestionPropsType) => {
    return <div className={'questionContainer'}>
        <h1>Question</h1>
        <h2>{props.question} ? </h2>
    </div>
}