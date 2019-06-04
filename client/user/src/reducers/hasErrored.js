export default (state, action) => {
    if(state === undefined) {
        state = '';
    }

    switch (action.type) {
        case "HAS_ERRORED":
            return action.payload;

        default:
            return state;
    }
}
