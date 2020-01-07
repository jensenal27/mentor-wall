import React from 'react';
import AmaCardWrapper from './amacardwrapper';
import './ama.css';
import { useTransition, animated, config } from 'react-spring';

const AmaContainer = ({modals, activeModal, randColor}) => {

    const transition = useTransition(modals, modals => modals.Id, {
        config: config.gentle,
        from: { opacity: 0, width: 0, height: 0, transform: 'translatex(400px)' },
        enter: { opacity: 1, width: 1, height: 1, transform: 'translatex(0px)' },
        leave: { opacity: 0, width: 0, height: 0, transform: 'translatex(400px)' }
    });

    return(
        <div className = 'amawrap'>
            <div className = 'amatitle' id = {activeModal >= 1 ? 'amatitle' : 'amatitle-hidden'}>ASK ME ABOUT:</div>
            <div className = 'amaunderline' id = {activeModal >= 1 ? 'amaunderline' : 'amaunderline-hidden'} style = {{backgroundColor: `${randColor}`}}></div>
            {transition.map(({ item, key, props }) => (
                <animated.div key={key} style={props}>
                    <AmaCardWrapper item={item}/>
                </animated.div>
            ))}
        </div>
    );
}

export default AmaContainer;