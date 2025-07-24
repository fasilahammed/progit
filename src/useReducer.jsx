import React, { useReducer } from 'react'
import UseContext from './useContext';

let initial = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initial

        default:
            return state

    }

}

function UseReduce() {
    const [count, dispatch] = useReducer(reducer, initial)
    const [count2, dispatch2] = useReducer(reducer, initial)


    return (
        <div>
            <h3>count:- {count}</h3>
            <button onClick={() => dispatch("increment")}>increment</button>
            <button onClick={() => dispatch("decrement")}>decrement</button>
            <div>
                <h3>count:- {count2}</h3>
                <button onClick={() => dispatch2("increment")}>increment</button>
                <button onClick={() => dispatch2("decrement")}>decrement</button>
                <button onClick={() => dispatch2("reset")}>reset</button>
            </div>
           <p>rashi</p>
            <UseContext  />
        </div>
    )
}

export default UseReduce