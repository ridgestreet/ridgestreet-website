import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import {App, Home, Sell} from './views';

document.addEventListener("DOMContentLoaded", () => {
    var appRoot = document.getElementById('app-root');
    ReactDOM.render((
        <Router>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="sell" component={Sell} />
            </Route>
        </Router>
    ), appRoot);
});

