    // containers/Brands.js
    import {connect} from 'react-redux';

    import Brands from '../components/Brands';
    import * as actions from '../state/actions';

    const mapStateToProps = (state) => {
        return {
            //TODO
        }
    }

    const mapDispatchToProps = (dispatch, getState) => {
        return {
            //TODO
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps) (Brands);