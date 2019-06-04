import {combineReducers} from 'redux';

import fetchData from './fetchData';
import hasErrored from './hasErrored';
import isLoading from './isLoading';
import amount from './amount'

const rootReducer = combineReducers({
    hasErrored,
    items: fetchData,
    isLoading,
    amount
});

export default rootReducer;
