import Alert from 'react-s-alert';

import {loadingOrders, errorOrders, getOrders, changeStatus} from '../orders';

export const fetchOrders = () => {
    return dispatch => {
        dispatch(loadingOrders(true));

        fetch(`/api/orders`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Error while getting orders')
                }

                return res.json();
            })
            .then(res => dispatch(getOrders(res)))
            .catch(e => {
                console.log(e)
                dispatch(errorOrders(e));
                Alert.error(e)
            })
            .finally(() => dispatch(loadingOrders(false)))
    }
};

export const changeOrderStatus = (id, status) => {
    return dispatch => {
        fetch(`/api/status/change/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: status
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Error while changing order status')
                }

                dispatch(changeStatus(id, status));
                Alert.success('Status changed');
                return res;
            })
            .catch(e => {
                dispatch(errorOrders(e));
                Alert.error(e)
            })
    }
};
