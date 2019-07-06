export default (state, action) => {
    if (state === undefined) {
        state = [];
    };

    switch (action.type) {
        case "INC":
            return state.map(item => {
                if (item.id === action.payload) {
                    item.count += 1;
                    const full = item.price * item.count;
                    item.fullPrice = +full.toFixed(2);
                    return item;
                } else {
                    return item
                }
            });

        case "DEC":
            return state.map(item => {
                if (item.id === action.payload) {
                    if (item.count > 1) {
                        item.count -= 1;
                        const full = item.price * item.count;
                        item.fullPrice = +full.toFixed(2);
                    }
                    return item;
                } else {
                    return item
                }
            });

        case "ADD_TO_CART":
            return [...state, action.payload];

        case "DELETE_FROM_CART":
            return state.filter(item => item.id !== action.payload);

        case "CLEAN_UP":
            return state = [];

        default:
            return state
    }
}
