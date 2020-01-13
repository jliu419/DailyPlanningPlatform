import React, { Component } from 'react';
import ReminderList from '../Resources/ReminderList';
import ToDo from './ToDo';

export default class DailyToDoList extends React.Component {


    constructor() {
        super();
        this.state = {
            "todos": ReminderList, 
            "collapsed": true
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        console.log("Change todo property")
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        "completed": !todo.completed
                    }
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    toggleCollapsed()
    {
        if (this.state.collapsed) 
            this.setState(() => { return { "todos": ReminderList, "collapsed": false } });
        else 
            this.setState(() => { return { "todos": ReminderList, "collapsed": true } });
    }

    buildList()
    {
        const components = this.state.todos.map(
            element => <ToDo key={element.id} task={element} changeHandler={this.handleChange} /> 
        );

        const appearingdisplay = {
            display: "block", 
            width: "100%", 
            height: "100%", 
            
        }

        const dissapearingdisplay = {
            display: "none",
            width: "100%", 
            height: "100%"
        }

        return (
            <div className="All_ToDo_Components" style={this.state.collapsed ? dissapearingdisplay : appearingdisplay}>
                {components}
            </div>
        );
    }

    render() {
        return (
            <div className="Daily_To_Do_List">
                <button className='collapsible' onClick={() => this.toggleCollapsed()}> <h1>To Do List</h1> </button> 
                {this.buildList()}
            </div>
        );
    }
}