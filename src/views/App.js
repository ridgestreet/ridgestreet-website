import React from "react";
import {Link} from "react-router";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

require("../../scss/app.scss");

let App = React.createClass({

    getInitialState() {
        return {
            isLoggedIn: false
        }
    },

    getNavItems() {
        return [
            <li key="home"><Link to="/">Hem</Link></li>,
            <li key="about"><Link to="/sell">Sälj</Link></li>
        ];
    },

    render() {
        var navItems = this.getNavItems();
        return (
            <div>
                <ul>
                    {navItems}
                </ul>
            <ReactCSSTransitionGroup component="div" transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                {React.cloneElement(this.props.children, {
                    key: this.props.location.pathname
                })}
            </ReactCSSTransitionGroup>
            </div>
        );
    }
});

export default App;