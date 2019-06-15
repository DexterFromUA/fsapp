import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import OrderList from '../components/OrderList';
import {changeOrderStatus, fetchOrders} from '../actions/actionCreators/ordersCreator';

const mapStateToProps = state => {
    return {
        loadingOrders: state.ordersState.loadingOrders,
        errorOrders: state.ordersState.errorOrders,
        orders: state.ordersState.orders
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getOrders: fetchOrders,
        changeOrderStatus
    }, dispatch)
};

const OrderListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderList);

export default OrderListContainer;
