    // containers/Brands.js
    import {connect} from 'react-redux';

    import Brands from '../components/Brands';
    import * as actions from '../state/actions';
    import {bindActionCreators} from 'redux';
    import * as ActionTypes from '../state/action-types';

    const mapStateToProps = (state) => {
        return {
            brands: state.brandState.brands,
            loading: state.brandState.loading
        }
    }

    const mapDispatchToProps = (dispatch, getState) => {
        return {
            // automatically dispatch the function as action
            fetchBrands: bindActionCreators(actions.fetchBrands, dispatch),
            fetchBrandsWithSaga: function () {
                // intercepted by saga, fetch brands
                // dispatch({type: ActionTypes.REQUEST_BRANDS});

                dispatch({type:  ActionTypes.REQUEST_BRANDS_AND_PRODUCTS})
            },

            leavePage: () => {
                dispatch({type:  ActionTypes.LEAVE_BRANDS_PAGE})
            }
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps) (Brands);