//Brands.js
import React from 'react';

export default class Brands extends React.Component {
    componentDidMount() {
        //TODO
    }

    render() {
        //TODO: take from props
        const brands = [];

        return (
            <div>
                <h2>Brands</h2>

                <ul>
                    {
                        brands.map ( brand => (
                            <li key={brand.id}>{brand.name}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}