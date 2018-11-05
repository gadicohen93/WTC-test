import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import MainContainer from 'MainContainer';
import Index from 'Index';
import GetUser from 'GetUser';
import CreateUser from 'CreateUser';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={MainContainer}>
        	<Route path="getUser" component={GetUser}/>
           	<Route path="createUser" component={CreateUser}/>
            <IndexRoute component={Index}/>
        </Route>
    </Router>,
    document.getElementById('app')
);