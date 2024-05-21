import React, { useState } from "react";

const LightDark = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const containerStyle = {
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
        height: "100vh", // Make sure the container covers the entire viewport height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    };
   
    const toggleStyle = {

        color: isDarkMode ? "white" : "black",
    };

    return (
        <div style={containerStyle}>
            <div className="container vw-100">
                <div className="row justify-content-center align-items-center mb-5">
                    <h5 className="fw-bold text-center" style={{color: isDarkMode ? '#FF385C' : '#000000'}}>
                        <b>TOGGLE LIGHT/DARK MODE</b>
                    </h5>
                    <div className="form-check form-switch" style={{toggleStyle}}>

                        <input 
                            className="form-check-input bg-danger-subtle" 
                            type="checkbox" 
                            id="flexSwitchCheckDefault" 
                            onChange={toggleMode} 
                            checked={isDarkMode}
                        />
                        <label 
                        className="form-check-label" 
                        htmlFor="flexSwitchCheckDefault">
                            Toggle light/dark mode
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LightDark;
