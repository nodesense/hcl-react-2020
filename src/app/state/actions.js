
//actions.js

import {INCREMENT,
        DECREMENT,
        RESET} from './action-types';

// write your action creators
// action creaters are helper function
// create and return action objects

// es5
export function increment(value) {
    return { // return a new object
        type: INCREMENT,
        payload: {value: value} // OR {value}
    }
}
// es6/ single line, without return statement
export const decrement = (value) => ({ // new object
        type: DECREMENT, // type is keyword
        payload: {value} // payload is conventional
})
//no payload
export const reset = () => ({type: RESET})
