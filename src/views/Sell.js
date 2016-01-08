import React from "react";
import {Link} from "react-router";
import request from "superagent";

var Sell = React.createClass({


    getInitialState() {
        return {
            domain: ""
        };
    },

    componentDidMount() {

    },

    validateDomain(event) {
        var domain = event.target.value;
        this.setState({
            domain: domain
        });

    },


    render() {

        return (
            <div>
                SÄLJ sdfsdf

                <div>
                    <input type="text" value={this.state.domain} onChange={this.validateDomain}  />
                </div>
            </div>

        );
    }
});


export default Sell;