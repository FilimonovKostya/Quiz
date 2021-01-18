import React, {useEffect, useState} from 'react';
import './App.css';
import {Question} from './Components/Question';
import {Answer} from "./Components/Answer";
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple',
})
const token = '2b44725ad5e68a67b69394893410cae789b590d924b38ad1464b2a951c9c10b7'

const getQuestions = () => {
    return {
        getAPI: () => {
            return instance.get<ResponsType>(``)
        }
    }
}

type ResultsType = {
    category: string
    type: string
    difficulty: string
    question: string
    correct_answer: string
    incorrect_answers: string[]
}
type ResponsType = {
    results: ResultsType[]
    response_code: number
}

function App() {

    const [questions, setQuestions] = useState<string[]>([])
    const [totalCount, setTotalCount] = useState<number>(0)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [all, setAll] = useState<string[]>([])

    useEffect(() => {
        getQuestions().getAPI()
            .then((res) => {

                setQuestions(res.data.results.map(el => el.question))
                const rightAnswers = res.data.results.map(el => el.correct_answer)
                const answers = res.data.results.map(el => el.incorrect_answers)
                setAll([...[...answers][totalCount], [...rightAnswers][totalCount]].sort(() => Math.random() - 0.5))

                setIsLoading(true)
            })
            .catch(error => {
                throw Error(' Ошибочка какая-то')
            })
    }, [totalCount])


    if (!isLoading) {
        return <h1>Waiting</h1>
    }

    return <div className={'wrapper'}>
        <div className={'container'}>
            <React.Fragment>
                {
                    totalCount>= 10
                        ? <h1>Кончились вопросы</h1>
                        : <><Question question={questions[totalCount]}/>
                            <Answer allAnswers={all} changeData={setTotalCount} totalCounter={totalCount}/></>
                }
            </React.Fragment>
        </div>
    </div>
}

export default App;
