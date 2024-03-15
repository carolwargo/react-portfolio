import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Register() {
    const [activeTab, setActiveTab] = useState('login');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // State variables for error messages
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleTabChange = (tab) => {
        console.log('Changing tab to:', tab); // Log when tab changes
        setActiveTab(tab);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log('Logging in...'); // Log when login form is submitted
        // Implement login logic here
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        console.log('Registering...'); // Log when register form is submitted

        // Reset previous error messages
        setUsernameError('');
        setPasswordError('');
        setNameError('');
        setEmailError('');

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
        if (name.trim() === '') {
            setNameError('Name is required');
            isValid = false;
        }
        if (email.trim() === '') {
            setEmailError('Email is required');
            isValid = false;
        }

        // If form is valid, proceed with registration
        if (isValid) {
            console.log('Registration successful');
            // Implement registration logic here
        }
    };

    return (
        <div className="container w3-padding-16">
            <div className="w3-container w3-content bg-white shadow">
                <div className="w3-container w3-content w3-padding-16 px-4 py-4 border-dark">
                    <h4 className="fw-light w3-margin-top w3-margin-bottom"><b>Register Form</b></h4>
                    <div>
                        <br />
                        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a
                                    className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
                                    onClick={() => handleTabChange('login')}
                                    href="#pills-login"
                                    role="tab"
                                    aria-selected={activeTab === 'login' ? 'true' : 'false'}
                                >Login</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a
                                    className={`nav-link ${activeTab === 'register' ? 'active' : ''}`}
                                    onClick={() => handleTabChange('register')}
                                    href="#pills-register"
                                    role="tab"
                                    aria-selected={activeTab === 'register' ? 'true' : 'false'}
                                >Register</a>
                            </li>
                        </ul>
                    </div>

                    <div className="tab-content">
                        <div
                            className={`tab-pane fade ${activeTab === 'login' ? 'show active' : ''}`}
                            id="pills-login"
                            role="tabpanel"
                        >
                            <form onSubmit={handleLoginSubmit}>
                                {/* Login form fields */}
                                <input 
                                    type="text"
                                    id="username"
                                    className={`form-control shadow-sm border border-1 ${usernameError ? 'is-invalid' : ''}`}
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    autoComplete="username"
                                />
                                <div className="invalid-feedback">{usernameError}</div>
                                <input 
                                    type="password" 
                                    id="password" 
                                    className={`form-control shadow-sm border border-1 ${passwordError ? 'is-invalid' : ''}`} 
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="current-password" 
                                />
                                <div className="invalid-feedback">{passwordError}</div>
                                <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                            </form>
                            <div className="text-center">
                                <p>Not a member? <a href="#!" onClick={() => handleTabChange('register')}>Register</a></p>
                            </div>
                            <br />
                        </div>

                        <div className={`tab-pane fade ${activeTab === 'login' ? 'show active' : ''}`} id="pills-login" role="tabpanel">
    <form onSubmit={handleLoginSubmit}>
     
        <input 
            type="text"
            id={`login-username`}
            className={`form-control shadow-sm border border-1 ${usernameError ? 'is-invalid' : ''}`}
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
        />
        <div className="invalid-feedback">{usernameError}</div>
        <input 
            type="password" 
            id={`login-password`} 
            className={`form-control shadow-sm border border-1 ${passwordError ? 'is-invalid' : ''}`} 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password" 
        />
        <div className="invalid-feedback">{passwordError}</div>
        <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
    </form>
    <div className="text-center">
        <p>Not a member? <a href="#!" onClick={() => handleTabChange('register')}>Register</a></p>
    </div>
    <br />
</div>

<div className={`tab-pane fade ${activeTab === 'register' ? 'show active' : ''}`} id="pills-register" role="tabpanel">
    <form onSubmit={handleRegisterSubmit}>
        {/* Register form fields */}
        <input 
            type="text" 
            id={`register-name`} 
            className={`form-control shadow-sm border border-1 ${nameError ? 'is-invalid' : ''}`} 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name" 
            autoComplete="name"
        />
        <div className="invalid-feedback">{nameError}</div>
        <input 
            type="email" 
            id={`register-email`}
            className={`form-control shadow-sm border border-1 ${emailError ? 'is-invalid' : ''}`} 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email" 
            autoComplete="email"
        />
        <div className="invalid-feedback">{emailError}</div>
        <input 
            type="password" 
            id={`register-password`} 
            className="form-control shadow-sm border border-1" 
            value={password}
            placeholder="Password" 
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary btn-block mb-3">Register</button>
    </form>
</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
