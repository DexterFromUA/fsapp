import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './reducers';

const initialState = {
    loading: true
};

const persistConfig = {
    key: 'root',
    storage: storage
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
