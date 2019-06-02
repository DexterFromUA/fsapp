import fetchData from '../fetchData';
import hasErrored from '../hasErrored';
import isLoading from '../isLoading';

export function getItems() {
    return dispatch => {
        dispatch(isLoading(true));

        fetch('/api/all', {
            method: 'GET'
        })
            .then(res => {
                if(!res.ok) {
                    throw new Error(res.statusText)
                }

                dispatch(isLoading(false));
                return res.json()
            })
            .then(res => dispatch(fetchData(res)))
            .catch((e) => dispatch(hasErrored(true)))
    }
}
