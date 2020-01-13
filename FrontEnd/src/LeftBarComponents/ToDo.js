import React, { Component } from 'react';
import Style from './LeftBarStyle.css';

export default class ToDo extends React.Component {

    constructor() {
        super();
    }

    render() {

        const completedStyle = {
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        }

        const dateStyle = {
            display: "flex", 
            alignItems: "center"
        }

        return (
            <div className="to_do_items">
                <input type="checkbox"
                    checked={this.props.task.completed}
                    onChange={() => this.props.changeHandler(this.props.task.id)}
                />
                <div className="to_to_name" style={this.props.task.completed ? completedStyle : null}>
                    <div style={dateStyle}>
                        <h1> {this.props.task.Title} </h1>
                        <p style={{ paddingLeft: "10px" }}> date: {this.props.task.When} </p>
                    </div>
                    <p> Description: {this.props.task.Description} </p>
                </div>
            </div>
        )
    }

}
