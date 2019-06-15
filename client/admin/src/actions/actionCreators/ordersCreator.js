import {loadingOrders, errorOrders, getOrders, changeStatus} from '../orders';

export const fetchOrders = () => {
    return dispatch => {
        dispatch(loadingOrders(true));

        fetch(`/api/orders`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('error while getting orders')
                }

                return res.json();
            })
            .then(res => dispatch(getOrders(res)))
            .catch(e => dispatch(errorOrders(e)))
            .finally(() => dispatch(loadingOrders(false)))
    }
};

export const changeOrderStatus = (id, status) => {
    return dispatch => {
        fetch(`/api/orders/${id}`, {
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
                    throw new Error('error while changing order status')
                }

                dispatch(changeStatus(id, status));
                return res;
            })
            .catch(e => dispatch(errorOrders(e)))
    }
};
