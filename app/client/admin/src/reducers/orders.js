const INITIAL_STATE = {
    loadingOrders: true,
    errorOrders: false,
    orders: []
};

export default (state, action) => {
    state = state === undefined ? INITIAL_STATE : state;

    switch (action.type) {
        case 'LOADING_ORDERS':
            return Object.assign({}, state, {
                loadingOrders: action.payload
            });

        case 'ERROR_ORDERS':
            return Object.assign({}, state, {
                errorOrders: action.payload
            });

        case 'GET_ORDERS':
            return Object.assign({}, state, {
                orders: action.payload
            });

        case 'CHANGE_STATUS':
            return Object.assign({}, state, {
                orders: state.orders.map(item => item.id === action.payload.id ? Object.assign({}, item, {status: action.payload.status}) : item)
            });

        default:
            return state;
    }
}
