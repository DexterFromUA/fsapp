import {loadingItems, errorItems, getItems, deleteItem, addItem, editItem, changeImage, deleteImage} from '../items';

export const getItemsList = () => {
    return dispatch => {
        dispatch(loadingItems(true));

        fetch('/api/all')
            .then(res => {
                if (!res.ok) {
                    throw new Error('error getting items')
                }

                return res.json()
            })
            .then(res => dispatch(getItems(res)))
            .catch(e => dispatch(errorItems(e)))
            .finally(() => dispatch(loadingItems(false)))
    }
};

export const addItemToList = item => {
    return dispatch => {
        const options = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(item)
        };

        fetch('/api/add', options)
            .then(res => {
                if (!res.ok) {
                    throw new Error('error adding items')
                }

                dispatch(addItem(item));
            })
            .catch(e => {
                dispatch(errorItems(e));
            })
    }
};

export const changeItem = item => {
    return dispatch => {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        };

        fetch(`/api/edit/${item.id}`, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error('error editing item')
                }

                dispatch(editItem(item));
            })
            .catch(e => {
                dispatch(errorItems(e));
            })
    }

};

export const removeItem = id => {
    return dispatch => {
        const options = {
            method: 'DELETE'
        };

        fetch(`/api/remove/${id}`, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error('error deleting item')
                }

                dispatch(deleteItem(id));
            })
            .catch(e => {
                dispatch(errorItems(e.toString()));
            })
    }
};

export const imageChange = (id, name, image) => {
    return dispatch => {
        const options = {
            method: 'PUT',
            body: image
        };

        fetch(`/api/upload/${id}`, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error('error while changing image')
                }

                dispatch(changeImage(id, name))
            })
            .catch(e => dispatch(errorItems(e.toString())))
    }
};

export const removeImage = (id, url) => {
    return dispatch => {

        const options = {
            method: 'PUT'
        };

        fetch(`/api/removeupload/${url}`, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error('error deleting image')
                }

                dispatch(deleteImage(id))
            })
            .catch(e => dispatch(errorItems(e.toString())))
    }
};
