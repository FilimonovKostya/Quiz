import React, {useState} from 'react';
import './App.css';
import {Question} from './Components/Question';
import {useSelector} from "react-redux";
import {RootStoreType} from "./Redux/store";
import {Answer} from "./Components/Answer";
import {AnswersType} from "./Redux/quizReducer";

function App() {
    let [counter, setCounter] = useState(0)

    const questions = useSelector<RootStoreType, string[]>(state => state.quiz.map(el => el.title))
    const answers = useSelector<RootStoreType, AnswersType[][]>(state => state.quiz.map(el => el.answers))
// ответы здесь уже undefined

    return <div className={'wrapper'}>

        <div className={'container'}>

            <React.Fragment>
                <Question question={questions[counter]}/>
                <Answer answers={answers[counter]} counter={counter} setCounter={setCounter}/>
            </React.Fragment>

        </div>
    </div>
}

export default App;
