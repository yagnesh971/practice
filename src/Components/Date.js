import React from 'react';
import ReactDOM from 'react-dom';
function Date() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    if (hours < 12) {
        timeOfDay = "morning"
    }
    else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    }
    else {
        timeOfDay = "night"
    }
    return (
        <h1>Good {timeOfDay} !</h1>
    )
}
export default Date;
