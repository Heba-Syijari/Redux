import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment ,incrementByAmount } from '../redux tookit/counterSlice'
// import { decrementAction, incrementAction, incrementActionV } from '../redux/actions/counterActions';

// export default function Counter() {
//     //const [count , setcount] =useState(0);
//     const {count} = useSelector(state => state.counter)
//     const dispatch =useDispatch();
//     const inc = () => {
//        // setcount(count+1)
//         incrementAction(dispatch);
//     }
//     const inc5 = (v1) => {
//        // setcount(count+1)
//         incrementActionV(v1, dispatch);
//     }
//     const dec = () => {
//       //  setcount(count-1)
//         decrementAction(dispatch);
        
//     }
//     return (
//         <div>
//             <p>{count}</p>
//             <button onClick={inc}>increment</button> 
//             <button onClick={()=> inc5(3)}>increment value</button> 
//             <button onClick={dec}>decrement</button> 
//         </div>
//     )
// }

export default function Counter() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <div>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <span>{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
            <button
                aria-label="incrementByAmount"
                onClick={() => dispatch(incrementByAmount(5))}
            >
                incrementByAmount
            </button>
            </div>
        </div>
    )
}
