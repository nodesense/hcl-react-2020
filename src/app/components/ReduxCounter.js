import React from 'react';
import store from '../store';
import { increment, decrement, reset } from '../state/actions';

// this file is only example for subscribe, unsubcirbe
// container is best practice, explained later
//Throwaway code, due hardcode react/redux tight coupling

export class ReduxCounter extends React.Component {
    // no state, as we have redux to have state

    componentDidMount() {
        //todo: susbcribe

        // every time, we susbcribe, redux return a function
        // that function sould be used for unsubscribe
        this.unsubscribe = store.subscribe ( () => {
            // callback function called after every dispatch
            console.log('redux counter susbcribe ', store.getState());
            this.forceUpdate(); // trigger render
        })
    }

    componentWillUnmount() {
        //todo: unsubscribe
        this.unsubscribe(); // unsubscribe the above method
    }

    render() {
        // counter = store.getState().counter
        const {counter} = store.getState()
        return (
            <div>
                <h2>Redux Counter</h2>
                <p>Counter {counter}</p>
                <button onClick={ () => store.dispatch(increment(1))}>+1</button>
                <button onClick={ () => store.dispatch(decrement(1)) }>-1</button>
                <button onClick={ () => store.dispatch(reset()) }>Reset</button>
            </div>
        )
    }
}