import React from "react";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";

const SignUpComponent = () => {

    return (

        <motion.div
        initial={{ y: -20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: 20, opacity: 0}}
        className="signup-component w3-black" 
        id="signup-component"
        style={{paddingTop: '200px', paddingBottom: '200px'}}
        >


        <div className="signup-container text-center">
          {/**top, right,bottom,left */}
                
            <Link to="/signup">
            <Button 
            variant="warning" 
            size="lg"
            className="signup-button"
            style={{ padding: '15px  100px', fontWeight: '900' 

            }}
            >
                Sign Up
                </Button>
                </Link>
         

        </div>

        </motion.div>


    );

}

export default SignUpComponent; 