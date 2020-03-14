import React from 'react';

import {Redirect}  from 'react-router-dom';

class PrivateRoute extends React.Component {
    render() {
        // ProductList is Component
        console.log('PrivateRoute render', this.props);
        // destructing
        // component  = this.props.component;
        // ...props - rest operators/object type
        // {startValue: 100, ....}/{}
        
        //const  {component, ...props} = this.props;
        // const Component = component;
        // OR
        const {component: Component, ...props} = this.props;

        const token = window.localStorage.getItem('token');

        return (
            token? <Component {...props} />: <Redirect to="/login" />
        )
    }
}

// decorator function
function withProtectedRoute(component) {
    // return a functional component
    return function(props) {
        console.log('at wrapper component props', props);
        return (
            <PrivateRoute component={component} {...props} />
        )
    }
}

export default withProtectedRoute;

// <PrivateRoute component={ProductList} />