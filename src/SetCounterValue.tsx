import React, {ChangeEvent, useEffect, useState} from "react";

type PropsType = {
    counter: number
}

export const SetCounterValue = (props: PropsType) => {
    let [maxValue, setMaxValue] = useState(0)
    let [startValue, setStartValue] = useState(0)

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

    const OnChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(JSON.parse(e.currentTarget.value))
    }
    const OnChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(JSON.parse(e.currentTarget.value))
    }
    const setNewValueHandler = () => {
        console.log('hi')
    }


    return (
        <div>
            <div className={'set-counter'}>
                <div className={'set-input'}>
                    <div>
                        <h3>
                            max value
                        </h3>
                        <input type={'number'} value={maxValue} onChange={OnChangeMaxValueHandler}/>
                    </div>
                    <div>
                        <h3>
                            start value
                        </h3>
                        <input type={'number'} value={startValue} onChange={OnChangeStartValueHandler}/>
                    </div>
                </div>
            </div>
            <div className={'set-wrapper'}>
                <div className={'wrap-button-set'}>
                    <button className={'button-set'}
                            disabled={false}
                            onClick={setNewValueHandler}>
                        set
                    </button>
                </div>
            </div>
        </div>
    )
}
