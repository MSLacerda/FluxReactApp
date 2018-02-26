import React from 'react';
import ReactDOM from 'react-dom';

// Config
import routes from "./Routes"

// Modules
import Layout from './components/Layout';

// Styles
import 'semantic-ui-css/semantic.min.css';


let routerConfig = routes();

ReactDOM.render(routerConfig, document.getElementById('root'));
