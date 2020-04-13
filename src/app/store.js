//store.js

import {createStore,
        combineReducers, 
        applyMiddleware, 
        bindActionCreators } from 'redux';
        
import { createLogger } from 'redux-logger'

import {counterReducer} from './state/reducers/counterReducer';
import {cartReducer} from './state/reducers/cartReducer';
import {loggerMiddleware} from './state/middlewares/loggerMiddleware';
import {cacheMiddleware} from './state/middlewares/cacheMiddleware';

import {brandsReducer} from './state/reducers/brandsReducer';


// NOT NEEDED, should be part of component/containers
import {increment} from './state/actions';
import {INCREMENT} from './state/action-types';

//middleware, should be part of applyMiddleware
import thunk from 'redux-thunk';



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
    brandState: brandsReducer
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

// example thunk.code middleware

// const thunkExampleCode = store => next => action => {
//     console.log('thunkExampleCode middleware', action)
//     // if action is function, stop it here, then call the function
//     if (typeof action === 'function') {
//         return action(store.dispatch, store.getState);
//     }
    
//     // else forward to next middleware/reducer
//     return next(action);
// }

const store = createStore(rootReducer, 
                          initalState,
                          applyMiddleware(thunk,
                                          logger,
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

let a = increment(2); // 107
store.dispatch(a); // easy

// bindActionCreators, bind the dispatch method and action creators
// returns bound method, which can invoke dispatch automatically

// create a wrapper function, which can accept parameter
// pass to incrment function as arg
// get the action as output from increment 
// dispatch to store
const incrementDispatcher = bindActionCreators(increment, store.dispatch);

// 110
incrementDispatcher(3); //automatically dispatch increment action

console.log('STATE', store.getState());

// action creator
// thunk: return a function as action instead object as action

//actions.js
// implement async logic

// add middleware that intercept func actions
// then invoke those function actions
// doesn't forward the function objects to reducer
function asyncActionCreator() {
    // this function is called by thunk middleware
    return function(dispatch, getState) {
        console.log('my async code is here');
        setTimeout( () => {
            console.log('async code');
             dispatch(increment(200));
        }, 5000);
    }
}
// function as an action
const aFunc = asyncActionCreator();
// dispatch a function/action to reducers
store.dispatch(aFunc);