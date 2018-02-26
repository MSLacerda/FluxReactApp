import React from 'react';
import { Route, Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Layout from "./components/Layout";

const history = createBrowserHistory();


export default function routes() {
    
    return (
        <Router history={history}>
            <Route path="/" component={Layout}>
            </Route>
        </Router>
    );

}