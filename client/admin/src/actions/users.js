export function loadingUsers(loading) {
    return {
        type: 'LOADING_USERS',
        payload: loading
    }
}

export function errorUsers(error) {
    return {
        type: 'ERROR_USERS',
        payload: error
    }
}

export function getUsers(users) {
    return {
        type: 'GET_USERS',
        payload: users
    }
}

export function deleteUser(user) {
    return {
        type: 'DELETE_USER',
        payload: user
    }
}
