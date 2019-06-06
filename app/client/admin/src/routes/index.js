import React from 'react';
import {Route, Switch} from 'react-router';

import routes from './routes';

const Routes = () => {
    const routeList = routes.map((route, key) => (
        <Route key={key} exact path={route.path} component={props => <route.component {...props} />}/>
    ));

    return <Switch>{routeList}</Switch>
};

export default Routes;
