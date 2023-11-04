import React, { useState } from 'react';

const Login = () => {

    // Local state to manage form inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would usually handle the login logic,
        // like sending a request to your server
        console.log('Login attempt with:', username, password);
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh', // take full viewport height
            backgroundColor: '#f7f7f7'
        }}>
            <div style={{
                width: '768px',
                height: '769px',
                flexShrink: 0,
                background: '#FFF',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '8px', // optional, for better visuals
            }}>
                <form onSubmit={handleSubmit} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '80%', // form width is 80% of the container
                }}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        style={{ margin: '10px 0', padding: '10px', fontSize: '16px' }}
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        style={{ margin: '10px 0', padding: '10px', fontSize: '16px' }}
                    />
                    <button
                        type="submit"
                        style={{
                            padding: '10px',
                            fontSize: '16px',
                            cursor: 'pointer',
                            backgroundColor: '#005f73',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            marginTop: '10px'
                        }}
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
