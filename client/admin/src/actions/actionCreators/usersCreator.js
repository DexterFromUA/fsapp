import Alert from 'react-s-alert';

import {loadingUsers, errorUsers, getUsers, deleteUser, createAdmin} from '../users';

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
                throw new Error('Error while getting users')
            }
            return res.json()
        })
        .then(res => {
            dispatch(getUsers(res));
        })
        .catch(e => {
            dispatch(errorUsers(e));
            Alert.error(e)
        })
        .finally(() => dispatch(loadingUsers(false)))
};

const removeUser = (user, dispatch, params) => {
    fetch(`/api/users/${user.id}`, params ? params : null)
        .then(res => {
            if (!res.ok) throw new Error('Error while deleting user');

            dispatch(deleteUser(user));
            Alert.success('User deleted')
        })
        .catch(e => {
            dispatch(errorUsers(e));
            Alert.error(e)
        })
        .finally(() => dispatch(loadingUsers(false)))
};

export const makeAdmin = id => {
    return dispatch => {
        dispatch(loadingUsers(true));

        fetch(`/api/users/makeadmin/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Error while making admin: ' + res)
                }

                dispatch(createAdmin(id));
                Alert.success('Admin now')
            })
            .catch(e => {
                dispatch(errorUsers(e));
                Alert.error(e)
            })
            .finally(() => dispatch(loadingUsers(false)));
    }
};
