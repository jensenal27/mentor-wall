import React from 'react';

const ModalCard = ( { item: {firstname}, item: {lastname}, item: {image}, item: {text}, item: {email}, item: {category} } ) => {
    return (
        <div className = 'modal'>
            <div className = 'modalimage'>
                <img src = {image} alt = '' style={{width: 392, height: 373}}/>
            </div>
            <div className = 'modalcaption'>{firstname} {lastname}</div>
            <div className = 'modalbio'>{text}</div>
            <div className = 'modalemail'>{email}</div>
        </div>
    );
}

export default ModalCard;