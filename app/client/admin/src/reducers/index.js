import {combineReducers} from 'redux';

import items from './items';
import users from './users';

const rootReducer = combineReducers({
    itemsState: items,
    usersState: users
});

export default rootReducer;
