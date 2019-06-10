export function inc(id) {
    return {
        type: 'INC',
        payload: id
    }
}

export function dec(id) {
    return {
        type: 'DEC',
        payload: id
    }
}

export function addToCart(item) {
    return {
        type: 'ADD_TO_CART',
        payload: {
            id: item.id,
            title: item.title,
            count: 1,
            price: item.price
        }
    }
}

export function deleteFromCart(id) {
    return {
        type: 'DELETE_FROM_CART',
        payload: id
    }
}
