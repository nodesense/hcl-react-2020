// FuncCounter.js
import React from 'react';

// clean, no redux code inside
// dump component
// view component
// presentation component
function FuncCounter(props) {
    //destructure
    const {counter, increment, decrement, reset} = props;  
    return (
        <div>
            <h2>Redux Counter</h2>
            <p>Counter {counter}</p>
            <button onClick={ () =>  increment(1)}>+1</button>
            <button onClick={ () =>  decrement(1) }>-1</button>
            <button onClick={ () => reset() }>Reset</button>
        </div>
    )
}

export default FuncCounter;