import React from 'react';
import './App.css';
import {Question} from './Components/Question';
import {useSelector} from "react-redux";
import {RootStoreType} from "./Redux/store";
import {Answer} from "./Components/Answer";
import {AnswersType} from "./Redux/quizReducer";

function App() {

    const questions = useSelector<RootStoreType, string[]>(state => state.quiz.map(el => el.title))
    const answers = useSelector<RootStoreType, AnswersType[][]>(state => state.quiz.map(el=> el.answers))

    return <div className={'wrapper'}>

        <div className={'container'}>

            <React.Fragment>
                <Question question={questions[1]}/>
                <Answer answers={answers[1]}/>
            </React.Fragment>

        </div>
    </div>
}

export default App;
