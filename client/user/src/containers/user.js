import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import MainComponent from '../components/MainComponent';
import {getItems} from '../actions/actionCreators/getItems';
import {getFilteredItems} from '../actions/actionCreators/getFilteredItems';
import {amount} from "../actions/amount";
import {page} from "../actions/page";
import filter from "../actions/filter";
import {addToCart, inc, dec, deleteFromCart} from "../actions/cart";

const mapStateToProps = state => {
    return {
        hasErrored: state.hasErrored,
        isLoading: state.isLoading,
        items: state.items,
        amount: state.amount,
        user: state.user,
        cart: state.cart,
        page: state.page,
        filter: state.filter
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getItems,
        getFilteredItems,
        setAmount: amount,
        changePage: page,
        setFilter: filter,
        addToCart,
        inc,
        deleteFromCart,
        dec
    }, dispatch)
};

const User = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainComponent);

export default User;
