import React from 'react';

const monthsAct = ({name, date, distance ,time, elevationGain}) => {
    return (
        <div>
        <h2>{name}</h2>
        <h3>{distance}</h3>
        <h3>{date}</h3>
        <h3>{time}</h3>
        <h3>{elevationGain}</h3>
        </div>
    );
};

export default monthsAct;