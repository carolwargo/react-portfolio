import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function Login() {
    return (
        <div className="container w3-padding-16">
            <div className="w3-container w3-content bg-white shadow">
                <div className="w3-container w3-content w3-padding-16 px-4 border-dark">
                    <h4 className="fw-light w3-margin-top"><b>Login Form</b></h4>
                    <div className="w3-padding-24">
                        <div className="form-outline mb-4">
                            <input 
                                type="text"
                                id="form1Example1"
                                className="form-control shadow-sm border border-1"
                                readOnly // Add readOnly attribute
                            />
                            <label className="form-label" htmlFor="form1Example1"></label>
                        </div>

                        <div className="form-outline mb-4">
                            <input 
                                type="text" 
                                id="form1Example2" 
                                className="form-control shadow-sm border border-1" 
                                readOnly // Add readOnly attribute
                            />
                            <label className="form-label" htmlFor="form1Example2"></label>
                        </div>

                        <div className="row mb-4">
                            <div className="col d-flex">
                                <div className="form-check">
                                    <input 
                                        type="checkbox" 
                                        id="form1Example3" 
                                        className="form-check-input" 
                                        readOnly // Add readOnly attribute
                                    />
                                    <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                                </div>
                              
                            </div>
                            <div className="col">
                                <a href="#!">Forgot password?</a>
                            </div>
                            
                        </div>
                        <div>
                            <button 
                                type="button" 
                                className="btn btn-primary btn-block mb-4 px-5 shadow"
                            >
                                Sign up
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;
