export default (state, action) => {
    if (state === undefined) {
        state = {
            status: false,
            text: ''
        }
    }

    switch (action.type) {
        case 'SEARCH':
            return Object.assign({}, state, {
                status: action.payload.status,
                date: action.payload.text
            });

        default:
            return state;
    }
}
