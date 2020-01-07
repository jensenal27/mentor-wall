import React from 'react';
import CalendarEntry from './calendarentry';
import './calendar.css';
import { useTransition, animated, config } from 'react-spring';

const Calendar = ({events, activeModal}) => {

    const transition = useTransition(events, events => events.Id, {
        config: config.gentle,
        from: { opacity: 0, transform: 'translatex(400px)' },
        enter: { opacity: 1, transform: 'translatex(0px)' },
        leave: { opacity: 0, transform: 'translatex(400px)' },
        trail: 100
    });

    return(
        <div className = 'calendarwrap'>
            <div className = 'calendartitle' id = {activeModal >= 1 ? 'calendartitle-hidden' : 'calendartitle'}>UPCOMING EVENTS</div>
            {transition.map(({ item, key, props }) => (
                <animated.div key={key} style={props}>
                    <CalendarEntry item={item}/>
                </animated.div>
            ))}
        </div>
    );
}

export default Calendar;