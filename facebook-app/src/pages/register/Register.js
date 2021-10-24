import React from 'react';
import './Register.css';
import { useRef } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';



function Register() {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordagain = useRef();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        if(passwordagain.current.value !== password.current.value){
            passwordagain.current.setCustomValidity("Passwords don't match");
        } else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value

            };
            try{
                await axios.post("/auth/register", user);
                history.push('/login')
            } catch(err){
                console.log(err);
            }  
        }
        
    };
    

    return (
        <div className='register'>
            <div className='register-wrapper'>
                <div className='register-left'>
                    <h3 className='register-logo'>Phasebook</h3>
                    <span className='register-desc'>Connect with friends and the world around you on Phasebook.</span>
                </div>

                <div className='register-right'>
                    <form className='register-box' onSubmit={handleClick}>
                        <input placeholder='Username' required ref={username} type='text' className='login-input'/>
                        <input placeholder='Email' required ref={email} type='email' className='login-input'/>
                        <input placeholder='Password' required ref={password} type='password' className='login-input'/>
                        <input placeholder='Password Again' required ref={passwordagain} type='password' className='login-input'/>
                        <button type='submit' className='register-button'>Sign Up</button>
                        <button className='login-register'>Log into Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
