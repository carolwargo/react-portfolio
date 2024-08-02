import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SideNavBar from '../components/Navs/SideNavbar.jsx';

const SideNav = () => {

    const { ref, inView } = useInView({
        triggerOnce: false, // Animation triggers only once
        threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
        });

    return (
        <div>
        <motion.div
        ref={ref}
        initial={{ y: -20, opacity: 0.5 }}
        animate={inView ? { y: 0, opacity: 1} : {}}
        exit={{ y: 20, opacity: 0.5 }}
        transition={{ duration: 0.8 }}
      >
<SideNavBar/>
            </motion.div>
            </div>
    );
    }

export default SideNav;
