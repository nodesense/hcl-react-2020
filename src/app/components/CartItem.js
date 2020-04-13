// CartItem.js
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import ThemeContext from './ThemeContext';
import LanguageContext from './LanguageContext';

class CartItem extends PureComponent {

    // class component should use contextType
    static contextType = ThemeContext; // try to avoid, use Consumer
 
    // with above, this.context

    constructor(props) {
        super(props);
    }

    //TODO: Ref
    //TODO: componentWillMount
    //TODO: state from props, qty
   
    render() {
        let {item} = this.props;

        console.log("CartItem Render ", item.id);
        console.log('Theme context is', this.context);

        return (
            <tr>
                <td>{item.name} </td>
                <td>{item.price}</td>
                <td><em>{item.qty}</em></td>
                <td><strong>{item.price * item.qty}</strong></td>
                <td> 
                <button className={this.context} onClick={() => this.props.updateItem(item.id, item.qty + 1) }>
                        +1
                </button>    

                <button className={this.context} onClick={ () => this.props.updateItem(item.id, item.qty - 1)  }>
                        -1
                </button>    
                <button className={this.context} onClick={ () => this.props.removeItem(item.id) }>
                        X
                </button>
                <LanguageContext.Consumer>
                    {
                        (langDict) => (
                            <ThemeContext.Consumer>
                                {
                                    (themeName) => (
                                        <button className={themeName}>
                                            {langDict.contact_label}
                                        </button>
                                    )
                                }
                            </ThemeContext.Consumer>
                        )
                    }
                
                </LanguageContext.Consumer>
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