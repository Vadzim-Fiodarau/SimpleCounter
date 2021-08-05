import React, {ChangeEvent} from "react";

type PropsType = {
    OnChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    OnChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    setNewValueHandler: () => void
    maxValue: number
    startValue: number
    counter:number | string
}

export const SetCounterValue: React.FC<PropsType> = ({
                                                         OnChangeMaxValueHandler,
                                                         OnChangeStartValueHandler,
                                                         setNewValueHandler,
                                                         maxValue,
                                                         startValue,
                                                         counter
                                                     }) => {

const incorrectInput = maxValue <= startValue ? 'inputError' : ''

    return (
        <div className={'set-wrapper-counter'}>
            <div className={'set-counter'}>
                <div className={'set-input'}>
                        <h3>max value:
                            <input className={maxValue < 0 || incorrectInput ? 'inputError' : 'border'}
                                   type={'number'}
                                   value={maxValue}
                                   onChange={OnChangeMaxValueHandler}/>
                        </h3>


                        <h3>start value:
                            <input className={startValue < 0 || incorrectInput ? 'inputError' : 'border'}
                                   type={'number'}
                                   value={startValue}
                                   onChange={OnChangeStartValueHandler}
                            />
                        </h3>


                </div>
            </div>
            <div className={'set-wrapper'}>
                <div className={'wrap-button-set'}>
                    <button className={'button-set'}
                            disabled={  maxValue < 0 || startValue < 0 ||
                            startValue === counter || maxValue === counter ||
                            maxValue <= startValue
                                ? true: undefined}
                            onClick={setNewValueHandler}>
                        set
                    </button>
                </div>
            </div>
        </div>
    )
}
