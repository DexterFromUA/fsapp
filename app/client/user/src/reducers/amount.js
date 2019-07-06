export default (state, action) => {
    if(state === undefined) {
        state = 12;
    }

    switch (action.type) {
        case "SET_AMOUNT":
            return action.payload;

        default:
            return state;
    }
}
