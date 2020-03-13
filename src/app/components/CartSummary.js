// CartSummary.js
import React, {Component} from "react";
import PropTypes from "prop-types";

//TODO: PropTypes

// TODO: PureComponent
 class CartSummary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            discount: 0,
            grandTotal: 0
        }
    }
 
    //TODO: componentWillMount
    //TODO: componentWillReceiveProps, recalculate 
 
    //TODO: shouldComponentUpdate

    recalculate(props) {
        let discount = 0;

        if (props.count >= 10) {
            discount = 20;
        } else if (props.count >= 5) {
            discount = 10;
        }

        let grandTotal = props.amount - (props.amount * discount / 100);

        this.setState({
            discount, 
            grandTotal
        })
    }
     
    UNSAFE_componentWillMount() {
        this.recalculate(this.props);
    }

    // update cycle method
    // invoked when parent render called on update cycle
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps next', nextProps);
        console.log('willreceive this.props ', this.props);
        this.recalculate(nextProps);
    }

    // update cycle method
    // return true - render called
    // return false - render won't be called
    // when it is called?
    // whenever parent render called on update cycle
    // whenever this.setState called on update cycle
    shouldComponentUpdate(nextProps, nextState) {
    console.log('summary should update ');
    return this.props.amount !== nextProps.amount ||
            this.props.count !== nextProps.count ||
            this.state.grandTotal !== nextState.grandTotal ||
            this.state.discount !== nextState.discount;
    }
    
    render() {
        console.log("CartSummary Render");
        return (
            <div> 
            <h2>Cart Summary</h2>
            <p> Amount : {this.props.amount} </p>
            <p> Count : {this.props.count} </p>

            <p> Discount: {this.state.discount} %</p>
            <p> Grand Total: {this.state.grandTotal} </p>
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}

export default CartSummary;