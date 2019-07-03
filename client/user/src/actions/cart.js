export const inc = (id) => {
    return {
        type: 'INC',
        payload: id
    }
};

export const dec = (id) => {
    return {
        type: 'DEC',
        payload: id
    }
};

export const addToCart = (item) => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            id: item.id,
            title: item.title,
            count: 1,
            price: item.price,
            fullPrice: item.price
        }
    }
};

export const deleteFromCart = (id) => {
    return {
        type: 'DELETE_FROM_CART',
        payload: id
    }
};

export const cleanUp = () => {
    return {
        type: 'CLEAN_UP'
    }
};
