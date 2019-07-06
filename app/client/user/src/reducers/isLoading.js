export default (state, action) => {
    if(state === undefined) {
        state = true;
    }

    switch (action.type) {
        case "IS_LOADING":
            return action.payload;

        default:
            return state;
    }
}
