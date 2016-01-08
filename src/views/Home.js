import React from "react";
import {Link} from "react-router";
import request from "superagent";

var Home = React.createClass({


    getInitialState() {
        return {};
    },

    componentDidMount() {

    },


    render() {

        return (
            <div>
                <Link to="sell">Sälj domän</Link>
            </div>

        );
    }
});


export default Home;