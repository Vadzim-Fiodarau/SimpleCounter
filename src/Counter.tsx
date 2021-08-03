import React from "react";





type CounterPropsType = {
    counterIncrement: () => void
    resetCounter: () => void
    counter: number
    maxValue:number
    startValue: number
}


function Counter(props: CounterPropsType) {

    const classes = props.counter >= 0 ? true : undefined
    const enterNewValue = props.counter
    const incorrect = props.maxValue < 0 || props.startValue < 0 || props.maxValue <= props.startValue ?  <div className={'error'}>Incorrect value </div>: enterNewValue

    return (
        <div className={'wrapper-counter'}>
            <div className={'counter'}>
                <div className={props.counter === props.maxValue ? 'red' : ''}><h1>{incorrect}</h1></div>
            </div>
            <div className={'wrapper-inc-res'}>
                <div className={'wrap-button-inc'}>
                    <button className={'button-inc'}
                            disabled={props.counter === props.maxValue || props.maxValue <0  || props.startValue <0 ? true : undefined}
                            onClick={props.counterIncrement}>inc
                    </button>
                </div>
                <div className={'wrap-button-res'}>
                    <button className={classes ? 'button-res' : ''}
                            disabled={props.counter === 0 ? true : undefined}
                            onClick={props.resetCounter}>reset
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Counter