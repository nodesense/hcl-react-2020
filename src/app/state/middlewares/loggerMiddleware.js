
//loggerMiddleware.js
// log every action dispatched in the console
// es5
export function loggerMiddleware(store) {
    // called once during store creation
    // next is a function to forward action to next middlewares/reducers
    return function(next) {
        // called once during store creation
        // action is passed via dispatch
        return function(action) {
            // called once during every dispatch
            console.log('LOGGER ', action);
            // forward to next middleware/reducers
            const result = next(action);
            // result is returned by dispatcher
            // in general the same action object
            console.log('result', result)
            return result; 
        }
    }
}

// one line equalant of above middleware
// const loggerMiddlware = store => next => action => next(action)

