export default (state, action) => {
    if (state === undefined) {
        state = null;
    }

    switch (action.type) {
        case 'LOGIN':
            return state = action.payload;

        case 'LOGOUT':
            return state = null;

        default:
            return state;
    }
}
