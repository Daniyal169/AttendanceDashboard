import React from 'react'
import "./Cards.css"
import SingleCard from '../SingleCard/SingleCard'
import { useUpdate } from '../../context/UpdateContext';
import { UilBook, UilGraduationCap, UilUsersAlt } from "@iconscout/react-unicons";



// Analytics Cards Data


function Cards() {
    const { presentStudent, absentStudent, leaveStudent, absentPercent, presentPercent, leavePercent } = useUpdate()
    const cardsData = [
        {
            title: "Present",
            color: {
                backGround: "linear-gradient(180deg,#3CE732 0%, #068C17 100%)",
                boxShadow: "0px 1px 20px 0px #3CE732",
            },
            barValue: presentPercent(),
            value: presentStudent,
            png: UilUsersAlt,
            series: [
                {
                    name: "Present",
                    data: [10, 9, 10, 6, 7, 8, 5],
                },
            ],
        },
        {
            title: "Absent",
            color: {
                backGround: "linear-gradient(180deg, #EF3146 0%, #9C0A19 100%)",
                boxShadow: "0px 1px 20px 0px #EF3146",
            },
            barValue: absentPercent(),
            value: absentStudent,
            png: UilGraduationCap,
            series: [
                {
                    name: "Absent",
                    data: [0, 1, 0, 2, 1, 2, 0],
                },
            ],
        },
        {
            title: "Leave",
            color: {
                backGround: "linear-gradient(180deg, #BFBF04 0%, #BFBF04 100%)",
                boxShadow: "0px 1px 20px 0px #BFBF04",
            },
            barValue: leavePercent(),
            value: leaveStudent,
            png: UilBook,
            series: [
                {
                    name: "Leaves",
                    data: [0, 0, 0, 2, 2, 0, 5],
                },
            ],
        },
    ]

    return (
        <div className="cards">
            {cardsData.map((card, i) => (
                <div className="singleCard">
                    <SingleCard
                        title={card.title}
                        color={card.color}
                        barValue={card.barValue}
                        value={card.value}
                        png={card.png}
                        series={card.series}
                    />
                </div>
            ))}
        </div>
    )
}

export default Cards