import {combineReducers} from 'redux';

import fetchData from './fetchData';
import hasErrored from './hasErrored';
import isLoading from './isLoading';
import amount from './amount';
import page from './page';
import filter from './filter';
import cart from './cart';
import user from './user';

const rootReducer = combineReducers({
    hasErrored,
    items: fetchData,
    isLoading,
    amount,
    page,
    filter,
    cart,
    user
});

export default rootReducer;
