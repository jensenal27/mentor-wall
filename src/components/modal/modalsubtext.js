import React from 'react';
import mail from '../../icons/mail.svg';

const ModalSubtext = ( { item: {account}, item: {lvl}, item: {subaccount} } ) => {
    const info = lvl + ' | ' + account + ' | ' + subaccount
    return (
        <div className = 'modal'>
            <div className = 'modallevel'>{info}</div>
            <div className = 'modalbiotag'>About</div>
            <div className = 'modalemailtag'><img src = {mail} alt = '' style={{width: '40px', height: '40px'}}/></div>
        </div>
    );
}

export default ModalSubtext;