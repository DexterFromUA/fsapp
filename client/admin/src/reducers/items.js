const INITITAL_STATE = {
    loadingItems: true,
    errorItems: '',
    items: {}
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
                items: state.items.filter(item => item.id !== action.payload)
            });

        case "EDIT_ITEM":
            return Object.assign({}, state, {
                items: state.items.map(item => {
                    if (item.id !== action.payload.id) {
                        return item
                    }

                    return action.payload
                })
            });

        case "ADD_ITEM":
            return Object.assign({}, state, {
                items: [...state.items, action.payload]
            });

        case "CHANGE_IMAGE":
            return Object.assign({}, state, {
                items: state.items.filter(item => item.id === action.payload.id ? item.fileUrl = action.payload.file : item)
            });

        case "DELETE_IMAGE":
            return Object.assign({}, state, {
                items: state.items.filter(item => item.id === action.payload ? delete item.fileUrl : item)
            });

        default:
            return state
    }
}
