import React, { useState } from 'react';
import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { SidebarData } from '../../Data/Data';
import { motion } from "framer-motion";

function Sidebar() {

    const [selected, setSelected] = useState(0);
    const [expanded, setExpaned] = useState(false)

    const sidebarVariants = {
        true: {
            left: '0'
        },
        false: {
            left: '-60%'
        }
    }


    return (
        <>
            <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpaned(!expanded)}>
                <UilBars />
            </div>

            <motion.div className='sidebar'
                variants={sidebarVariants}
                animate={window.innerWidth <= 768 ? `${expanded}` : ''}
            >
                {/* logo */}
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>

                {/* menu */}
                <div className="menu">
                    {SidebarData.map((item, index) => (
                        <div
                            className={selected === index ? "menuItem active" : "menuItem"}
                            key={index}
                            onClick={() => setSelected(index)}

                        >
                            <div>
                                <item.icon />
                            </div>
                            <span onClick={() => setExpaned(!expanded)}>{item.heading}</span>
                        </div>
                    ))}
                    <div className="menuItem">
                        <UilSignOutAlt />
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Sidebar;
