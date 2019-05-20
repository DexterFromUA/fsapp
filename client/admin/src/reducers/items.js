import {createReducer} from 'reduxsauce';

import itemsActions from '../actions/items';

const INITIAL_STATE = {loading: true};

export const items = (state = INITIAL_STATE, action) => {
    return {...state, loading: action.loading}
};

const Types = itemsActions.Types;

export const itemsReducers = createReducer(INITIAL_STATE, {
    [Types.LOADING]: items
});

export default itemsReducers;
