import React from 'react'
import "./Updates.css"
import { UpdatesData } from '../../Data/Data'

function NextLec() {
    return (
        <div className="updates">
            {UpdatesData.map((update) => (
                <div className="update">
                    <span>{update.name}</span>
                    <span> {update.noti}</span>
                    <span>{update.time}</span>
                </div>
            ))}
        </div>
    )
}

export default NextLec