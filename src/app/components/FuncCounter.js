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
            <h2>Func Counter</h2>
            <p>Counter {counter}</p>

            <button onClick={ () =>  increment(1)}>+1</button>
            <button onClick={ () =>  decrement(1) }>-1</button>
            <button onClick={ () => reset() }>Reset</button>

            <button onClick= { () => props.requestIncrement() }> Request Incr Saga</button>

            <p>OR </p>


    <button onClick={ () =>  props.dispatchers.increment(1)}>+1</button>
    <button onClick={ () =>   props.dispatchers.decrement(1) }>-1</button>
    <button onClick={ () =>  props.dispatchers.reset() }>Reset</button>


        </div>
    )
}

export default FuncCounter;