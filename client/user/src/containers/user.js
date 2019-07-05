import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import MainComponent from '../components/MainComponent';
import {getItems} from '../actions/actionCreators/getItems';
import {getFilteredItems} from '../actions/actionCreators/getFilteredItems';
import {page} from "../actions/page";
import {filter, amount} from "../actions/filter";
import {addToCart, inc, dec, deleteFromCart, cleanUp} from "../actions/cart";
import {loginCheck, loginUser} from '../actions/actionCreators/userCreator';
import {logout} from '../actions/user';
import {searchItems} from '../actions/actionCreators/getSearchedItems';

const mapStateToProps = state => {
    return {
        hasErrored: state.hasErrored,
        isLoading: state.isLoading,
        items: state.items,
        amount: state.amount,
        user: state.user,
        cart: state.cart,
        page: state.page,
        filter: state.filter,
        search: state.search
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
        dec,
        cleanUp,
        loginCheck,
        loginUser,
        logoutUser: logout,
        searchItems
    }, dispatch)
};

const User = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainComponent);

export default User;
