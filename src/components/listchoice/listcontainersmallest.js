import React from 'react';
import ListCardSmallest from './listcardsmallest';
import { useTransition, animated, config } from 'react-spring';

const ListContainerSmallest = ({ items, activeModal, modalAppear, randColor, clearModal }) => {

    const transition = useTransition(items, items => items.Id, {
        config: config.gentle,
        from: { opacity: 0, width: 0, transform: 'translatey(1rem)', marginRight: '0px', marginLeft: '0px'},
        enter: { opacity: 1, width: 75, transform: 'translatey(0rem)', marginRight: '10px', marginLeft: '10px'},
        leave: { opacity: 0, width: 0, transform: 'translatey(1rem)', marginRight: '0px', marginLeft: '0px'}
    });

    return(
        <>
            {transition.map(({ item, key, props }) => (
                <animated.div className = 'cardhold' key={key} style={props}>
                    <ListCardSmallest item={item} activeModal={activeModal} modalAppear={modalAppear} length={items.length} randColor={randColor} clearModal={clearModal}/>
                </animated.div>
            ))}
        </>
    );
}

export default ListContainerSmallest;