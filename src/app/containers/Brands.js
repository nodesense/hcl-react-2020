    // containers/Brands.js
    import {connect} from 'react-redux';

    import Brands from '../components/Brands';
    import * as actions from '../state/actions';
    import {bindActionCreators} from 'redux';

    const mapStateToProps = (state) => {
        return {
            brands: state.brandState.brands,
            loading: state.brandState.loading
        }
    }

    const mapDispatchToProps = (dispatch, getState) => {
        return {
            // automatically dispatch the function as action
            fetchBrands: bindActionCreators(actions.fetchBrands, dispatch)
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps) (Brands);