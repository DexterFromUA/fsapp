import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {createBrowserHistory} from "history";
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';

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
                <Alert stack={{limit: 3}} effect='jelly' position='bottom-right'/>
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
