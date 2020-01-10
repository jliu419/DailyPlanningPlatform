import React, { Component } from 'react'; 
import Logo from './Logo.js'; 
import Time from './Time.js'; 
import Reminders from './Reminders.js'; 
import Account from './Account.js'; 
import Style from './Header.css'; 

export default class Header extends Component {

    render() {

        return (
            <div className="Header">
                <Logo />
                <Time />
                <Reminders />
                <Account name="Albert" />
            </div>
        );
    }
}
