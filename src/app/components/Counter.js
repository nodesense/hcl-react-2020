import React from 'react';

import PropTypes from 'prop-types';

// class component
class Counter extends React.Component {
    //ES.next/stage-2, allow static variable inside class

    static defaultProps = {
        startValue: 0
    }

    static propTypes = {
        startValue: PropTypes.number
    }

    // called once per instance
    // props are passed as first argument
    constructor(props) {
        super(props); //good practice
        // props in constructor useful for initialize component state
        console.log('Counter cons', this.props)

        // state/key word
        // only for class component
        // initialize the state, type of object
        // key: value
        // mutable using setState
        this.state = {
            flag: true,
            counter: this.props.startValue
        }
        // ES5, using bind
        // bind takes object and function, bind them
        // called bound method
        // const func = this.increment;
        //const bound = func.bind(this);
        //this.increment = bound;
        this.increment = this.increment.bind(this);
    }

    // resolve this using bind method
    increment() {
        console.log("increment before ", this.state);
        // BAD APPROACH this.state.counter++; //WRONG WAY
        // new state as arg, then later merge with current state
        // trigger the render to be called
        // async func
        this.setState ({
            counter: this.state.counter + 1
        }, () => {
            // callback, called after render, setState become current state
            console.log('callback', this.state)
            this.setState ({
                counter: this.state.counter + 1
            });
        })
         
        console.log("increment after ", this.state);
    }

    // ES6 : using arrow func in render function
    
    decrement() {
        console.log('decrement before ',this.state);
        // -1 and again -1
        // functional set State/ recommended approach
        this.setState( (prevState) => {
            console.log('PrevState', prevState);
            // return new state
            return {
                counter: prevState.counter - 1
            }
        })

        this.setState( (prevState) => {
            console.log('PrevState 2:  ', prevState);
            // return new state
            return {
                counter: prevState.counter - 1
            }
        })
    }

    // ES.NEXT
    // recommended
    multiply = () => {
        console.log('multiply before ', this.state);
    }

    //must have
    // called by react
    // create and return virtual dom
    render() {
        console.log('Counter render', this.state);
        return (
            <div>
                <h2>Counter</h2>
                <p>Start Value {this.props.startValue}</p>
                <p>Counter {this.state.counter}</p>

                <button onClick={this.increment}>
                    +1
                </button>

                {/* creating a function inside another func */}
                <button onClick={ () => this.decrement() }>
                    -1
                </button>

                <button onClick={this.multiply }>
                    * 2
                </button>

            </div>
        )
    }
}

export default Counter;