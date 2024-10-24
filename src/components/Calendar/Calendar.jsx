import React, { useState } from 'react'
import "./Calendar.css"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useUpdate } from '../../context/UpdateContext';

function CalendarComp() {
    const { date, setDate } = useUpdate();
    return (
        <div >
            <Calendar onChange={setDate} value={date} className="calendar" />

        </div>
    )
}

export default CalendarComp