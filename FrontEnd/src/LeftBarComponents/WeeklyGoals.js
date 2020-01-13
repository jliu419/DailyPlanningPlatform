import React, { Component } from 'react';

export default class WeeklyGoals extends React.Component {

    constructor()
    {
        super();
        this.state = {
            "collapsed": true
        }
    }

    buildList()
    {
        const ls_detail = this.props.goals_list.map( goal => (<h4> {goal.id + ". " + goal.title} </h4>));
        
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
            <ul style={this.state.collapsed ? dissapearingdisplay : appearingdisplay}>
                {ls_detail}
            </ul>
        );
    }

    toggleCollapsed()
    {
        if (this.state.collapsed) 
            this.setState(() => { return { "collapsed": false } });
        else 
            this.setState(() => { return { "collapsed": true } });
    }
    
    render() {
        return (
            <div className="Weekly_Goals">
                <button className='collapsible' onClick={() => this.toggleCollapsed()}> <h2>Weekly Goals</h2> </button>
                {this.buildList()}
            </div>
        )
    }
}