import React from 'react';
import {withRouter} from 'react-router';

import propsForLayout from './hoc';
import Header from './header';

const Layout = propsForLayout(({child}) =>
    <React.Fragment>
        <Header/>
        { child }
    </React.Fragment>
);

export default withRouter(Layout);
