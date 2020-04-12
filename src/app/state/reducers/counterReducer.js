//counterReducer.js

import {INCREMENT,
        DECREMENT,
        RESET} from '../action-types';

//reducers
//TODO: import all action types here


// reducer, pure function
// called by dispatch method, two arguments
// state - inside store
// action - via dispatch(active)
const INITIAL_STATE = 0; // state can be any type/array/string/number/boolean/object
// very first time, state is undefined, we initialize with 0
//es5
export function counterReducer(state = INITIAL_STATE, 
                               action) {
    console.log('counterReducer called', state, action);
    switch(action.type) {
        case INCREMENT: 
                return state + action.payload.value;
        case DECREMENT:
                return state - action.payload.value;
        case RESET:
                return INITIAL_STATE
        default:
                return state;
    }
}