type CounterPropsType = {
  counterIncrement: () => void
  resetCounter: () => void
  counter: number | string
  maxValue: number
  startValue: number
  getIsDisabled: () => boolean
}

function Counter(props: CounterPropsType) {

  const classes = props.counter >= 0 ? true : undefined
  const incorrect = props.maxValue < 0
  || props.startValue < 0
  || props.maxValue <= props.startValue ?
    <div className={'error'}>Incorrect value </div> : props.counter

  return (
    <div className={'wrapper-counter'}>
      <div className={'counter'}>
        <div className={props.counter === props.maxValue ? 'red' : ''}>
          <h1>{incorrect}</h1></div>
      </div>
      <div className={'wrapper-inc-res'}>
        <div className={'wrap-button-inc'}>
          <button className={'button-inc'}
                  disabled={props.getIsDisabled()}
                  onClick={props.counterIncrement}>inc
          </button>
        </div>
        <div className={'wrap-button-res'}>
          <button className={classes ? 'button-res' : 'button-res'}
                  disabled={props.counter === 0 ? true : undefined}
                  onClick={props.resetCounter}>reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter