import fetchData from '../fetchData';
import hasErrored from '../hasErrored';
import isLoading from '../isLoading';

export default function getItems(url) {
    return dispatch => {
        dispatch(isLoading(true));

        fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw new Error(res.statusText)
                }
                dispatch(isLoading(false));

                return res
            })
            .then(res => res.json())
            .then(res => dispatch(fetchData(res)))
            .catch(() => dispatch(hasErrored(true)))
    }
}
