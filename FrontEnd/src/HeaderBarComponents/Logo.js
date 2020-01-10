import React, { Component } from 'react';

export default class Logo extends Component {

    render() {

        return (
            <div className="Logo">
                <img className="Logo_Image" src={require("../Images/Logo.png")}></img>
                <h1 className="Title"> Planner </h1>
            </div>
        );
    }
}
