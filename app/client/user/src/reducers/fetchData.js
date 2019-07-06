export default (state, action) => {
    if(state === undefined) {
        state = {};
    }

    switch (action.type) {
        case "FETCH_DATA":
            return action.payload;

        default:
            return state;
    }
}
