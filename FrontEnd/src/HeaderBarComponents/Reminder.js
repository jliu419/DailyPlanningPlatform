import React, { Component } from 'react';

export default class Reminder extends Component {

    render() {

        const Stl = {
            margin: "0px",
            border: "0px",
            padding: "0px", 
            "text-align": "center",
            "height": "100%",
        }

        return (
            <div>
                <h1 style={Stl}> {this.props.reminder.Title} </h1> 
                <p style={Stl}> {this.props.reminder.Description} </p>
            </div>
        );
    }
}