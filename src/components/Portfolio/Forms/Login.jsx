import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent form submission
        // For demo purposes, you can simply check if username and password are not empty
        if (username.trim() !== '' && password.trim() !== '') {
            // Set isLoggedIn to true to indicate successful login
            setIsLoggedIn(true);
        }
    };

    return (
        <div className="container w3-padding-16">
            <div className="w3-container w3-content bg-white shadow">
                <div className="w3-container w3-content w3-padding-16 px-4 border-dark">
                    <h4 className="fw-light w3-margin-top"><b>Login Form</b></h4>
                    <div className="w3-padding-24">
                        <form onSubmit={handleLogin}> {/* Wrap input fields with a form */}
                            <div className="form-outline mb-4">
                                <input 
                                    type="text"
                                    id="username"
                                    className="form-control shadow-sm border border-1"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    autoComplete="username"
                                />
                            </div>

                            <div className="form-outline mb-4">
                                <input 
                                    type="password" 
                                    id="password" 
                                    className="form-control shadow-sm border border-1" 
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="current-password" 
                                />
                            </div>

                            <div className="row mb-4">
                                <div className="col d-flex">
                                    <div className="form-check">
                                        <input 
                                            type="checkbox" 
                                            id="rememberMe" 
                                            className="form-check-input" 
                                        />
                                        <label className="form-check-label" htmlFor="rememberMe"> Remember me </label>
                                    </div>
                                </div>
                                <div className="col">
                                    <a href="#!">Forgot password?</a>
                                </div>
                            </div>
                            <div>
                                <button 
                                    type="submit" 
                                    className="btn btn-primary btn-block mb-4 px-5 shadow"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                        {isLoggedIn && <p>Login Successful!</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
