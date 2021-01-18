import axios from "axios";
import {ResponseType} from '../Redux/quizReducer'

const instance = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple',
})
const token = '2b44725ad5e68a67b69394893410cae789b590d924b38ad1464b2a951c9c10b7'

export const getQuestions = () => {
    return {
        getAPI: () => {
            return instance.get<ResponseType>(``)
        }
    }
}
