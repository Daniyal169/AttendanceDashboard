import React, { useState } from 'react'
import "./SingleCard.css"
import { motion, AnimateSharedLayout } from "framer-motion"
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import { useUpdate } from '../../context/UpdateContext';



function SingleCard(props) {
    const { totalStudent } = useUpdate();
    console.log(totalStudent)

    const [expanded, setExpanded] = useState(false)
    return (
        <AnimateSharedLayout>
            {
                expanded ? (
                    <ExpandedCard props={props} setExpanded={setExpanded} />
                ) :
                    (
                        <ShortCard props={props} setExpanded={setExpanded} totalStudent={totalStudent} />
                    )
            }
        </AnimateSharedLayout>
    )
}


// ShortCard 
function ShortCard({ props, setExpanded, totalStudent }) {
    const Png = props.png;
    return (
        <motion.div
            className="shortCard"
            style={{
                background: props.color.backGround,
                boxShadow: props.color.boxShadow,
            }}
            onClick={() => setExpanded(true)}
            layoutId="expandableCard"
        >
            <div
                className="cardRight">
                <CircularProgressbar
                    value={props.barValue}
                    text={`${props.barValue}%`}
                />
                <span>{props.title}</span>
            </div>
            <div className="cardLeft">
                <Png />
                <span>{props.value}{"/"}{totalStudent}</span>
                <span>Today</span>
            </div>
        </motion.div>
    );
}

// Expanded Card
function ExpandedCard({ props, setExpanded }) {
    const data = {
        options: {
            chart: {
                type: "area",
                height: "auto",
            },

            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35,
            },

            fill: {
                colors: ["#fff"],
                type: "gradient",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["white"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
            grid: {
                show: true,
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z"
                ],
            },
        },
    };

    return (
        <motion.div className="expandedCard"

            style={{
                background: props.color.backGround,
                boxShadow: props.color.boxShadow,
            }}
            layoutId="expandableCard"
        >
            <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
                <UilTimes onClick={() => setExpanded(false)} />
            </div>
            <span>{props.title}</span>
            <div className="chartContainer">
                <Chart options={data.options} series={props.series} type="area" />
            </div>
            <span>This Week</span>
        </motion.div>
    );
}
export default SingleCard