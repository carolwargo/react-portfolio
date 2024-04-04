import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function Login() {
    const [username, setUsername] = useState('testuser');
    const [password, setPassword] = useState('password123');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Form login submitted');

 // Reset previous error messages
 setUsernameError('');
 setPasswordError('');

 // Reset form fields
 setUsername(''); // Reset username to empty string
 setPassword(''); // Reset password to empty string


        // Validation logic
        let isValid = true;
        if (username.trim() === '') {
            setUsernameError('Username is required');
            isValid = false;
        }

        if (password.trim() === '') {
            setPasswordError('Password is required');
            isValid = false;
        }

        // If form is valid, proceed with submission
        if (isValid) {
            console.log('Submitting form...');
            // Implement form submission logic here
        }
    };

    return (
        <div className="login" id='login'>
            <div className="w3-container w3-content bg-white shadow">
                <div className="w3-padding-16 border-dark">
                    <h4 className="fw-light w3-margin-top"><b>Login Form</b></h4>
                    <div className="w3-padding-24">
                        <form onSubmit={handleLogin}> {/* Wrap input fields with a form */}

                            <div className="form-outline mb-4">
                            <input 
    type="text" 
    id="username" 
    className={`form-control shadow-sm border border-1 ${usernameError ? 'is-invalid' : ''}`}
    placeholder="Username"
    value={username || 'Username'} // Use username state variable if not empty, otherwise use 'Username' placeholder
    onChange={(e) => setUsername(e.target.value)}
    autoComplete="username"
/>
                                <div className="invalid-feedback">{usernameError}</div>
                            </div>

                            <div className="form-outline mb-4">
                            <input 
    type="password" 
    id="new-password" 
    className={`form-control shadow-sm border border-1 ${passwordError ? 'is-invalid' : ''}`}
    placeholder="Password"
    value={password || 'Password'} // Use password state variable if not empty, otherwise use 'Password' placeholder
    onChange={(e) => setPassword(e.target.value)}
    autoComplete="new-password"
/>
                                <div className="invalid-feedback">{passwordError}</div>
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
                                {(usernameError || passwordError) && <div className="text-danger">Please fill in all required fields.</div>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
