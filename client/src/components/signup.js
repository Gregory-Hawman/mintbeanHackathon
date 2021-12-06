import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/loginSignup.css'

function Signup() {
    const [signup, setSignup] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const navigate = useNavigate();

    const handleSignupChange = (e) => {
        e.preventDefault();
        setSignup({
            ...signup,
            [e.target.name]: e.target.value
        })
    }

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:5555/api/auth/register', signup)
            .then((res) => {
                localStorage.setItem('token', res.data.token);
                navigate('/')
            })
            .catch(err => console.log(err.response));
        setSignup({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSignupSubmit}>
                <input 
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={signup.username}
                    onChange={handleSignupChange}
                />
                <input 
                    type='text'
                    name='email'
                    placeholder='Email'
                    value={signup.email}
                    onChange={handleSignupChange}
                />

                <input 
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={signup.password}
                    onChange={handleSignupChange}
                />

                <input 
                    type='password'
                    name='confirm password'
                    placeholder='Confirm Password'
                    value={signup.password}
                    onChange={handleSignupChange}
                />

                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
};

export default Signup;