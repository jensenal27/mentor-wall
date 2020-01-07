import React from 'react';

const SpecToggle = ( { item, activeCategory, changeCategory } ) => {
    return (
        <div
        className = 'spectoggle'
        id = {item === activeCategory ? 'spectoggle-selected' : 'spectoggle'}
        onClick = {() => changeCategory(item)}>{item}</div>
    );
}

export default SpecToggle;