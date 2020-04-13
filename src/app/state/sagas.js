//sagas.js
// architectural pattern
// business transaction involves data that spans across multiple microservices
    // depenent transactions
    // workflow
    // handy, spawn, fork, sequential/parellel/all/wait all/reject all

import {takeEvery, put } from 'redux-saga/effects';

import * as ActionTypes from './action-types';
import * as actions from './actions';

// takeEvery - is interceptor for the action, wait for action type
// when an action with type dispatched, it execute a callback function

// put - is a dispatcher

function* incrementCounter(action) {
    console.log('Saga Action Callback', action);

    //business logic to increment action etc

    // dispatch action INCREMENT
    // yield put (actionObj) - synctacial

    yield put (actions.increment(1))
}

// the saga function, this function should be loaded into middleware in store.js
export function* counterSaga() {
    console.log('for every request increment');
    // if REQUEST_INCREMENT dispatched, it calls printAction method automatically
    // pass the action object as function parameter
    yield takeEvery(ActionTypes.REQUEST_INCREMENT, incrementCounter)
}