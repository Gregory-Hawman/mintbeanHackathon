import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/loginSignup.css';

function Login(props) {
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleLoginChange = (e) => {
        e.preventDefault();
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:5555/api/auth/login', login)
            .then((res) => {
                localStorage.setItem('token', res.data.token);
                navigate('/')
            })
            .catch(err => console.log(err.response));
        setLogin({
            email: '', 
            password:''
        })
    }

    return(
        <div>
            <form onSubmit={handleLoginSubmit}>
                <input 
                type='text'
                name='email'
                placeholder='Email'
                value={login.email}
                onChange={handleLoginChange}
                />

                <input 
                type='password'
                name='password'
                placeholder='Password'
                value={login.password}
                onChange={handleLoginChange}
                />

                <button type='submit'>Log in</button>
            </form>
        </div>
    )
};

export default Login;