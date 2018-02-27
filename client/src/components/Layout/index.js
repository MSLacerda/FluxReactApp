import React from 'react';
import { Component } from 'react';
import { Segment } from 'semantic-ui-react';

// Partials

import HeaderMenu from './partials/HeaderMenu.jsx';


// Styles
import './style.scss';


export default class Layout extends Component {
    render() {
        return (
            <header>
                <HeaderMenu />
            </header>
        );
    }
}



