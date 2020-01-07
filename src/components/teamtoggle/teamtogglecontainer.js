import React from 'react';
import TeamToggle from './teamtoggle';
import { useTransition, animated } from 'react-spring';

const TeamToggleContainer = ({data, activeTeam, changeTeam }) => {

    const newArray = data.map((toggle, i) => {
        return data[i].team;
    })
    const uniqueTeams = new Set(newArray);
    const uniqueTeamArray = [...uniqueTeams];

    const transition = useTransition(uniqueTeamArray, uniqueTeamArray => uniqueTeamArray, {
        from: { opacity: 0, marginLeft: -100, marginRight: 100 },
        enter: { opacity: 1, marginLeft: 0, marginRight: 0 },
        leave: {opacity: 0, marginLeft: -100, marginRight: 100 }
    });
    return(
        <>
            {/* <div
            className = 'teamtoggle'
            id = { activeTeam === '[]' ? 'teamtoggle-selected' : 'teamtoggle'}
            onClick = {() => resetItems()}>
                All
            </div> */}
            {transition.map(({ item, key, props }) => (
                <animated.div className = 'togglehold' key={key} style={props}>
                    <TeamToggle activeTeam={activeTeam} changeTeam={changeTeam} item={item}/>
                </animated.div>
            ))}
        </>
    );
}

export default TeamToggleContainer;