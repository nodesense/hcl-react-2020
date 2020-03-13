import React from 'react';

//es6 function
const Header = (props) => {
    return (
        <div>
            {props.children}
            <hr />
        </div>
    )
}

export default Header;