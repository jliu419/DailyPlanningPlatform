import React, { Component } from 'react';

export default class Account extends Component {

    render() {
        return (
            <div className="Account">
                <h1> Hello {" " + this.props.name}</h1>
            </div>
        );
    }
}