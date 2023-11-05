// import React, { useState } from 'react';

// const Login = () => {
//     // Local state to manage form inputs
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [formErrors, setFormErrors] = useState({});

//     // Function to validate email
//     const validateEmail = (email) => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex for validation
//         return emailRegex.test(email);
//     };

//     // Function to handle form submission
//     const handleSubmit = (event) => {
//         event.preventDefault();

//         // Reset form errors
//         setFormErrors({});

//         // Form validation
//         let errors = {};
//         if (!validateEmail(email)) {
//             errors.email = 'Please enter a valid email address.';
//         }
//         if (!password) {
//             errors.password = 'Please enter your password.';
//         }

//         // If there are errors, do not submit the form
//         if (Object.keys(errors).length > 0) {
//             setFormErrors(errors);
//             return;
//         }

//         // Here you would usually handle the login logic,
//         // like sending a request to your server
//         console.log('Login attempt with:', email, password);
//     };

//     return (
//         <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             height: '100vh',
//             backgroundColor: '#f7f7f7'
//         }}>
//             <div style={{
//                 width: '768px',
//                 height: '769px',
//                 flexShrink: 0,
//                 background: '#FFF',
//                 boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 borderRadius: '8px',
//             }}>
//                 <form onSubmit={handleSubmit} style={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     width: '80%',
//                 }}>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="Email"
//                         style={{ margin: '10px 0', padding: '10px', fontSize: '16px' }}
//                     />
//                     {formErrors.email && (
//                         <p style={{ color: 'red' }}>{formErrors.email}</p>
//                     )}
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder="Password"
//                         style={{ margin: '10px 0', padding: '10px', fontSize: '16px' }}
//                     />
//                     {formErrors.password && (
//                         <p style={{ color: 'red' }}>{formErrors.password}</p>
//                     )}
//                     <button
//                         type="submit"
//                         style={{
//                             padding: '10px',
//                             fontSize: '16px',
//                             cursor: 'pointer',
//                             backgroundColor: '#005f73',
//                             color: 'white',
//                             border: 'none',
//                             borderRadius: '4px',
//                             marginTop: '10px'
//                         }}
//                     >
//                         Log In
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Login;
