export default (state, action) => {
    if (state === undefined) {
        state = {
            status: false,
            date: []
        };
    }

    switch (action.type) {
        case "FILTERED":
            return Object.assign({}, state, {
                status: action.payload.status,
                date: action.payload.date
            });

        default:
            return state
    }
}
