import {isLoading, hasErrored, fetchData} from '../items';

export function getItems(amount, page) {
    return dispatch => {
        dispatch(isLoading(true));

        fetch(`/api/all/${amount}/${page}`, {
            method: 'GET'
        })
            .then(res => {
                if(!res.ok) {
                    throw new Error('error while getting items: ' + res.statusText)
                }

                return res.json()
            })
            .then(res => dispatch(fetchData(res)))
            .catch((e) => dispatch(hasErrored(e)))
            .finally(() => dispatch(isLoading(false)))
    }
}
