import {isLoading, hasErrored, fetchData} from '../items';

export function getFilteredItems(amount, page, start, end) {
    return dispatch => {
        dispatch(isLoading(true));

        fetch(`/api/filtered/${amount}/${page}/${start}/${end}`, {
            method: 'GET'
        })
            .then(res => {
                if(!res.ok) {
                    throw new Error('error while getting filtered items' + res.statusText)
                }

                return res.json()
            })
            .then(res => dispatch(fetchData(res)))
            .catch((e) => dispatch(hasErrored(e.toString())))
            .finally(() => dispatch(isLoading(false)))
    }
}
