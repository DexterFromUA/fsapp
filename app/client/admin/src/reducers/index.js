import {combineReducers} from 'redux';

import items from './items';
import users from './users';
import orders from './orders';

const rootReducer = combineReducers({
    itemsState: items,
    usersState: users,
    ordersState: orders
});

export default rootReducer;
