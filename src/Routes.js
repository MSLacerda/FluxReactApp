import React from 'react';
import { Route, Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Segment } from "semantic-ui-react";

import Layout from "./components/Layout";
import Home from "./components/Home"

const history = createBrowserHistory();


export default function routes() {
    
    return (
        <Router history={history}>  
            <Route path="/" component={Layout}>
                <Segment>
                    <Route path="/" component={}>

                    </Route>
                </Segment>
            </Route>
        </Router>
    );

}