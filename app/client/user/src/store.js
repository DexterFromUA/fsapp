import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './reducers';

const initialState = {
    hasErrored: false,
    isLoading: true,
    items: {},
    amount: 12,
    user: {},
    cart: [],
    page: 1,
    filter: {
        status: false,
        date: []
    }
};

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: [
        'amount'
    ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);
export const persistor = persistStore(store);
