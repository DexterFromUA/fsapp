import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import {createBrowserHistory} from "history";
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';

import {store, persistor} from './store';
import Routes from './routes';
import Loading from './components/Loading';

import './i18n';

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={Loading} persistor={persistor}>
            <Router history={history}>
                <Routes/>
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
