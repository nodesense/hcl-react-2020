// cacheMiddleware.js
// es6

export const cacheMiddleware = (store) => next => action => {
    console.log('cacheMiddlware', action);
    const result = next(action)
    if (typeof action === 'object' && action.type.indexOf('[counter') >= 0) {
        const state = store.getState(); // {counter: 0, cartItems: {}}
        // store only counter to local storage
        window.localStorage.setItem('counter', state.counter);
    }

    return result;
}
