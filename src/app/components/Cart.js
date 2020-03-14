// Cart.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

class Cart extends Component {
    static defaultProps = {
    
    }

    static propTypes = {
    
    }
    constructor(props) {
        super(props);

        this.state = {
            items: [ 
            			{id: 1, name: 'P1', price: 100, qty: 5}
            	   ],
            amount: 0, // sum of all items price * qty
            count: 0, // sum of all items qty
            flag: true
        }
    }
    
    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        // functional setstate
        this.setState( prevState => ({
            items: [...prevState.items, item]
        }));

        // functional setstate
        this.setState(this.recalculate);
    }
    
    removeItem = (id) => {
        console.log('removeItem', id)
        //FIXME
    }

    updateItem = (id, qty) => {
        console.log('updateItem', id, qty)
        //FIXME
    }

    empty = () => {
        //TODO
        this.setState( () => ({ items: [] }) );
        this.setState(this.recalculate)
    }

    //dummy
    refresh = () => {
        // this.setState({
        //     flag: true
        // })

        // trigger the render
        this.forceUpdate(); // not recommended
    }

    // derived data from state
    recalculate(prevState) {
        let count = 0, 
            amount = 0;

        for (let item of prevState.items) {
            amount += item.price * item.qty;
            count += item.qty;
        }

        return {
            amount,
            count
        }
    }

    //TODO:
    //componentWillMount

    UNSAFE_componentWillMount() {
        this.setState(this.recalculate);
    }
    
    render() {
        console.log("Cart render")
        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={this.addItem}>
                Add Item
            </button>

            <button onClick={this.empty}>
                Empty
            </button>

            <button onClick={this.refresh}>
                Refresh
            </button>
            

            <CartList  items={this.state.items}  
                       removeItem={this.removeItem}
                       updateItem={this.updateItem}
            />

            <CartSummary amount={this.state.amount}
                         count = {this.state.count}
            />

            </div>
        )
    }
} 




export default Cart;