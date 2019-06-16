import Alert from 'react-s-alert';

import {
    loadingItems,
    errorItems,
    getItems,
    deleteItem,
    addItem,
    editItem,
    changeImage,
    deleteImage,
    setAmount
} from '../items';

export const getItemsList = (page) => {
    return dispatch => {
        dispatch(loadingItems(true));

        fetch(`/api/all/${50}/${page}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('error getting items')
                }

                return res.json()
            })
            .then(res => {
                dispatch(setAmount(res.count));
                dispatch(getItems(res.rows));
            })
            .catch(e => {
                dispatch(errorItems(e));
                Alert.error(e)
            })
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
                    throw new Error('Error adding items')
                }

                dispatch(addItem(item));
                Alert.success('Added')
            })
            .catch(e => {
                dispatch(errorItems(e));
                Alert.error(e)
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
                    throw new Error('Error while editing item')
                }

                dispatch(editItem(item));
                Alert.success('Changed')
            })
            .catch(e => {
                dispatch(errorItems(e));
                Alert.error(e)
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
                    throw new Error('Error while deleting item')
                }

                dispatch(deleteItem(id));
                Alert.success('Removed')
            })
            .catch(e => {
                dispatch(errorItems(e.toString()));
                Alert.error(e)
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
                    throw new Error('Error while changing image')
                }

                dispatch(changeImage(id, name));
                Alert.success('Image changed')
            })
            .catch(e => {
                dispatch(errorItems(e.toString()));
                Alert.error(e)
            })
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

                dispatch(deleteImage(id));
                Alert.success('Image removed')
            })
            .catch(e => {
                dispatch(errorItems(e.toString()));
                Alert.error(e)
            })
    }
};
