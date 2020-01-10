import React, { Component } from 'react';
import ReminderList from '../Resources/ReminderList.js'; 
import Reminder from './Reminder.js'; 
import Style from './Header.css'; 

export default class Reminders extends Component {

    constructor() {
        super();
        this.state = {
            reminders: ReminderList, 
            slideIndex: 1
        }        
    }


    render() {

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

        const slideShowButtonStyle = {
            margin: "0px",
            border: "0px",
            padding: "0px" 
        }

        console.log("Display slide #" + this.state.slideIndex); 
        const components = this.state.reminders.map(
            (reminder) => {
                return (
                    <div className="rem" style={reminder.id === this.state.slideIndex ? appearingdisplay : dissapearingdisplay} >
                        <Reminder reminder={reminder} />
                    </div>
                )
            }
        )

        return (
            <div className="Reminder">
                <div className="slide_show">
                    <div className="slide_show_button_div"> 
                        <button className="slide_show_button" onClick={() => this.setSlideIdx(-1)}>{"<"}</button>
                    </div>
                    <div className="actualSlides">
                        {components}
                    </div>
                    <div className="slide_show_button_div">
                        <button className="slide_show_button" onClick={() => this.setSlideIdx(1)}>{">"}</button>
                    </div>
                </div>
            </div>
        );
    }


    /// change the slide index appropriatly based on what is passed into the parameter, 
    /// if the parameter is positive integer, then move right, 
    /// if the parameter is negative integer, move left, 
    /// if the index is smaller than 1 after integerating the param, rotate to the end, 
    /// if the index is bigger than the length after integrating the param, rotate to the beginning. 
    /// Update the state
    setSlideIdx(n) {
        let newidx = this.state.slideIndex + n;

        if (newidx > this.state.reminders.length) // rotate back to slide one
        {
            console.log("rotate to slide one");
            newidx = 1;
        }

        if (newidx < 1) // rotate to the last slide
        {
            console.log("rotate to last slide");
            newidx = this.state.reminders.length; 
        }

        this.setState(() => { console.log("displaying slide #" + newidx); return { ...this.state.reminders, "slideIndex": newidx } });
    }



/*
    // set the state
    plusDivs(n) {
        this.setState((prevState) => { return { ...reminders, "slideIndex": prevState.slideIndex + n } }); // increment the state slide index
        this.showDivs(this.state.slideIndex);
    }

    showDivs(n) {
        let reminders = Array.prototype.slice.call(document.getElementsByClassName("rem"));
        //  // .map((comp) => { if (comp.className === "rem") return comp})
        console.log("reminders :  \n" + reminders.length); 
        
        if (n > reminders.length) // rotate back to slide one
        {
            this.setState(() => { console.log("rotate to slide one"); return { "slideIndex": 1 } }); 
        } 

        if (n < 1) // rotate to the last slide
        {
            this.setState(() => { console.log("rotate to last slide"); return { "slideIndex": reminders.length } }); 
        }
        
        reminders.forEach((reminder) => {  // turn off the display for all slides
            console.log(" display off for " + reminder);
            reminder.style.display = "none";
        })  

        reminders[this.state.slideIndex - 1].style.display = "block";
    }
*/

}
