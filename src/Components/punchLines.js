import React from 'react';
function punchLines(props) {
    return (
        <div>
            <h2>Question:{props.pl.questiion}</h2>
            <h2>punch:{props.pl.punch}</h2>
        </div>
    )
}
export default punchLines;
