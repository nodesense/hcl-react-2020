import React from 'react';

// props are passed as first arg as an object
// within JSX, only expression are allowed, no STATEMENTS
const Footer = (props) => {
    // props.year = 2021; // wrong
    // props.branches.push('UK') // BAD PRACTICE

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
    </div>
)
    };

export default Footer;