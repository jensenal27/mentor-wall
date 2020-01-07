import React from 'react';
import ModalCard from './modalcard';
import { useTransition, animated, config } from 'react-spring';

const ModalContainer = ({modals}) => {

    const transition = useTransition(modals, modals => modals.Id, {
        config: config.gentle,
        from: { opacity: 0, width: 0, transform: 'translatey(400px)' },
        enter: { opacity: 1, width: 1, transform: 'translatey(0px)' },
        leave: { opacity: 0, width: 0, transform: 'translatey(-400px)' }
    });

    return(
        <>
            {transition.map(({ item, key, props }) => (
                <animated.div key={key} style={props}>
                    <ModalCard item={item}/>
                </animated.div>
            ))}
        </>
    );
}

export default ModalContainer;