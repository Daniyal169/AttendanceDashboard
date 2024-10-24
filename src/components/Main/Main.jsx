import React from 'react'
import "./Main.css"
import Cards from '../Cards/Cards'
import TableForm from '../Table/Table'

function Main() {
    return (
        <div className="main">
            <h1 style={{ color: "white" }}>Dashboard</h1>
            <Cards />
            <TableForm />
        </div >
    )
}

export default Main