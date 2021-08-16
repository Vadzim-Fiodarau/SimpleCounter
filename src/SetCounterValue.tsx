import React, {ChangeEvent} from "react";

type PropsType = {
  // lowerCase
  OnChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
  OnChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
  setNewValueHandler: () => void
  maxValue: number
  startValue: number
  getIsDisabledBtn:()=> boolean
}

export const SetCounterValue: React.FC<PropsType> = ({
                                                       OnChangeMaxValueHandler,
                                                       OnChangeStartValueHandler,
                                                       setNewValueHandler,
                                                       maxValue,
                                                       startValue,
                                                       getIsDisabledBtn
                                                     }) => {
  const incorrectInput = maxValue <= startValue ? 'inputError' : ''
  const classForMaxValueBtn = maxValue < 0 || incorrectInput ? 'inputError' : 'border'
  const classForStartValueBtn = startValue < 0 || incorrectInput ? 'inputError' : 'border'

  return (
    <div className={'set-wrapper-counter'}>
      <div className={'set-counter'}>
        <div className={'set-input'}>
          <h3>
            max value:
            <input
              className={classForMaxValueBtn}
              type={'number'}
              value={maxValue}
              onChange={OnChangeMaxValueHandler}/>
          </h3>
          <h3>start value:
            <input
              className={classForStartValueBtn}
              type={'number'}
              value={startValue}
              onChange={OnChangeStartValueHandler}
            />
          </h3>
        </div>
      </div>
      <div className={'set-wrapper'}>
        <div className={'wrap-button-set'}>
          <button
            className={'button-set'}
            disabled={getIsDisabledBtn()}
            onClick={setNewValueHandler}>
            set
          </button>
        </div>
      </div>
    </div>
  )
}
