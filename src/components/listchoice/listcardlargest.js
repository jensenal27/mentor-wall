import React from 'react';
import door from '../../icons/door.svg';

const ListCardLargest = ( props ) => {
    const { item: {firstname}, item: {lastname}, item: {Id}, item: {image}, activeModal, modalAppear, randColor, clearModal } = props;
    const init = firstname[0];
    return (
        <>
            <div className = {Id === activeModal ? 'card-selected-largest' : 'card'}>
                <div className = 'cardflip' style={{width: 200, height: 200, borderLeft: 'solid 8px #d2dae2', borderTop: `solid 8px ${randColor}`, borderBottom: 'solid 8px #808e9b', borderRight: 'solid 8px #808e9b', padding: '4px' }}>
                    <div className = 'cardfront' onClick = {() => modalAppear(Id)}>
                        <img src = {image} alt = '' style={{width: 200, height: 200}}/>
                    </div>
                    <div className = 'cardback' onClick = {clearModal}>
                        <img src = {door} alt = '' style={{width: 200/2, height: 200/2}}/>
                    </div>
                </div>
                <div className = 'cardcaption' style={{fontSize: '26px'}}>{init}. {lastname}</div>
            </div>  
        </>
    );
}

export default ListCardLargest;