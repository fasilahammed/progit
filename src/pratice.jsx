import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'

const initial = {
    firstCount: 0
}
const rdceFn = (state, action) => {
    switch (action.type) {
        case "increment":
            return { firstCount: state.firstCount + action.value};
        case "decrement":
            return { firstCount: state.firstCount - action.value};
        case "reset":
            return initial;
        default:
            return state;
    }

}

function Pratice() {
    const [count, dispatch] = useReducer(rdceFn, initial)

    return (
        <div>
            <h2>count:- {count.firstCount}</h2>
            <button onClick={() => dispatch({type: "increment" , value:1})}>+</button>
            <button onClick={() => dispatch({type: "decrement" , value:1})}>-</button>
            <button onClick={() => dispatch({type: "increment" , value:5})}>+5</button>
            <button onClick={() => dispatch({type: "decrement" , value:5})}>-5</button>
            <button onClick={() => dispatch({type: "reset"})}>reset</button>
        </div>
    )
}

export default Pratice