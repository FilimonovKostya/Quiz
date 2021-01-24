import React from "react";

type QuestionPropsType = {
    questions: string
}

export const Question = (props: QuestionPropsType) => {
    return <p className="quiz-form__question">{props.questions}</p>
}