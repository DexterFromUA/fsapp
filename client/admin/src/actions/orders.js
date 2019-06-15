export const loadingOrders = (loading) => {
    return {
        type: 'LOADING_ORDERS',
        payload: loading
    }
};

export const errorOrders = (error) => {
    return {
        type: 'ERROR_ORDERS',
        payload: error
    }
};

export const getOrders = (data) => {
    return {
        type: 'GET_ORDERS',
        payload: data
    }
};

export const changeStatus = (id, status) => {
    return {
        type: 'CHANGE_STATUS',
        payload: {
            id: id,
            status: status
        }
    }
};
