import fetchData from '../fetchData';
import hasErrored from '../hasErrored';
import isLoading from '../isLoading';

export function getItems(amount, page) {
    return dispatch => {
        console.log('GETTER')
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
            .then(res => {
                dispatch(fetchData(res));
                dispatch(isLoading(false));
            })
            .catch((e) => dispatch(hasErrored(e)));
    }
}
