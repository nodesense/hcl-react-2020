// CartItem.js
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class CartItem extends PureComponent {
    constructor(props) {
        super(props);
    }

    //TODO: Ref
    //TODO: componentWillMount
    //TODO: state from props, qty
   
    render() {
        let {item} = this.props;

        console.log("CartItem Render ", item.id);

        return (
            <tr>
                <td>{item.name} </td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{item.price * item.qty}</td>
                <td> 
                <button onClick={() => this.props.updateItem(item.id, item.qty + 1) }>
                        +1
                </button>    

                <button onClick={ () => this.props.updateItem(item.id, item.qty - 1)  }>
                        -1
                </button>    
                <button onClick={ () => this.props.removeItem(item.id) }>
                        X
                </button>
                </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}

export default CartItem;