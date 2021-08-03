import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter";
import {SetCounterValue} from "./SetCounterValue";


function App() {

    let [counter, setCounter] = useState<any>(0)
    let [maxValue, setMaxValue] = useState(0)
    let [startValue, setStartValue] = useState(0)
    let [error, setError] = useState('enter')

    useEffect(() => {
        const currentMaxValueStorage = localStorage.getItem('currentMaxValue')
        const currentStartValueStorage = localStorage.getItem('currentStartValue')
        if (currentMaxValueStorage) {
            const newMaxValueStorage = JSON.parse(currentMaxValueStorage)
            setMaxValue(newMaxValueStorage)
        }
        if (currentStartValueStorage) {
            const newStartValueStorage = JSON.parse(currentStartValueStorage)
            setStartValue(newStartValueStorage)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('currentMaxValue', JSON.stringify(maxValue))
        localStorage.setItem('currentStartValue', JSON.stringify(startValue))
    }, [maxValue, startValue])


    const counterIncrement = () => {
        if (counter < maxValue) {
            return setCounter(++counter)
        }
    }

    const resetCounter = () => setCounter(startValue)

    const OnChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(JSON.parse(e.currentTarget.value))
        setError(error)
    }
    const OnChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(JSON.parse(e.currentTarget.value))
        setError(error)
    }

    const setNewValueHandler = () => {
        setCounter(startValue)

    }




    return (
        <div className="App">
            <Counter counterIncrement={counterIncrement}
                     resetCounter={resetCounter}
                     counter={counter}
                     maxValue={maxValue}
                     startValue={startValue}

            />
            <SetCounterValue OnChangeMaxValueHandler={OnChangeMaxValueHandler}
                             OnChangeStartValueHandler={OnChangeStartValueHandler}
                             setNewValueHandler={setNewValueHandler}
                             maxValue={maxValue}
                             startValue={startValue}
                             counter={counter}
            />
        </div>
    );
}

export default App;
