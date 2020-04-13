//action-types.js
// constants, action type strings used in projects
// every action type should be unique in the application
// best pratice : MODULE/Action
// example/conventions
//                /counter/increment
//                [counter increment]
//                COUNTER.INCREMENT

export const INCREMENT = '[counter increment]';
export const DECREMENT = '[counter decrement]';
export const RESET     = '[counter reset]';

export const INITIALIZE_BRANDS = '[brands initialize]';
export const INITIALIZE_LOADING = '[data loading]';

// executed through saga
export const REQUEST_INCREMENT = '[counter requestIncrement]';