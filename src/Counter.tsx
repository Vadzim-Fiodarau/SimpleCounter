import React from "react";
import {statePropsType} from "./App";


type CounterPropsType = {
    counterIncrement: () => void
    resetCounter: () => void
    counter: statePropsType

}


function Counter(props: CounterPropsType) {

    const classes = props.counter >= 0 ? true : undefined


    return (
        <div className={'wrapper-counter'}>
            <div className={'counter'}>
                <div className={props.counter === 5 ? 'red' : ''}><h1>{props.counter}</h1></div>
            </div>
            <div className={'wrapper-inc-res'}>
                <div className={'wrap-button-inc'}>
                    <button className={'button-inc'}
                            disabled={props.counter === 5 ? true : undefined}
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