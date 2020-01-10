import React, { Component } from 'react';
import Style from './Header.css'; 

export default class Time extends Component {

    constructor() {
        super();
        this.state = {
            "time": null
        }
    }

    // return in brief case if the expected result is to be brief way 
    // of writing the month in english, ex: Jan is brief, January is not brief
    convertMonthToStr(monthnum, isBrief) {  
        switch (monthnum + 1) {
            case 1:
                return isBrief ? "Jan" : "January"; 
            case 2:
                return isBrief ? "Feb" : "Febuary"; 
            case 3:
                return isBrief ? "Mar" : "March"; 
            case 4:
                return isBrief ? "Apr" : "April";
            case 5:
                return "May"; 
            case 6:
                return "June"; 
            case 7:
                return "July"; 
            case 8:
                return isBrief ? "Aug" : "August";
            case 9:
                return isBrief ? "Sept" : "September"; 
            case 10:
                return isBrief ? "Oct" : "October"; 
            case 11:
                return isBrief ? "Nov" : "November";
            case 12:
                return isBrief ? "Dec" : "December"; 
            default:
                console.log("the unknown month is: " + monthnum); 
                return "Unknown Month"; 
        }
    }

    // return in brief case if the expected result is to be brief way 
    // of writing the day of the week in english, ex: Wed is brief, Wednesday is not brief
    convertDayToStr(daynum, isBrief) {
        switch (daynum) {
            case 1:
                return isBrief ? "MO" : "Monday";
            case 2:
                return isBrief ? "TU" : "Tuesday";
            case 3:
                return isBrief ? "WE" : "Wednesday";
            case 4:
                return isBrief ? "TH" : "Thursday";
            case 5:
                return isBrief ? "FR" : "Friday";
            case 6:
                return isBrief ? "SA" : "Saturday";
            case 0:
                return isBrief ? "SU" : "Sunday";
            default:
                console.log("the unknown Day is: " + daynum); 
                return "Unknown Day";
        }
    }

    // get the current time zone
    getCurrentTimeZone(d) {
        return /\((.*)\)/.exec(d.toString())[1]; 
    }

    // take the first letter of each word
    takeInitials(words) {
        const wordlist = words.split(" "); 
        const initial = wordlist.map((word) => word.charAt(0));
        return initial.toString().replace(/,/g, "").toUpperCase(); 
    }

    
    componentDidMount() {
        this.interval = setInterval(() => {return this.setState({ "time": Date.now() }); }, 1000);

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const d = new Date(this.state.time); 

        return (
            <div className="Time">
                <h1 className="DayDateYear">{this.convertDayToStr(d.getDay(), false) + " " + this.convertMonthToStr(d.getMonth(), true) + " " +
                    d.getDate() + "th " + d.getFullYear() + " "} </h1> 
                <h1 className="HourMinSec">{d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " " + this.takeInitials(this.getCurrentTimeZone(d))}</h1>
            </div>
        );
    }
}
