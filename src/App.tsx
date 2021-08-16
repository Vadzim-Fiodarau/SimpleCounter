import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter";
import {SetCounterValue} from "./SetCounterValue";


function App() {
  let [counter, setCounter] = useState<any>(0)
  let [maxValue, setMaxValue] = useState(0)
  let [startValue, setStartValue] = useState(0)

  // const [isDisable, setIsDisable] = useState(false);
  // useEffect(() => {
  //   if () {
  //     setIsDis(true)
  //   }
  //
  //   if () {
  //     setIsDis(false)
  //   }
  //
  //   if () {
  //     // ...
  //   }
  // }, [staV, maxV, ...])

  useEffect(() => {
    const CURRENT_MAX_VALUE_STORAGE =
      localStorage.getItem('currentMaxValue')
    const CURRENT_START_VALUE_STORAGE =
      localStorage.getItem('currentStartValue')

    if (CURRENT_MAX_VALUE_STORAGE) {
      const newMaxValueStorage = JSON.parse(CURRENT_MAX_VALUE_STORAGE)
      setMaxValue(newMaxValueStorage)
    }

    if (CURRENT_START_VALUE_STORAGE) {
      const newStartValueStorage = JSON.parse(CURRENT_START_VALUE_STORAGE)
      setStartValue(newStartValueStorage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('currentMaxValue', JSON.stringify(maxValue))
    localStorage.setItem('currentStartValue', JSON.stringify(startValue))
  }, [maxValue, startValue])


  const counterIncrement = () => counter < maxValue && setCounter(++counter)
  const resetCounter = () => setCounter(startValue)

  const OnChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const currentTarget = e.currentTarget.value;

    if (currentTarget >= JSON.stringify(0)) {
      setCounter("enter values and press 'set'")
    }
    setMaxValue(JSON.parse(currentTarget))

  }
  const OnChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const currentTarget = e.currentTarget.value;

    if (currentTarget >= JSON.stringify(0)) {
      setCounter("enter values and press 'set'")
    }
    setStartValue(JSON.parse(currentTarget))
  }

  const setNewValueHandler = () => {
    setCounter(maxValue)
    setCounter(startValue)
  }

  const getIsDisabledBtn = () => {
    const disableValue = (maxValue < 0)
      || (startValue < 0)
      || (startValue >= counter)
      || (maxValue <= counter)
      || (maxValue <= startValue)
      || (counter > startValue)

    if (disableValue) {
      return true
    }
    return false
  }
  const getIsDisabled = () => {
    const disableValue = counter === maxValue
    || maxValue < 0 || startValue < 0
    || startValue === maxValue
    || startValue === maxValue
    if (disableValue) {
      return true
    }
    return false
  }

  return (
    <div className="App">
      <SetCounterValue
        OnChangeMaxValueHandler={OnChangeMaxValueHandler}
        OnChangeStartValueHandler={OnChangeStartValueHandler}
        setNewValueHandler={setNewValueHandler}
        maxValue={maxValue}
        startValue={startValue}
        getIsDisabledBtn={getIsDisabledBtn}
      />
      <Counter
        counterIncrement={counterIncrement}
        resetCounter={resetCounter}
        counter={counter}
        maxValue={maxValue}
        startValue={startValue}
        getIsDisabled={getIsDisabled}
      />
    </div>
  );
}

export default App;
