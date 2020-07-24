import React from 'react';

function Tick() {

    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );

    return (
        <h1>{element}</h1>
    );
}

setInterval(Tick, 1000);

export default Tick;
