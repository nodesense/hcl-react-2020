//components/Brands.js
import React from 'react';

export default class Brands extends React.Component {
    componentDidMount() {
        // dispatch thunk action (function) to load brands async

        this.props.fetchBrands();
    }

    componentWillUnmount() {
        // dispatch a message for saga, to cancel pendign calls brands
        this.props.leavePage(); 
    }
    
    render() {
        // receive from container
        const {brands, loading} = this.props;

        return (
            <div>
                <h2>Brands</h2>

                <button onClick={this.props.fetchBrandsWithSaga}>
                    Refresh With Saga
                </button>

                { loading && 
                    <h4>Loading....</h4>
                }

                { !loading && 
                    <ul>
                        {
                            brands.map ( brand => (
                                <li key={brand.id}>{brand.name}</li>
                            ))
                        }
                    </ul>
                }
            </div>
        )
    }
}