import {loadingItems, errorItems, getItems, deleteItem} from '../items';

export const api = (url, params, id) => {
    return dispatch => {
        dispatch(loadingItems(true));

        if (url === 'all') {
            getAll(dispatch, url, params)
        } else {
            other(dispatch, url, id, params)
        }
    }
};

const getAll = (dispatch, URL, params) => {
    fetch(`/api/${URL}`, params)
        .then(res => {
            if (!res.ok) {
                dispatch(errorItems('bad response'));

                throw new Error('error getting items')
            }

            return res.json()
        })
        .then(res => {
            dispatch(getItems(res));
            dispatch(loadingItems(false));
        })
        .catch(e => {
            dispatch(errorItems(e));
        })
};

const other = (dispatch, URL, id, params, item) => {
    fetch(`/api/${URL}/${id}`, params)
        .then(res => {
            if (!res.ok) {
                dispatch(errorItems('bad response'));

                throw new Error('error getting items')
            }

            if (URL === 'remove') {
                dispatch(deleteItem(item))
            } else {
                getAll('all', null, dispatch);
            }
            dispatch(loadingItems(false));
        })
        .catch(e => {
            dispatch(errorItems(e));
        })
};
