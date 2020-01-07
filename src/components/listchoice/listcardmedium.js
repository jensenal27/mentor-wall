import React from 'react';
import door from '../../icons/door.svg';

const ListCardMedium = ( props ) => {
    const { item: {firstname}, item: {lastname}, item: {Id}, item: {image}, activeModal, modalAppear, randColor, clearModal } = props;
    const init = firstname[0];
    return (
        <>
            <div className = {Id === activeModal ? 'card-selected-medium' : 'card'}>
                <div className ='cardflip' style={{width: 125, height: 125, borderLeft: 'solid 4px #d2dae2', borderTop: `solid 4px ${randColor}`, borderBottom: 'solid 4px #808e9b', borderRight: 'solid 4px #808e9b', padding: '2px' }}>
                    <div className = 'cardfront' onClick = {() => modalAppear(Id)}>
                        <img src = {image} alt = '' style={{width: 125, height: 125}}/>
                    </div>
                    <div className = 'cardback' onClick = {clearModal}>
                        <img src = {door} alt = '' style={{width: 125/2, height: 125/2}}/>
                    </div>
                </div>
                <div className = 'cardcaption' style={{fontSize: '18px'}}>{init}. {lastname}</div>
            </div>
        </>
    );
}

export default ListCardMedium;