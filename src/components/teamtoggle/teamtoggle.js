import React from 'react';

const TeamToggle = ( { item, activeTeam, changeTeam } ) => {
    return (
        <div
        className = 'teamtoggle'
        id = {item === activeTeam ? 'teamtoggle-selected' : 'teamtoggle'}
        onClick = {() => changeTeam(item)}>{item}</div>
    );
}

export default TeamToggle;