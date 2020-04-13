//sagas.js
// architectural pattern
// business transaction involves data that spans across multiple microservices
    // depenent transactions
    // workflow
    // handy, spawn, fork, sequential/parellel/all/wait all/reject all

import {takeEvery, put, call, 
        takeLatest, cancelled,
        all
        } from 'redux-saga/effects';

import * as ActionTypes from './action-types';
import * as actions from './actions';
import * as service from './service';

import axios from 'axios';


// takeEvery - is interceptor for the action, wait for action type
// when an action with type dispatched, it execute a callback function

// takeEvery 
// you make 10 calls to getBrands continousely, 
// takeEvery execute all the calls from begining to end


//takeLatest, same like takeEvery all aspects, except 
// if two same actions initiated, if the first is not completed
// then it cancel the first one and execute the second one which is latest
// takeLatest => 

// put - is a dispatcher

// call - is useful to make function call with arguments, generator specific call, linked yield

function helloWorld(arg1, arg2) {
    console.log('arg1', arg1)
    console.log('arg2', arg2);
}

function* incrementCounter(action) {
    console.log('Saga Action Callback', action);
    //business logic to increment action etc
    // dispatch action INCREMENT
    // yield put (actionObj) - synctacial
    yield put (actions.increment(1))
    yield call(helloWorld, "India", "Karnataka") 
}

// the saga function, this function should be loaded into middleware in store.js
export function* counterSaga() {
    console.log('for every request increment');
    // if REQUEST_INCREMENT dispatched, it calls printAction method automatically
    // pass the action object as function parameter
    yield takeEvery(ActionTypes.REQUEST_INCREMENT, incrementCounter)
    // you can add as many takeEvery here
}

//brandSaga.js

function* fetchBrands(action) {
    console.log('fetching brands', action);
    const source = axios.CancelToken.source();

    try {
        //loading state to true
        yield put(actions.initializeLoading(true));
        const brands = yield call(service.getBrands, {cancelToken: source.token} )// 1 argument for getBrands
        // initialize brand in store
        yield put(actions.initializeBrands(brands));
        // loading state to be false
        yield put(actions.initializeLoading(false));
    }catch(error) {
        console.log('error in execution', error)
    }
    finally {
        if (yield cancelled()) {
           console.log('*****cancelled the call, cancel pending brands apis calls');
           source.cancel('task/api cancelled');
        }
        console.log('finally block')
    }
}
 
// importe in store.js, should be part of saga.run(fetchBrandSaga)
export function* fetchBrandSaga() {
    // yield takeEvery(ActionTypes.REQUEST_BRANDS, fetchBrands)

    // cancel previous effect/tasks if any, execute only the last one effect
    // BEWARE: API calls not cancelled, we need workaround
    yield takeLatest(ActionTypes.REQUEST_BRANDS, fetchBrands)
}



function* fetchProducts(action) {
    console.log('fetching products', action);
    const source = axios.CancelToken.source();

    
    try {
        //loading state to true
        const products = yield call(service.getProducts, {cancelToken: source.token} )// 1 argument for getBrands
        // initialize brand in store
        yield put(actions.initializeProducts(products));
    }catch(error) {
        console.log('error in execution', error)
    }
    finally {
        if (yield cancelled()) {
           console.log('*****cancelled the call, cancel pending product apis calls');
           source.cancel('task/api cancelled');
        }
        console.log('finally block')
    }
}

function* fetchBrandsWithProducts(action) {
    //sync effect, complete fetching brands
    // yield call(fetchBrands, action) 
    // then complete fetching products
    // yield call(fetchProducts, action)

    //OR
    // use ALL/all to make a pareallel requests, it wait for all effects to complete
    yield all([
        call(fetchBrands, action),
        call(fetchProducts, action)
    ])
}

export function* fetchBrandsWithProductsSaga() {
    yield takeLatest(ActionTypes.REQUEST_BRANDS_AND_PRODUCTS, fetchBrandsWithProducts)
}