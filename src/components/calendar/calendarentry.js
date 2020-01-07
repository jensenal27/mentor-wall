import React from 'react';
import tz from 'moment-timezone';
import moment from 'moment';

const CalendarEntry = ( { item: {Title}, item: {POC}, item: {DateAndTime}, item: {EndDateAndTime} } ) => {

    const newPOC = POC.replace('Contact: ', 'POC: ');

    const convert = moment(DateAndTime);
    const month = convert.tz('America/Los_Angeles').format('MMM').toUpperCase();
    const day = convert.tz('America/Los_Angeles').format('D');
    const time = convert.tz('America/Los_Angeles').format('h:mm A');

    const localDate = moment(new Date());
    
    return (
        <div className = 'calendarentry'>
            <div className = 'eventdate'><span className = 'eventmonth'>{month}</span><span className = 'eventday'>{day}</span></div>
            <div className = 'eventtitle'>{Title}</div>
            <div className = 'eventpoc'>{newPOC}</div>
            <div className = 'eventtime'>{time}</div>
        </div>
    );
}

export default CalendarEntry;