import React from "react";


type AnswerPropsType = {
    answers: string[]

}

export const Answer = (props: AnswerPropsType) => {

    const answers = props.answers.map((el, index) => <li key={index} > {el} </li>)


    return <div className={'answerContainer'}>
        <ul className={'answers'}>
            {answers}
        </ul>
    </div>
}