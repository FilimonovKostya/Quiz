import React, {useEffect} from 'react';
import './App.css';
import {Question} from './Components/Question';
import {Answer} from "./Components/Answer";
import {useDispatch, useSelector} from "react-redux";
import {getQuestions} from "./Api/api";
import {getQuestionTC} from "./Redux/quizReducer";
import {RootStoreType} from "./Redux/store";


function App() {
    const isLoading = useSelector<RootStoreType, boolean>(state => state.quiz.isLoading)
    const questions = useSelector<RootStoreType, string[]>(state => state.quiz.results.map(el => el.question))
    const currentQuestion = useSelector<RootStoreType, number>(state => state.quiz.totalCounter)
    const dispatch = useDispatch()

    useEffect(() => {
        getQuestions().getAPI()
            .then(((res) => {
                dispatch(getQuestionTC(res.data.results))
            }))
    }, [dispatch])


    if (!isLoading) {
        return <h1 style={{textAlign: 'center', color: 'White'}}> Waiting </h1>
    }

    return <div className={'wrapper'}>
        <div className={'container'}>
            <React.Fragment>
                <Question questions={questions[currentQuestion]}/>
                <Answer/>
            </React.Fragment>
        </div>
    </div>
}

export default App;
