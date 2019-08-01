import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
//import { Provider } from "react-redux";
//import { PersistGate } from "redux-persist/lib/integration/react";
import Alert from "react-s-alert";
import { ApolloProvider } from "react-apollo";

import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/jelly.css";

//import { store, persistor } from "./utils/store";
import apollo from './graphql'
import Routes from "./routes";
//import Loading from "./components/Loading";

const history = createBrowserHistory();

ReactDOM.render(
  <ApolloProvider client={apollo}>
    {/* <Provider store={store}> */}
      {/* <PersistGate loading={Loading} persistor={persistor}> */}
        <Router history={history}>
          <Routes />
          <Alert stack={{ limit: 3 }} effect="jelly" position="bottom-right" />
        </Router>
      {/* </PersistGate> */}
    {/* </Provider> */}
  </ApolloProvider>,
  document.getElementById("root")
);
