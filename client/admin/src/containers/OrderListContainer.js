import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import OrderList from '../components/OrderList';

const mapStateToProps = state => {
    return {
        st: state
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({}, dispatch)
};

const OrderListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderList);

export default OrderListContainer;
