import React,{useReducer} from 'react'

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


    return (
        <div>
            <h3>count:- {count}</h3>
            <button onClick={()=>dispatch("increment")}>increment</button>
            <button onClick={()=>dispatch("decrement")}>decrement</button>
            <button onClick={()=>dispatch("reset")}>reset</button>
        </div>
    )
}

export default UseReduce