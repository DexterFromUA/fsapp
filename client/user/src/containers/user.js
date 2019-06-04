import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import MainComponent from '../components/MainComponent';
import {getItems} from '../actions/actionCreators/getItems';
import {getFilteredItems} from '../actions/actionCreators/getFilteredItems';
import {amount} from "../actions/amount";

const mapStateToProps = state => {
    return {
        hasErrored: state.hasErrored,
        isLoading: state.isLoading,
        items: state.items,
        amount: state.amount,
        user: state.user,
        cart: state.cart
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getItems,
        getFilteredItems,
        setAmount: amount
    }, dispatch)
};

const User = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainComponent);

export default User;
