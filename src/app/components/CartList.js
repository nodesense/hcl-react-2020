// CartList.js

import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

 //TODO: PureComponent
 // PureComponent is derived from Component
 // PureComponent implements shouldComponentUpdate method
 // it shallow compares nextProps with current props
 // and shallow compare nextState with current state

 class CartList extends PureComponent {
    constructor(props) {
        super(props);
    }
     
    //TODO: shouldComponentUpdate
    
    render() {
        console.log("CartList Render");

        //destructuring
        // let items = this.props.items;
        const {items} = this.props;

        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO props items map with CartItem */ }

                    {
                        items.map( item => (
                            <CartItem item={item}
                                      key={item.id} 
                                      removeItem={this.props.removeItem}
                                      updateItem={this.props.updateItem}
                                      
                                      />
                        ))
                    }
                </tbody>
            </table>
            </div>
        )
    }
} 

CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}

export default CartList;