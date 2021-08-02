import React, {ChangeEvent} from "react";

type PropsType = {
    OnChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    OnChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    setNewValueHandler: () => void
    maxValue: number
    startValue: number
}

export const SetCounterValue: React.FC<PropsType> = ({
                                                         OnChangeMaxValueHandler,
                                                         OnChangeStartValueHandler,
                                                         setNewValueHandler,
                                                         maxValue,
                                                         startValue
                                                     }) => {


    return (
        <div>
            <div className={'set-counter'}>
                <div className={'set-input'}>
                    <div>
                        <h3>
                            max value
                        </h3>
                        <input className={maxValue < 0 ? 'inputError' : ''}
                               type={'number'}
                               value={maxValue}
                               onChange={OnChangeMaxValueHandler}/>
                    </div>
                    <div>
                        <h3>
                            start value
                        </h3>
                        <input className={startValue < 0 ? 'inputError' : ''}
                               type={'number'}
                               value={startValue}
                               onChange={OnChangeStartValueHandler}/>
                    </div>
                </div>
            </div>
            <div className={'set-wrapper'}>
                <div className={'wrap-button-set'}>
                    <button className={'button-set'}
                            disabled={  maxValue < 0 || startValue < 0 ? true: undefined}
                            onClick={setNewValueHandler}>
                        set
                    </button>
                </div>
            </div>
        </div>
    )
}
