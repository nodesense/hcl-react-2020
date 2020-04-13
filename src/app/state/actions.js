
//actions.js

import {INCREMENT,
        DECREMENT,
        RESET} from './action-types';

import * as ActionTypes from './action-types';

import * as service from './service';


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


//brands

export const initializeBrands = (brands) => ({
    type: ActionTypes.INITIALIZE_BRANDS,
    payload: {brands}
})

export const initializeLoading = (loading) => ({
    type: ActionTypes.INITIALIZE_LOADING,
    payload: {loading}
})

export const initializeProducts = (products) => ({
    type: ActionTypes.INITIALIZE_PRODUCTS,
    payload: {products}
})

// TODO
// thunk - design pattern to implement async code in actions function

export const fetchBrands =  () => {
    // return a function as an action
    return async (dispatch, getState) => {
        // this function is called by thunk middleware/refer store.js
        // api calls/axios
        
        try {
            // set the loading flag, so that we can see loading ... text in ui
            const loadingAction = initializeLoading(true);
            dispatch(loadingAction);
            // or one line
            // dispatch(initializeLoading(true))

            // promise then part 
            const brands = await service.getBrands();

            // initialize brands in store
            dispatch(initializeBrands(brands));

            // turnoff loading flag
            dispatch(initializeLoading(false));
        }
        catch (error) {
            // called on exception, also on promise reject
        }
    }
}