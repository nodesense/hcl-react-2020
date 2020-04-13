# Get Started

```

git clone https://github.com/nodesense/hcl-react-2020

cd hcl-react-2020

npm install
```

# REACT

    props


    how to share data from parent to child?
        props 
            parent send props to child
                props contain the data

Issues:
    1. Deep hierarchy 
        parent level  1 [data] (func)
            level 2 (child) props - data, func
                level 3 (child) - props - data, func
                    level .... props -data, func
                            level 10 (child) - data - props -data, func() - calls parent

    how to share data from child to parent?
        callback to parent
          1. Issues 
              1. Deep hierarchy

    how to share data between siblings?

        React doesn't allow that, no way
        use the parent as mediator/communication
            sibling 1 update parent data
            parent pass that data to sibling 2

     how to share data between not related components

        React doesn't support

    how to share data between routes? page1 to page 2

        React doesn't support

    Component state on routed page, how to restore the state when user revisit the page

            - State is inside the component
            - When user nagivate to other page, the current component got destroyed
            - State also destroyed/ data also destroyed

    Business Logic
        React being Presentation/View Library - not ideal to write business logic inside
        Tight Coupling Business and Presentation Logic is not good


    REACT Projects, doesn't RECOMMEND using 
        MVC - Model View Componenent/Controller
        MVP - Model View Presenter
        MVVM - Model View ViewModel

    Solutions:
        FLUX - Architecture - White paper - how to build stateful React application
        It is not a Library, means you cannot find in npm

        Implementation for Flux architecure
            1. redux library
            2. mobx library

Functional Programming
    Redux - Predicatable


OOP vs Functioanl programming [Paradigm]

Issue wiht object origited programming

class Calc {
    // 1. hidden state
    int sum = 0;

    // why not predictable?
    // 2. impure function
        // given same input, doesn't give same output? 
    int add(int value) {
        // 3. mutation, the original value got changed
        sum += value;
        return sum;
    }
}

class Cart {
    //state
    items: ArrayList<CArtItem> = []
    add(item: CartItem) {
        this.items.push(item);; //mutable
    }
}

calc  = new Calc()

calc.add(10); // output 10
calc.add(10); // output 20
calc.add(20); // output 40

in real application, you 1000+ files, 10000000+ lines of code, 
100K objects in memory


calc.add(30);

calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(20); // output, not predictale?


Functional code  - predictable,
    - No state inside function, no STATIC
    - Pure function, given same input, get same output

function add(sum, value) {
    return sum + value;
}
OR 
function add(state = 0, value) {
    return state + value;
}

//redux reducer/flux callbacks
function calc(state = 0, action) {
    switch(action.type){ 
        case 'ADD':
                return state + action.payload.value;
        case 'SUB':
                return state - action.payload.value
    }
}

add(10, 20) ==> output 30
add(10, 20) ==> output 30 - predictable, given same input, we get same output


c:\users\krish\.npmrc

open the file

http-proxy
https-proxy

npm edit config



-------

# Install redux in the application

npm install redux



# Redux

action --> event ==> object { type: 'INCR', payload }
            describe what action can be performned
            not a implementation

how to create an action?
    using action creators - helpers functions
    create and return an action object

reducer
    pure function - stateless, given same input, we get same output
    actual implementation of action 
    logic/data manipulation
    implement action/event
    immutable

    reducer(state, action) { 
        return new state
    }

    who is callign reducer function?
        store.dispatch (action)

    where is the state coming from?
        state is passed form dispatch function

    how dispatch got the state?
        store has internal closure variabel called currentState

how to scale to more reducers?
    createStore accept only one reducer.

    // aggregation of multiple states together
    combineReducers({
        counter: counterReducer
        cartITems: cartReducer
    })

    now who will call counterReducer?

    it will be called by combineReducers function internally


middleware
    interceptors
    invoved when do we dispatch
    called before calling reducers

function createStore(reducerFunc) {
    let state = undefined; // closure/inside function

    let currentReducer = reducerFunc
    function dispatch(action) {
        state = currentReducer(state, action)
    }

    function getState() {
        return state;
    }
    return {
        dispatch: dispatch,
        getState: getStat
    }
}

const store = createStore(coutnerReducer);


---


npm install redux-logger


# React Binding of Redux [ReduxCoutner.js]
    React - view
    Redux  - state

Hardcore way, importing Redux store into react code - tight coupling
    affect test cases while testing react code
    we need to mock store, dispatch, getstate

    x lines of code ==> test (10 x lines of code)

Not to tight couple react and redux 
    test react separately
    test redux separately



# Loose Coupling

dont write this code

import React from 'react';

// Valid component
// Pure View/Presentation Component
// This is REACT is, View libray
**
export function ReduxCounter(props) {
        //destructure
        const {counter, increment, decrement, reset} = props;  
        return (
            <div>
                <h2>Redux Counter</h2>
                <p>Counter {counter}</p>
                <button onClick={ () =>  increment(1)}>+1</button>
                <button onClick={ () =>  decrement(1) }>-1</button>
                <button onClick={ () => reset() }>Reset</button>
            </div>
        )
    }
**

how to I use this ReduxCounter functional component

JUST THINK

You got a parent component,
    automatically/automagically somehow
        get the counter from redux
        get increment/decrement/reset actions from redux
        susbcribe/unusbcribe

        pass them as props to ReduxCounter

class MagicComponent { -- parent component/container higher order component
    render () {
        <ReduxCounter coutner={from redux}
                      increment={from redux action}
                      decrement= {from redux action}
                      reset={from redux action}
    }
}


# React-Redux
    -- 

    npm install react-redux
    

# Redux Thunk

    Motivation: 

    Redux is a syncronous library
        dispatch [sync]
            all reducers called [sync]
            store updated [sync]
            all the susbcribers called [sync]
        
        dispatch come out


# API Calls for Data
    older day MVC --> Service classes [DAQ, calls DB methods]
    View doesn't call DB/Other services in general

    In React??
        Want to make API call?
            Where to call?
                React
                    -- General issue, view logic calling apis [not liking it]

                Redux
                    -- Sync
                    -- reducer should be sync ,means no asnync call inside reducer
                    -- where else to implement the API call?

Lots of Solutions exists through middlewares to support async
    Middlewares [every action is passed through middleware]
            1. redux-thunk [same redux/react-redux author]
            2. redux-saga
            3. redux-observable


# redux-thunk 

    npm install redux-thunk

    Implement Async functionalities using middlware, write the logics
    in the action creator functions
        normal action creator? is a function that create and return action OBJECT.

        Thunk?
        is a action creator function, that returns a FUNCTION as a ACTION
        component will dispatch a function instead of object


# Files Thunk

1. components/Brands.js
2. containters/Brands.js
3. state/reducers/brandsReducer.js
4. updated action-types.js
5. updated actions.js
6. updated Header.js
7. updated App.js
8. updated store.js
   


# SAGA

    npm install  redux-saga
