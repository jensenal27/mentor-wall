import React from 'react';
import ModalSubtext from './modalsubtext';
import { useTransition, animated, config } from 'react-spring';

const ModalSub = ({modals}) => {

    const transition = useTransition(modals, modals => modals.id, {
        config: config.gentle,
        from: { opacity: 0, width: 0 },
        enter: { opacity: 1, width: 1 },
        leave: { opacity: 0, width: 0 }
    });

    return(
        <>
            {transition.map(({ item, key, props }) => (
                <animated.div key={key} style={props}>
                    <ModalSubtext item={item}/>
                </animated.div>
            ))}
        </>
    );
}

export default ModalSub;