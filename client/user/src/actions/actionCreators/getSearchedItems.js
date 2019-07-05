import {fetchData, isLoading, hasErrored} from '../items';
import {search} from '../filter'

export const searchItems = (text) => {
    return dispatch => {
        dispatch(isLoading(true));

        fetch(`/api/search/${text}`)
            .then(result => {
                if (!result.ok) {
                    throw new Error('error while getting searched items')
                }

                dispatch(search(true, text));
                return result.json();
            })
            .then(result => dispatch(fetchData(result)))
            .catch(e => dispatch(hasErrored(e.toString())))
            .finally(() => dispatch(isLoading(false)))
    }
};
