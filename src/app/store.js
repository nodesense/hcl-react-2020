//store.js

import {createStore,
        combineReducers, 
        applyMiddleware} from 'redux';
        
import { createLogger } from 'redux-logger'

import {counterReducer} from './state/reducers/counterReducer';
import {cartReducer} from './state/reducers/cartReducer';
import {loggerMiddleware} from './state/middlewares/loggerMiddleware';
import {cacheMiddleware} from './state/middlewares/cacheMiddleware';

// NOT NEEDED, should be part of component/containers
import {increment} from './state/actions';
import {INCREMENT} from './state/action-types';



const logger = createLogger({});

console.log('redux starter');

// creat and configure the store, middlewares etc
// create store object {getState, dispatch, subscribe,...}


// counterReducer is invoked automaticall with
// undefiend state, with specifical action
// createStore always accept ONLY ONE reducer
// use combineReducers which will be useful to add/scale
// more reducers

// rootReducer, collection of reducers in key/value format
const rootReducer = combineReducers({
    //state name: reducer function for that state
    // state --> passed into corresponding reducer
    // one --> one
    counter: counterReducer,
    cartItems: cartReducer,
     // as many reducers...
})

// getState() ==> {counter: 0, cartItems: []}

// intitial state for store
const initalState = {
    counter: 100, // state name should be same as combinereducer key
    cartItems: { items: [ {id: 1}] }
    // if not assigned here, then it takes reducer function
}

// createStore(counterReducer)

const store = createStore(rootReducer, 
                          initalState,
                          applyMiddleware(logger,
                                          loggerMiddleware, 
                                          cacheMiddleware));

export default store;

// EXAMPLE ONLY, SHOULD NOT BE there in project

//store apis
console.log('STATE ', store.getState(), 'type ', typeof store.getState());

// manual action creation, 
const action = {
    type: INCREMENT,
    payload: {value: 5}
}
// dispatch will call reducer with last known state, action
console.log('DISPATCH', action)
// it calls all the reducers
// it can be 1 reducer or 100 or 1000 it calls all the reducers
// NEVER EVER try to optimize that
// every reducer has got default
store.dispatch(action);

console.log('STATE', store.getState());

// create action using action creator - helpers

store.dispatch(increment(2)); // easy
console.log('STATE', store.getState());
