export default (state, action) => {
    if (state === undefined) {
        state = 1
    };

    switch (action.type) {
        case "CHANGE_PAGE":
            return action.payload;

        default:
            return state
    }
}
