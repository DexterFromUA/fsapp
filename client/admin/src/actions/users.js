export const loadingUsers = (loading) => {
    return {
        type: 'LOADING_USERS',
        payload: loading
    }
};

export const errorUsers = (error) => {
    return {
        type: 'ERROR_USERS',
        payload: error
    }
};

export const getUsers = (users) => {
    return {
        type: 'GET_USERS',
        payload: users
    }
};

export const deleteUser = (user) => {
    return {
        type: 'DELETE_USER',
        payload: user
    }
};

export const createAdmin = (id) => {
    return {
        type: 'CREATE_ADMIN',
        payload: id
    }
};
