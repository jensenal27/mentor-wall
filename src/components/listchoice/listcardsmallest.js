import React from 'react';
import door from '../../icons/door.svg';

const ListCardSmallest = ( props ) => {
    const { item: {firstname}, item: {lastname}, item: {Id}, item: {image}, activeModal, modalAppear, randColor, clearModal } = props;
    const init = firstname[0];
    return (
        <>
            <div className = {Id === activeModal ? 'card-selected-small' : 'card'}>
                <div className ='cardflip' style={{width: 75, height: 75, borderLeft: 'solid 2px #d2dae2', borderTop: `solid 2px ${randColor}`, borderBottom: 'solid 2px #808e9b', borderRight: 'solid 2px #808e9b', padding: '1px' }}>
                    <div className = 'cardfront' onClick = {() => modalAppear(Id)}>
                        <img src = {image} alt = '' style={{width: 75, height: 75}}/>
                    </div>
                    <div className = 'cardback' onClick = {clearModal}>
                        <img src = {door} alt = '' style={{width: 75/2, height: 75/2}}/>
                    </div>
                </div>
                <div className = 'cardcaption' style={{fontSize: '14px'}}>{init}. {lastname}</div>
            </div>
        </>
    );
}

export default ListCardSmallest;