import React from 'react';
import {Answer} from './Answer';
import './App.css';
import {Question} from './Question';

function App() {
    return <div className={'wrapper'}>
        <div className={'container'}>
            <Question/>
            <Answer/>
        </div>
    </div>
}

export default App;
