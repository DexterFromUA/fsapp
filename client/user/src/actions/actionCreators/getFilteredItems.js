import fetchData from '../fetchData';
import hasErrored from '../hasErrored';
import isLoading from '../isLoading';

export function getFilteredItems(amount, start, end) {
    return dispatch => {
        dispatch(isLoading(true));

        fetch(`/api/all/${amount}/${start}/${end}`, {
            method: 'GET'
        })
            .then(res => {
                if(!res.ok) {
                    throw new Error('error while getting filtered items' + res.statusText)
                }

                return res.json()
            })
            .then(res => {
                dispatch(fetchData(res));
                dispatch(isLoading(false));
            })
            .catch((e) => dispatch(hasErrored(e)))
    }
}
