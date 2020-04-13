//brandsReducer.js
import * as ActionTypes from '../action-types';

const INTIAL_STATE = {
    brands: [],
    products: [], // against single responsiblity
    loading: false
}

export const brandsReducer = (state = INTIAL_STATE, action) => {
    console.log('brandsReducer', state, action)
    switch(action.type) {
        case ActionTypes.INITIALIZE_BRANDS: 
            // update the state with brands from payloads
            return {...state, brands: action.payload.brands}
        case ActionTypes.INITIALIZE_LOADING: 
            return {...state, loading: action.payload.loading}

        case ActionTypes.INITIALIZE_PRODUCTS: 
            return {...state, products: action.payload.products}

        default: return state;
    }
}