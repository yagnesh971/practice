import React, { useState, useEffect } from 'react';

function Date1() {

    const [timeOfDay, setTimeOfDay] = useState('');
    const val1 = 10;
    const val2 = 20;
    useEffect(() => {
        const date = new Date();
        const hours = date.getHours();
        if (hours < 12) {
            setTimeOfDay("morning");
        }
        else if (hours >= 12 && hours < 17) {
            setTimeOfDay("afternoon");
        }
        else {
            setTimeOfDay("night");
        }
    }, []);



    /*const getTime = () => {
        const newDate = new Date();
        const hours = newDate.getHours();
        if (hours < 12) {
            setTimeOfDay("morning");
        }
        else if (hours >= 12 && hours < 17) {
            setTimeOfDay("afternoon");
        }
        else {
            setTimeOfDay("night");
        }
    }*/

    return (
        <div>
            <h1>Good {timeOfDay}! {val1 + val2}</h1>
        </div>

    )
}
export default Date1;
