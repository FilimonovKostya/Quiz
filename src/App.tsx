import React, {useEffect} from 'react';
import './App.css';
import {Question} from './Components/Question';
import {Answer} from "./Components/Answer";
import {useDispatch, useSelector} from "react-redux";
import {getQuestions} from "./Api/api";
import {getQuestionTC} from "./Redux/quizReducer";
import {RootStoreType} from "./Redux/store";


// запуск теста по кнопке;
// отображение 4 вариантов ответа на вопрос;
// после выбора ответа необходимо показывать следующий вопрос до конца теста;
// в конце пользователю оглашается результат тестирования (общее время прохождения теста, количество правильных ответов, сообщение статуса прохождения теста).


function App() {
    const isLoading = useSelector<RootStoreType, boolean>(state => state.quiz.isLoading)
    const questions = useSelector<RootStoreType, string[]>(state => state.quiz.results.map(el => el.question))
    const answers = useSelector<RootStoreType, string[][]>(state => state.quiz.results.map(el => el.incorrect_answers))
    const totalCounter = useSelector<RootStoreType, number>(state => state.quiz.totalCounter)
    const rightAnswers = useSelector<RootStoreType, string[]>(state => state.quiz.results.map(el => el.correct_answer))
    const unionAnswers = [rightAnswers[totalCounter]].concat(answers[totalCounter]).sort(() => 0.5 - Math.random())
    const counterRightAnswers = useSelector<RootStoreType, number>(state => state.quiz.counterRightAnswers)


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


    return <div className="container">
        <div className="heading">
            <h1 className="heading__text">Quiz</h1>
        </div>

        <div className="quiz">
            <div className="quiz-form__quiz">
                <Question questions={questions[totalCounter]}/>
                <Answer answers={unionAnswers} counterRightAnswers={counterRightAnswers} rightAnswers={rightAnswers[totalCounter]} totalCounter={totalCounter}/>
            <h1> Total Counter {totalCounter}</h1>
            <h1> Right Counter {counterRightAnswers}</h1>
            </div>
        </div>
    </div>
}

export default App;
