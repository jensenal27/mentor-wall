import React from 'react';
import ListContainerMedium from './listcontainermedium';
import ListContainerLarge from './listcontainerlarge';
import ListContainerLargest from './listcontainerlargest';
import ListContainerSmall from './listcontainersmall';
import ListContainerSmallest from './listcontainersmallest';

const ListChoice = ({items, activeModal, modalAppear, randColor, clearModal}) => {
    if (items.length > 39) {
        return (
            <ListContainerSmallest items={items} activeModal={activeModal} modalAppear={modalAppear} randColor={randColor} clearModal={clearModal}/>
        );
    } else if (items.length > 33 && items.length < 40) {
        return (
            <ListContainerSmall items={items} activeModal={activeModal} modalAppear={modalAppear} randColor={randColor} clearModal={clearModal}/>
        );
    } else if (items.length > 16 && items.length < 33) {
        return (
            <ListContainerMedium items={items} activeModal={activeModal} modalAppear={modalAppear} randColor={randColor} clearModal={clearModal}/>
        );
    } else if(items.length < 7) {
        return (
            <ListContainerLargest items={items} activeModal={activeModal} modalAppear={modalAppear} randColor={randColor} clearModal={clearModal}/>
        );
    } else {
        return (
            <ListContainerLarge items={items} activeModal={activeModal} modalAppear={modalAppear} randColor={randColor} clearModal={clearModal}/>
        );
    }        
}

export default ListChoice;