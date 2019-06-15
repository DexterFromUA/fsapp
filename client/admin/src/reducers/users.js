const INITIAL_STATE = {
    loadingUsers: true,
    errorUsers: '',
    users: []
};

export default (state, action) => {
    state = state === undefined ? INITIAL_STATE : state;

    switch (action.type) {
        case "LOADING_USERS":
            return Object.assign({}, state, {
                loadingUsers: action.payload
            });

        case "ERROR_USERS":
            return Object.assign({}, state, {
                errorUsers: action.payload
            });

        case "GET_USERS":
            return Object.assign({}, state, {
                users: action.payload
            });

        case "DELETE_USER":
            return Object.assign({}, state, {
                users: state.users.filter(user => user.id !== action.payload.id)
            });

        case "CREATE_ADMIN":
            return Object.assign({}, state, {
                users: state.users.filter(user => user.id === action.payload ? user.role = 'admin' : user)
            });

        default:
            return state
    }
};
