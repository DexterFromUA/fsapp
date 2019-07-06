export const getItems = (items) => {
    return {
        type: 'GET_ITEMS',
        payload: items
    }
};

export const loadingItems = (loading) => {
    return {
        type: 'LOADING_ITEMS',
        payload: loading
    }
};

export const errorItems = (error) => {
    return {
        type: 'ERROR_ITEMS',
        payload: error
    }
};

export const deleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        payload: id
    }
};

export const editItem = (item) => {
    return {
        type: 'EDIT_ITEM',
        payload: item
    }
};

export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        payload: item
    }
};

export const changeImage = (id, item) => {
    return {
        type: 'CHANGE_IMAGE',
        payload: {
            id: id,
            file: item
        }
    }
};

export const deleteImage = (id) => {
    return {
        type: 'DELETE_IMAGE',
        payload: id
    }
};

export const changePage = (page) => {
    return {
        type: 'CHANGE_PAGE',
        payload: page
    }
};

export const setAmount = (amount) => {
    return {
        type: 'SET_AMOUNT',
        payload: amount
    }
};
