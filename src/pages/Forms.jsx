import React from 'react';
import { motion } from 'framer-motion';
import SideNavBar from '../components/SideNavbar/SideNavbar.jsx';

const SideNav = () => {

    return (
        <motion.div
        initial={{ y: -20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: 20, opacity: 0}}
        className="home"
        
        >
<SideNavBar/>

            </motion.div>
    );
    }

export default SideNav;
