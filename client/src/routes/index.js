import React from 'react';
import { Switch, Route, Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Segment } from "semantic-ui-react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from '../redux/reducers'

import Layout from "../components/Layout";
import Home from "../components/Home"

const history = createBrowserHistory();


const store = createStore(todoApp);



export default class Routes extends React.Component {
    render() {

        return (
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Layout} />
                        <Route path="/home" component={Home} />
                    </Switch>
                 </Router>
            </Provider>
        );


        // return (
        //     <Provider store={store} >

        //     </Provider>
        // );
    }
}