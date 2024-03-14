import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


function LoginRegister() {
  

    
    return (
        <div className="container w3-padding-16">
            <div className="w3-container w3-content bg-white shadow">
                <div className="w3-container w3-content w3-padding-16 px-4 py-4 border-dark">
                    <h4 className="fw-light w3-margin-top w3-margin-bottom"><b>Signup and Login</b></h4>
                    <div>
                        <br />
                        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a
                                    className="nav-link active"
                                    id="tab-login"
                                    data-mdb-pill-init
                                    href="#pills-login"
                                    role="tab"
                                    aria-controls="pills-login"
                                    aria-selected="true"
                                >Login</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a
                                    className="nav-link"
                                    id="tab-register"
                                    data-mdb-pill-init
                                    href="#pills-register"
                                    role="tab"
                                    aria-controls="pills-register"
                                    aria-selected="false"
                                >Register</a>
                            </li>
                        </ul>
                    </div>

                    <div className="tab-content">
                        <div
                            className="tab-pane fade show active"
                            id="pills-login"
                            role="tabpanel"
                            aria-labelledby="tab-login"
                        >
                            <div >
                                <div className="text-center mb-3">
                                    <p>Sign in with:</p>
                                    <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>

                                    <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                                        <i className="fab fa-google"></i>
                                    </button>

                                    <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                                        <i className="fab fa-twitter"></i>
                                    </button>

                                    <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                                        <i className="fab fa-github"></i>
                                    </button>
                                </div>

                                <p className="text-center">or:</p>

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input 
                                        type="email" 
                                        id="loginName" 
                                        className="form-control"  
                                    />
                                    <label className="form-label" htmlFor="loginName">Email or username</label>
                                </div>

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input 
                                        type="password" 
                                        id="loginPassword" 
                                        className="form-control" 
                                    />
                                    <label className="form-label" htmlFor="loginPassword">Password</label>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-md-6 d-flex justify-content-center">
                                        <div className="form-check mb-3 mb-md-0">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="loginCheck"
                                                defaultChecked 
                                            />
                                            <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                        </div>
                                    </div>

                                    <div className="col-md-6 d-flex justify-content-center">
                                        <a href="#!">Forgot password?</a>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                                <div className="text-center">
                                    <p>Not a member? <a href="#!">Register</a></p>
                                </div>
                                <br />
                            </div>
                        </div>

                        <div
                            className="tab-pane fade"
                            id="pills-register"
                            role="tabpanel"
                            aria-labelledby="tab-register"
                        >
                            <div >
                                <div className="text-center mb-3">
                                    <p>Sign up with:</p>
                                    <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1 shadow">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>

                                    <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                                        <i className="fab fa-google"></i>
                                    </button>

                                    <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                                        <i className="fab fa-twitter"></i>
                                    </button>

                                    <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                                        <i className="fab fa-github"></i>
                                    </button>
                                </div>

                                <p className="text-center">or:</p>

                                <div data-mdb-input-init className="form-outline mb-4 ">
                                    <input 
                                        type="text" 
                                        id="registerName" 
                                        className="form-control "
                                    
                                    />
                                    <label className="form-label" htmlFor="registerName">Name</label>
                                </div>

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input 
                                        type="text" 
                                        id="registerUsername" 
                                        className="form-control" 
                                      
                                    />
                                    <label className="form-label" htmlFor="registerUsername">Username</label>
                                </div>

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input 
                                        type="email" 
                                        id="registerEmail" 
                                        className="form-control" 
                                  
                                    />
                                    <label className="form-label" htmlFor="registerEmail">Email</label>
                                </div>

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input 
                                        type="password" 
                                        id="registerPassword" 
                                        className="form-control" 
                                       
                                    />
                                    <label className="form-label" htmlFor="registerPassword">Password</label>
                                </div>

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input 
                                        type="password" 
                                        id="registerRepeatPassword" 
                                        className="form-control" 
                                    />
                                    <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                                </div>

                                <div className="form-check d-flex justify-content-center mb-4">
                                    <input
                                        className="form-check-input me-2"
                                        type="checkbox"
                                        value=""
                                        id="registerCheck"
                                        defaultChecked 
                                        aria-describedby="registerCheckHelpText"
                                    />
                                    <label className="form-check-label" htmlFor="registerCheck">
                                        I have read and agree to the terms
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block mb-3">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;
