import React, { useState } from 'react';
import './Table.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useUpdate } from '../../context/UpdateContext';

function createData(name, trackingId, date, status) {
    return { name, trackingId, date, status };
}



function TableForm() {
    const { setPresentStudent, setAbsentStudent, setLeaveStudent, date } = useUpdate();

    const rows = [
        createData("Daniyal Sohail", "L1S23BSCS0069", (date.toLocaleDateString()), "Present"),
        createData("Babar Azam", "L1S23BSCS0179", (date.toLocaleDateString()), "Present"),
        createData("Virat Kohli", "L1S23BSCS0164", (date.toLocaleDateString()), "Present"),
        createData("Mitchell Starc", "L1S23BSCS0177", (date.toLocaleDateString()), "Present"),
        createData("Haris Rauf", "L1F23BSCS0143", (date.toLocaleDateString()), "Present"),
        createData("AB Devillier", "L1S21BSCS0089", (date.toLocaleDateString()), "Present"),
        createData("Brendon Mccullum", "L1F21BSCS0109", (date.toLocaleDateString()), "Present"),
        createData("Rohit Sharma", "L1S22BSCS0114", (date.toLocaleDateString()), "Present"),
        createData("Misbah ul Haq", "L1F22BSCS0101", (date.toLocaleDateString()), "Present"),
        createData("Sarfraz Ahmad", "L1S21BSCS0023", (date.toLocaleDateString()), "Present"),
    ];
    const [selectVal, setSelectVal] = useState(rows.map(row => row.status));

    const handleChange = (e, id) => {
        const newStatuses = [...selectVal];
        const prevStatus = newStatuses[id];
        const newStatus = e.target.value;

        newStatuses[id] = newStatus;
        setSelectVal(newStatuses);

        if (prevStatus === "Present") {
            setPresentStudent(prev => prev - 1);
        }

        if (prevStatus === "Absent") {
            setAbsentStudent(prev => prev - 1);
        }
        if (prevStatus === "Leave") {
            setLeaveStudent(prev => prev - 1);
        }


        if (newStatus === "Present") {
            setPresentStudent(prev => prev + 1);
        }
        if (newStatus === "Absent") {
            setAbsentStudent(prev => prev + 1);
        }
        if (newStatus === "Leave") {
            setLeaveStudent(prev => prev + 1);
        }
    }


    const makeStyle = (selectVal) => {
        if (selectVal === 'Present') {
            return {
                background: 'rgb(145 254 159 / 47%)',
                color: 'green',
            }
        }
        else if (selectVal === 'Absent') {
            return {
                background: '#ffadad8f',
                color: 'red',
            }
        }
        else {
            return {
                background: '#D3D322',
                color: 'white',
            }
        }
    }


    return (
        <div className="Table">
            <h3 style={{ color: "white" }}>Attendence</h3>
            <TableContainer
                component={Paper}
                className='tableContainer'


            >
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <TableHead>
                        <TableRow className='tableRow'>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Roll No.</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left">Update</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, id) => (
                            <TableRow key={row.trackingId} className='tableRow'>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.trackingId}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">
                                    <span className="status" style={makeStyle(selectVal[id])}>{selectVal[id]}</span>
                                </TableCell>
                                <TableCell align="left" className="Details">
                                    <select value={selectVal[id]} onChange={(e) => handleChange(e, id)}>
                                        <option value="Present">Present</option>
                                        <option value="Absent">Absent</option>
                                        <option value="Leave">Leave</option>
                                    </select>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
}

export default TableForm;
