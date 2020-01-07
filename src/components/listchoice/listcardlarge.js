import React from 'react';
import door from '../../icons/door.svg';

const ListCardLarge = ( props ) => {
    const { item: {firstname}, item: {lastname}, item: {Id}, item: {image}, activeModal, modalAppear, randColor, clearModal } = props;
    const init = firstname[0];
    return (
        <>
            <div className = {Id === activeModal ? 'card-selected-large' : 'card'}>
                <div className ='cardflip' style={{width: 150, height: 150, borderLeft: 'solid 6px #d2dae2', borderTop: `solid 6px ${randColor}`, borderBottom: 'solid 6px #808e9b', borderRight: 'solid 6px #808e9b', padding: '3px' }}>
                    <div className = 'cardfront' onClick = {() => modalAppear(Id)}>
                        <img src = {image} alt = '' style={{width: 150, height: 150}}/>
                    </div>
                    <div className = 'cardback' onClick = {clearModal}>
                        <img src = {door} alt = '' style={{width: 150/2, height: 150/2}}/>
                    </div>
                </div>
                <div className = 'cardcaption' style={{fontSize: '22px'}}>{init}. {lastname}</div>
            </div>
        </>
    );
}

export default ListCardLarge;