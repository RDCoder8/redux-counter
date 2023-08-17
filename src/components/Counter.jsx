import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount } from "../features/counter/counterSlice"

export default function Counter () {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


  return(
    <div>
        <button onClick={()=> {
            const action = increment()
            dispatch(action)
        }}>Increase +</button>
      <span style={{fontWeight: "bold", fontSize: "50px", margin: "20px"}}>{count}</span>
      <button onClick={()=> {dispatch(decrement())}}>Drecrease -</button>
      <input 
      type="number"
      onKeyDown={(evt) => {
        if (evt.key === 'Enter') {
            const action = incrementByAmount(evt.target.value)
            dispatch(action)
        }
    }}
      />
    </div>
  )
}