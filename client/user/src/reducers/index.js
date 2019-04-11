import {combineReducers} from 'redux';

import fetchData from './fetchData';
import hasErrored from './hasErrored';
import isLoading from './isLoading';

const rootReducer = combineReducers({
    hasErrored,
    items: fetchData,
    isLoading
});

export default rootReducer;
