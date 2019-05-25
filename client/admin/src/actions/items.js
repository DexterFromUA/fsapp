export function getItems(items) {
    return {
        type: 'GET_ITEMS',
        payload: items
    }
}

export function loadingItems(loading) {
    return {
        type: 'LOADING_ITEMS',
        payload: loading
    }
}

export function errorItems(error) {
    return {
        type: 'ERROR_ITEMS',
        payload: error
    }
}

export function deleteItem(item) {
    return {
        type: 'DELETE_ITEM',
        payload: item
    }
}
