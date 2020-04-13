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

export const INITIALIZE_PRODUCTS = '[products initialize]';

//saga
export const REQUEST_BRANDS_AND_PRODUCTS = '[products requestProductsAndBrands]'
export const REQUEST_PRODUCTS = '[products requestProducts]'

export const LEAVE_BRANDS_PAGE = '[brands leaveBrandPage]';

// executed through saga
export const REQUEST_INCREMENT = '[counter requestIncrement]';

// executed through saga
export const REQUEST_BRANDS = '[brands requestBrands]';
