import React from 'react'
import "./RightSide.css"
import NextLec from '../Updates/Updates'
import CalendarComp from '../Calendar/Calendar'

function RightSide() {
    return (
        <div className="RightSide">
            <div>

                <NextLec />
            </div>
            <div>
                <CalendarComp />
            </div>
        </div>
    )
}

export default RightSide