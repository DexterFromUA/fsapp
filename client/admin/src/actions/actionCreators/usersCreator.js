import {loadingUsers, errorUsers, getUsers, deleteUser} from '../users';

export const usersApi = (params, user) => {
    return dispatch => {
        dispatch(loadingUsers(true));

        if (user) {
            removeUser(user, dispatch, params)
        } else {
            getData(dispatch)
        }
    }
};

const getData = (dispatch, params) => {
    fetch(`/api/users`, params ? params : null)
        .then(res => {
            if (!res.ok) {
                throw new Error('error getting users')
            }
            return res.json()
        })
        .then(res => {
            dispatch(getUsers(res));
            dispatch(loadingUsers(false))
        })
        .catch(e => dispatch(errorUsers(e)));
};

const removeUser = (user, dispatch, params) => {
    fetch(`/api/users/${user.id}`, params ? params : null)
        .then(res => {
            if (!res.ok) throw new Error('error while deleting user');

            dispatch(deleteUser(user));
            dispatch(loadingUsers(false))
        })
        .catch(e => dispatch(errorUsers(e)));
};
