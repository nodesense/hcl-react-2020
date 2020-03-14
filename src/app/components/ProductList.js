import React from 'react';
import axios from 'axios';
import config from '../config';

import withProtectedRoute from './withProtectedRoute';


class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false, 
            products: []
        }
    }

    componentDidMount() {
        console.log('api call start');
        this.source = axios.CancelToken.source();

        axios.get(`${config.apiEndPoint}/api/products`, 
                     { cancelToken: this.source.token})
        .then ( response => {
            console.log('status', response.status)
            console.log('data', response.data);
            this.setState({
                products: response.data
            })
        })
        .catch(function (thrown) {
            if (axios.isCancel(thrown)) {
              console.log('Request canceled', thrown.message);
            } else {
              // handle error
            }
          })
    }

    componentWillUnmount() {
        // abort connection if not completed
        this.source.cancel("Cancel products call");
    }

    render() {
        console.log('productlist render', this.props)
        return (
            <div>
                <h2>Products</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Year</th>
                    </tr>
                    </thead>
                <tbody>
    {
        this.state.products.map( product => (
            <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.year}</td>
            </tr>
        ))
    }
    </tbody>
                </table>
            </div>
        )
    }
}

// export default ProductList;

// container/wrapper component
// returns a component, that contains PRivateRoute, 
    // within PrivateRoute, ProductList shall be rendered 
const ProductWrapper = withProtectedRoute(ProductList)
export default ProductWrapper;
