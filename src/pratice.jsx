import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'
import UseReduce from './useReducer'

const initial = {
    firstCount: 0,
    secoundCount:10
}
const rdceFn = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state,firstCount: state.firstCount + action.value};
        case "decrement":
            return { ...state,firstCount: state.firstCount - action.value};
        case "increment2":
            return { ...state,secoundCount: state.secoundCount + action.value};
        case "decrement2":
            return {...state, secoundCount: state.secoundCount - action.value};
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
            <h2>count:- {count.secoundCount}</h2>

            <button onClick={() => dispatch({type: "increment" , value:1})}>+</button>
            <button onClick={() => dispatch({type: "decrement" , value:1})}>-</button>
            <button onClick={() => dispatch({type: "increment" , value:5})}>+5</button>
            <button onClick={() => dispatch({type: "decrement" , value:5})}>-5</button>

            <button onClick={() => dispatch({type: "increment2" , value:1})}>10+</button>
            <button onClick={() => dispatch({type: "decrement2" , value:1})}>10</button>

            <button onClick={() => dispatch({type: "reset"})}>reset</button>
             <p>aflah</p>
            <UseReduce  />
        </div>
    )
}

export default Pratice