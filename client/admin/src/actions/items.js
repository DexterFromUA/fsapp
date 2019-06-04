export function getItems(items) {
    return {
        type: 'GET_ITEMS',
        payload: {
            items: items.rows,
            count: items.count
        }
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

export function deleteItem(id) {
    return {
        type: 'DELETE_ITEM',
        payload: id
    }
}

export function editItem(item) {
    return {
        type: 'EDIT_ITEM',
        payload: item
    }
}

export function addItem(item) {
    return {
        type: 'ADD_ITEM',
        payload: item
    }
}

export function changeImage(id, item) {
    return {
        type: 'CHANGE_IMAGE',
        payload: {
            id: id,
            file: item
        }
    }
}

export function deleteImage(id) {
    return {
        type: 'DELETE_IMAGE',
        payload: id
    }
}
