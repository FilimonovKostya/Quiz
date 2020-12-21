import React from 'react';
import {Answer} from './Answer';
import './App.css';
import {Question} from './Question';


function App() {


    return <div className={'wrapper'}>
        <div className={'container'}>

            <React.Fragment>
                <Question question={titleForQuestion[currentQuestion]}/>

                <Answer answer={state} questionsID={answersID[currentQuestion]}
                        changeAnswerAndQuestion={changeAnswerAndQuestion}
                        setRight={setRight} setWrong={setWrong}
                        right={right} wrong={wrong}
                        setLoading={setLoading}
                />
            </React.Fragment>

        </div>
    </div>

}

export default App;
