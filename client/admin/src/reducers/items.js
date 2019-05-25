const INITITAL_STATE = {
    loadingItems: true,
    errorItems: '',
    items: []
};

export default (state, action) => {
    if (state === undefined) {
        state = INITITAL_STATE
    }

    switch (action.type) {
        case "LOADING_ITEMS":
            return Object.assign({}, state, {
                loadingItems: action.payload
            });

        case "ERROR_ITEMS":
            return Object.assign({}, state, {
                errorItems: action.payload
            });

        case "GET_ITEMS":
            return Object.assign({}, state, {
                items: action.payload
            });

        case "DELETE_ITEM":
            return Object.assign({}, state, {
                items: state.items.filter(item => item.id !== action.payload.id)
            });

        default:
            return state
    }
}
