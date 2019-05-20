import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Admin from '../pages/Admin';
import itemsActions from '../actions/items';

const mapStateToProps = state => {
    return {
        loading: state.itemsReducer.loading
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        switchLoading: (loading) => itemsActions.Creators.loading(loading)
    }, dispatch)
};

const AdminContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Admin);

export default AdminContainer;
