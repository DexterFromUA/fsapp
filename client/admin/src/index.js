import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import {createBrowserHistory} from "history";
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import {store, persistor} from './store';
import Routes from './routes';
import Loading from './components/Loading';

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={Loading} persistor={persistor}>
            <Router history={history}>
                <AlertProvider template={AlertTemplate}>
                    <Routes/>
                </AlertProvider>
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
