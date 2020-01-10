import React, { Component } from 'react';
import Goals from './Goals';
import DailyToDoList from './DailyToDoList';

export default class LeftBar extends Component {

    render() {

        return (
            <div className="Left_Bar">
                <Goals />
                <DailyToDoList />
            </div>
        );
    }
}
