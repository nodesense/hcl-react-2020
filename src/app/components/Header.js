import React from 'react';

import {NavLink} from 'react-router-dom';

//es6 function
const Header = (props) => {
    return (
        <div>
            {props.children}

            <NavLink className="button"
                     to="/"
                     exact
                     activeClassName="success">
                        Home
            </NavLink>

            <NavLink className="button"
                     to="/products"
                     activeClassName="success">
                        Products
            </NavLink>

            <NavLink className="button"
                     to="/cart"
                     activeClassName="success">
                        Cart
            </NavLink>


            <NavLink className="button"
                     to="/checkout"
                     activeClassName="success">
                        Checkout
            </NavLink>

            <NavLink className="button"
                     to="/counter"
                     activeClassName="success">
                        Counter
            </NavLink>


            <NavLink className="button"
                     to="/react-counter"
                     activeClassName="success">
                        React Counter
            </NavLink>


            <NavLink className="button"
                     to="/func-counter"
                     activeClassName="success">
                        Func Counter
            </NavLink>



            <NavLink className="button"
                     to="/about"
                     activeClassName="success">
                        About
            </NavLink>

            <hr />
        </div>
    )
}

export default Header;