import React from 'react';

import PropTypes from 'prop-types';

// props are passed as first arg as an object
// within JSX, only expression are allowed, no STATEMENTS
const Footer = (props) => {
    // props.year = 2021; // error, setter wrong
    // props.branches.push('UK') // BAD PRACTICE
    console.log('footer props', props);
    return (
    <div>
        <hr />
        <p>Copyrights @{props.companyName}, {props.year}</p>
        <ul>
        {
            props.branches.map (name => (
                <li key={name}>{name}</li>
            ))
        }
        </ul>

        {props.children}
    </div>
)
    };

Footer.propTypes = {
    // to validate data type
    // required/option properties
    year: PropTypes.number, //optional
    companyName: PropTypes.string.isRequired, //mandatory
    branches: PropTypes.array.isRequired
}

// used if parent doens't pass props
// { propertName: value }
Footer.defaultProps = {
    year: 2020, // used if parent component doesn't pass data
}

export default Footer;