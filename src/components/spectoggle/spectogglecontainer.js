import React from 'react';
import SpecToggle from './spectoggle';
import { useTransition, animated } from 'react-spring';

const SpecToggleContainer = ({data, activeCategory, changeCategory }) => {

    const newArray = data.map((toggle, i) => {
        return data[i].category;
    })
    const uniqueCategories = new Set(newArray);
    const uniqueCategoryArray = [...uniqueCategories];
    
    const transition = useTransition(uniqueCategoryArray, uniqueCategoryArray => uniqueCategoryArray, {
        from: { opacity: 0, marginLeft: -100, marginRight: 100 },
        enter: { opacity: 1, marginLeft: 0, marginRight: 0 },
        leave: {opacity: 0, marginLeft: -100, marginRight: 100 }
    });
    
    return(
        <>
            {/* <button className = 'toggle' onClick = {() => resetCategory()}>
                All
            </button> */}
            {transition.map(({ item, key, props }) => (
                <animated.div className = 'togglehold' key={key} style={props}>
                    <SpecToggle activeCategory={activeCategory} changeCategory={changeCategory} item={item}/>
                </animated.div>
            ))}
        </>
    );
}

export default SpecToggleContainer;