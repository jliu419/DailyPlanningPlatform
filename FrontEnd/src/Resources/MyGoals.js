const MyGoals = {
    "Annual_Goals_Span": new TimeSpan("Jan 1st, 2020", "Dec 31st, 2020"),
    "Annual_Goals": [
        new Goal(1, "CS", "Improve Javascript Skills", "April 1st, 2020", "Have a deep understanding in scriptive language", false), 
        new Goal(2, "CS", "Improve Python Skills", "April 1st, 2020", "Have a deep understanding in Python", false), 
        new Goal(3, "School", "Get all A in my classes", "December 31st, 2020", "Improve my GPA", false), 
    ], 
    "Monthly_Goals_Span": new TimeSpan("Jan 1st, 2020", "Jan 31st, 2020"),
    "Monthly_Goals": [
        new Goal(1, "Personal", "Finish a book", "Jan 31st, 2020", "AI, Teaching Human", false), 
        new Goal(2, "CS", "Finish the front end for DPP", "Jan 31st, 2020", "Finish the React FrontEnd and client connectivity", false), 
        new Goal(3, "School", "Talk to All my professors", "Jan 28th, 2020", "Let all professors know I exist", false), 
    ], 
    "Weekly_Goals_Span": new TimeSpan("Jan 6th, 2020", "Jan 12th, 2020"),
    "Weekly_Goals": [
        new Goal(1, "School", "Talk to Two professors", "Jan 12th, 2020", "Have two professors know my existence", true), 
        new Goal(2, "CS", "Displaying the main page in DPP", "Jan 12th, 2020", "Have the initial page displaying", false), 
        new Goal(3, "CS", "Read about JS Socket", "Jan 12th, 2020", "Understand how client connect to server in JS", false), 
        new Goal(4, "CS", "LinkedIn DJango Tutorial", "Jan 12th", "Understand how DJ works", true), 
    ]
}

function Goal(id, type, title, expected_due_date, description, completed) {
    this.id = id;
    this.type = type;
    this.title = title;
    this.expected_due_date = expected_due_date;
    this.description = description;
    this.completed = completed; 
}

function TimeSpan(starting_time, ending_time)
{
    this.starting_time = starting_time;
    this.ending_time = ending_time;
}

export default MyGoals;