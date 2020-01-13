import React, { Component } from 'react';
import MyGoals from '../Resources/MyGoals';
import AnnualGoals from './AnnualGoals';
import MonthlyGoals from './MonthlyGoals';
import WeeklyGoals from './WeeklyGoals';

export default class Goals extends React.Component {

    constructor()
    {
        super();
        this.state = {
            "mygoals" : MyGoals, 
            "collapsed": true
        }
    }

    toggleCollapsed()
    {
        if (this.state.collapsed) 
            this.setState(() => { return { "mygoals": MyGoals, "collapsed": false } });
        else 
            this.setState(() => { return { "mygoals": MyGoals, "collapsed": true } });
    }

    buildList()
    {
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
            <div className="All_Goals_Components" style={this.state.collapsed ? dissapearingdisplay : appearingdisplay}>
                <AnnualGoals goals_list = {this.state.mygoals.Annual_Goals} time_span = {this.state.mygoals.Annual_Goals_Span}/>
                <MonthlyGoals goals_list = {this.state.mygoals.Monthly_Goals} time_span = {this.state.mygoals.Monthly_Goals_Span}/>
                <WeeklyGoals goals_list = {this.state.mygoals.Weekly_Goals} time_span = {this.state.mygoals.Weekly_Goals_Span}/>
            </div>
        );
    }

    render() {
        return (
            <div className="All_Goals">
                <button className='collapsible' onClick={() => this.toggleCollapsed()}> <h1>Goals</h1> </button> 
                { this.buildList() }
            </div>
        )
    }
}