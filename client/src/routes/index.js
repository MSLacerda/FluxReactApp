import React from 'react';
import { Segment } from "semantic-ui-react";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import Layout from "../components/Layout";
import Home from "../components/Home"
import Todo from "../components/Todo"





export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Layout />

                    <Route exact path="/" component={Home} />
                    <Route exact path="/todo" component={Todo} />
                    
                </div>
            </Router>
        );
    }
}