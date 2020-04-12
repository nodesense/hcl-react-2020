//FuncCounterContainer.js
// but you can exclude Container suffix
// Bridge to connect FuncCounter and Redux Store
// avoid writing react code

// compose many parts into a container component
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//actions.increment, actions.decrement, actions.reset
import * as actions from '../state/actions';

import FuncCounter from '../components/FuncCounter';

// no need to import store, store is exposed as context to container
// Provider, index.js file

// take the information needed from redux state and pass to 
// component as props
// FuncCounter needs counter props
// state = store.getState() ==> {counter: 100, cartItems: []}
// when this function is invoked?
//  1. during initial time
//  2. after every dispatch when the state got changed
export const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        // amount:  state.cart.amount
    }
}

// returns  functions callback, which will be passed as props to component
// args
//   dispatch = store.dispatch
//   getState = store.getState
// who call this method?
// called by container component, get the props which are actions
// called only once per component instance created
export const mapDispatchToProps = (dispatch, getState) => {
    return {
        // called by react component click events
        /*
        increment: function(value) {
            console.log('invoking increment ')
            //actions.increment is action creators from actions.js
            dispatch(actions.increment(value))
        },
        decrement: (value) => {
            console.log('invoking decrement action ')
            dispatch(actions.decrement(value))
        },
        reset: () => {
            console.log('invoking reset action ')
            dispatch(actions.reset());
        }*/

        // replace above with bindActionCreators
        increment: bindActionCreators(actions.increment, dispatch),
        decrement: bindActionCreators(actions.decrement, dispatch),
        reset: bindActionCreators(actions.reset, dispatch),

        // how to further reduce the code here
        // wrap all the functions inside actions [increment, decrement, reset]
        // dispatchers {increment, decrement, reset all binded to dispatch}
        dispatchers: bindActionCreators(actions, dispatch)
    }
}

// lets create a container
// which is a higher order component

// decorator function, which is higher order function

const decoratorFunc = connect(mapStateToProps, 
                              mapDispatchToProps);

// React Component, Container component
// put together func comp, mapStateToProps, mapDispatchToProps
// Container Susbcribe and unsusbcribe from store
// Pure Component by default
const FuncCounterContainer = decoratorFunc(FuncCounter);

export default FuncCounterContainer;

// one line in production
//export default connect(mapStateToProps, mapDispatchToProps)(FuncCounterContainer)