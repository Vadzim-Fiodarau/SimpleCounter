import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";
import {SetCounterValue} from "./SetCounterValue";

export type statePropsType = number



function App() {

    let [counter, setCounter] = useState<statePropsType>(0)


    const counterIncrement = () => {
        if (counter >= 0 && counter < 5) {
            return setCounter(++counter)
        }
    }

    const resetCounter = () => setCounter(0)


    return (
        <div className="App">
            <Counter counterIncrement={counterIncrement}
                     resetCounter={resetCounter}
                     counter={counter}
            />
            <SetCounterValue counter={counter}/>
        </div>
    );
}

export default App;
