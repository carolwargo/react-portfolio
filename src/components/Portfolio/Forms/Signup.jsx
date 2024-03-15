import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function Signup() {
    return (
        <div className="container w3-padding-16">
            <div className="w3-container w3-content bg-white shadow">
                <div className="w3-container w3-content w3-padding-16 px-4 border-dark">
                    <h4 className="fw-light w3-margin-top"><b>Signup Form</b></h4>
                    <form autoComplete="on"> {/* Enable autocomplete */}
                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline ">
                                    <input 
                                        type="text" 
                                        id="firstName" 
                                        className="form-control shadow-sm border border-1" 
                                        placeholder="First Name" 
                                        autoComplete="given-name" // Autocomplete for first name
                                    />
                                    <label className="form-label" htmlFor="firstName">First Name</label>
                                </div>
                            </div>
                            <div className="col">
                                <div  className="form-outline">
                                    <input 
                                        type="text" 
                                        id="lastName" 
                                        className="form-control shadow-sm border border-1" 
                                        placeholder="Last Name" 
                                        autoComplete="family-name" // Autocomplete for last name
                                    />
                                    <label className="form-label" htmlFor="lastName">Last Name</label>
                                </div>
                            </div>
                        </div>

                        <div  className="form-outline mb-4">
                            <input 
                                type="email" 
                                id="email" 
                                className="form-control shadow-sm border border-1" 
                                placeholder="Email" 
                                autoComplete="email" // Autocomplete for email
                            />
                            <label className="form-label" htmlFor="email">Email</label>
                        </div>

                        <div  className="form-outline mb-4">
                            <input 
                                type="password" 
                                className="form-control shadow-sm border border-1" 
                                placeholder="Password" 
                                autoComplete="new-password" // Autocomplete for new password
                            />
                            <label className="form-label" htmlFor="password">Password</label>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-4">
                            <input 
                                className="form-check-input me-2" 
                                type="checkbox" 
                                id="newsletterCheck"  
                                defaultChecked 
                                readOnly // Add readOnly attribute
                            />
                            <label className="form-check-label" htmlFor="newsletterCheck">
                                Subscribe to our newsletter
                            </label>
                        </div>

                        <button 
                            type="button" 
                            className="btn btn-primary btn-block mb-4 px-5 shadow"
                            autoComplete="on" // Enable autocomplete
                        >
                            Sign up
                        </button>

                        <div className="text-center w3-margin-bottom">
                            <p>or sign up with:</p>
                            <button 
        type="button" 
        className="btn btn-secondary btn-floating mx-1 shadow"
        autoComplete="on" // Enable autocomplete
    >
        <i className="fab fa-facebook-f"></i>
    </button>

    <button 
        type="button" 
        className="btn btn-secondary btn-floating mx-1 shadow"
        autoComplete="on" // Enable autocomplete
    >
        <i className="fab fa-google"></i>
    </button>

    <button  
        type="button" 
        className="btn btn-secondary btn-floating mx-1 shadow"
        autoComplete="on" // Enable autocomplete
    >
        <i className="fab fa-twitter"></i>
    </button>

    <button 
        type="button" 
        className="btn btn-secondary btn-floating mx-1 shadow"
        autoComplete="on" // Enable autocomplete
    >
        <i className="fab fa-github"></i>
    </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
