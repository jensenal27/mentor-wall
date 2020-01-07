import React from 'react';
import './squarewall.css';

const SquareWall = ({randColor, activeModal}) => {

    const n = 123; // Or something else

    let square = [...Array(n)].map((e, i) => <div className="square" id = {activeModal >= 1 ? 'square-hidden' : 'square'} style={{backgroundColor: `${randColor}`}} key={i}></div>)
    return(
        <div className = 'squarewall'>
            {square}
            <div className="empty" id="empty1"></div>
            <div className="empty" id="empty2"></div>
            <div className="empty" id="empty3"></div>
            <div className="empty" id="empty4"></div>
            <div className="empty" id="empty5"></div>
            <div className="empty" id="empty6"></div>
            <div className="empty" id="empty7"></div>
            <div className="empty" id="empty8"></div>
            <div className="empty" id="empty9"></div>
            <div className="empty" id="empty10"></div>
        </div>
    );
}

export default SquareWall;