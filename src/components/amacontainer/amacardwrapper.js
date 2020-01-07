import React from 'react';
import AmaCard from './amacard';
import { useTransition, animated, config } from 'react-spring';

const AmaCardWrapper = ( { item: {amaone}, item: {amatwo}, item: {amathree}, item: {amafour} } ) => {

    const amaArray = [amaone, amatwo, amathree, amafour];

    const transition = useTransition(amaArray, amaArray => amaArray, {
        config: config.gentle,
        from: { opacity: 0, transform: 'translatex(400px)' },
        enter: { opacity: 1, transform: 'translatex(0px)' },
        leave: { opacity: 0, transform: 'translatex(400px)' },
        trail: 100
    });

    return (
        <div className = 'amaentry'>
            {transition.map(({ item, key, props }) => (
                <animated.div key={key} style={props}>
                    <AmaCard item={item}/>
                </animated.div>
            ))}
        </div>
    );
}

export default AmaCardWrapper;