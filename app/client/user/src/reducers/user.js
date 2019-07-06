export default (state, action) => {
    if (state === undefined) {
        state = null;
    }

    switch (action.type) {
        case 'LOGIN':
            return action.payload;

        case 'LOGOUT':
            return null;

        default:
            return state;
    }
}
