//sagas.js
// architectural pattern
// business transaction involves data that spans across multiple microservices
    // depenent transactions
    // workflow
    // handy, spawn, fork, sequential/parellel/all/wait all/reject all

import {takeEvery, put, call } from 'redux-saga/effects';

import * as ActionTypes from './action-types';
import * as actions from './actions';
import * as service from './service';

// takeEvery - is interceptor for the action, wait for action type
// when an action with type dispatched, it execute a callback function

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

    //loading state to true
    yield put(actions.initializeLoading(true));
    const brands = yield call(service.getBrands)// no argument for getBrands
    // initialize brand in store
    yield put(actions.initializeBrands(brands));
    // loading state to be false
    yield put(actions.initializeLoading(false));
}
 
// importe in store.js, should be part of saga.run(fetchBrandSaga)
export function* fetchBrandSaga() {
    yield takeEvery(ActionTypes.REQUEST_BRANDS, fetchBrands)
}

