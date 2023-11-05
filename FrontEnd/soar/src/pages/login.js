import React, { useState } from 'react';
//css 
import '../css/login.css';
import '../css/variables.css'
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formErrors, setFormErrors] = useState({});

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors({});
        let errors = {};
        if (!validateEmail(email)) {
            errors.email = 'Please enter a valid email address.';
        }
        if (!password) {
            errors.password = 'Please enter your password.';
        }
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }
        console.log('Login attempt with:', email, password);
    };

    const handleRegister = () => {
        console.log('Redirect to registration form');
    };

    const inputStyle = {
        margin: '10px 0',
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '20px',
        outline: 'none',
        boxSizing: 'border-box',
        width: 'calc(100% - 20px)' // Adjust input width to match new container size
    };

    const buttonStyle = {
        padding: '10px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: '#36495A',
        color: 'white',
        border: 'none',
        borderRadius: '20px',
        marginTop: '10px',
        width: 'calc(100% - 20px)' // Adjust button width to match new container size
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: '100vh',
            backgroundColor: '#f7f7f7',
            paddingLeft: '50px'
        }}>
            <div style={{
                width: '576px', // Width is now 75% of the original width
                background: '#FFF',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: '50px'
            }}>
                <div style={{
                    width: '100%',
                    height: '50px',
                    backgroundColor: '#D44A58',
                    borderRadius: '8px 8px 0 0',
                }}></div>
                <form onSubmit={handleSubmit} style={{
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%', // Form will automatically take 100% of the parent width
                }}>
                    <h2 style={{ fontWeight: 'bold', fontSize: '24px', textAlign: 'center', margin: '20px 0' }}>Login</h2>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        style={inputStyle}
                    />
                    {formErrors.email && (
                        <p style={{ color: 'red' }}>{formErrors.email}</p>
                    )}
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        style={inputStyle}
                    />
                    {formErrors.password && (
                        <p style={{ color: 'red' }}>{formErrors.password}</p>
                    )}
                    <button type="submit" className='login_btn'>
                        Log In
                    </button>
                    <button type="button" onClick={handleRegister} className='login_btn'>
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
